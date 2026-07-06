/**
 * Cloudflare Worker — приёмник заявок с формы портфолио.
 * Принимает POST-запрос от формы и пересылает заявку в Telegram.
 *
 * СЕКРЕТЫ задаются в панели Cloudflare (Settings → Variables and Secrets),
 * НЕ в этом файле:
 *   BOT_TOKEN      — токен бота от @BotFather (например 123456:AA...)
 *   CHAT_ID        — куда слать заявки (твой id от @userinfobot)
 *   ALLOWED_ORIGIN — (опционально) https://<логин>.github.io
 *                    ограничивает, с какого сайта принимать заявки
 *
 * Подробная инструкция по деплою — в README.md, раздел
 * «Приём заявок в Telegram».
 */

export default {
  async fetch(request, env) {
    const origin = request.headers.get('Origin') || '';
    const allowed = env.ALLOWED_ORIGIN || '*';
    const cors = {
      'Access-Control-Allow-Origin': allowed === '*' ? '*' : allowed,
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    };

    // предзапрос браузера
    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: cors });
    }
    if (request.method !== 'POST') {
      return json({ ok: false, error: 'method' }, 405, cors);
    }
    // принимаем только со своего сайта, если origin ограничен
    if (allowed !== '*' && origin && origin !== allowed) {
      return json({ ok: false, error: 'forbidden' }, 403, cors);
    }

    let data;
    try {
      data = await request.json();
    } catch {
      return json({ ok: false, error: 'bad_json' }, 400, cors);
    }

    // honeypot: скрытое поле company заполняют только боты
    if (data.company) {
      return json({ ok: true }, 200, cors); // тихо игнорируем спам
    }

    const name = clean(data.name, 200);
    const contact = clean(data.contact, 200);
    const message = clean(data.message, 2000);
    if (!name || !contact || !message) {
      return json({ ok: false, error: 'empty' }, 422, cors);
    }

    const text =
      '🔔 Новая заявка с портфолио\n\n' +
      '👤 Имя: ' + name + '\n' +
      '📨 Контакт: ' + contact + '\n\n' +
      '📝 ' + message + '\n\n' +
      '🌐 ' + clean(data.page, 300) + '  ·  ' + clean(data.lang, 8);

    const tg = await fetch(
      'https://api.telegram.org/bot' + env.BOT_TOKEN + '/sendMessage',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: env.CHAT_ID,
          text,
          disable_web_page_preview: true,
        }),
      }
    );

    if (!tg.ok) {
      return json({ ok: false, error: 'telegram' }, 502, cors);
    }
    return json({ ok: true }, 200, cors);
  },
};

function clean(v, max) {
  return (v == null ? '' : String(v)).slice(0, max).trim();
}

function json(obj, status, cors) {
  return new Response(JSON.stringify(obj), {
    status,
    headers: { 'Content-Type': 'application/json', ...cors },
  });
}
