/* ============================================================
   DaniiKodit — портфолио
   i18n, дизеринг-canvas, анимации
   ============================================================ */

'use strict';

/* ---------- словарь переводов ---------- */

const I18N = {
  ru: {
    'meta.title': 'DaniiKodit · сайты и Telegram-боты',
    'meta.titlePf': 'DaniiKodit · портфолио',
    'nav.home': 'Главная',
    'nav.about': 'Обо мне',
    'nav.works': 'Работы',
    'nav.services': 'Услуги',
    'nav.contact': 'Контакты',
    'nav.cta': 'Связаться',

    'hero.eyebrow': '// портфолио: сайты и telegram-боты',
    'hero.title1': 'Большие идеи',
    'hero.title2': 'начинаются с пикселя.',
    'hero.sub': 'Проектирую и верстаю лендинги под ключ, пишу Telegram-ботов. Быстро, аккуратно и с прицелом на конверсию.',
    'hero.cta1': 'Обсудить проект ↗',
    'hero.cta2': 'Смотреть работы',

    'stats.s1': 'на связи, отвечаю быстро',
    'stats.s2': 'направления: сайты и TG-боты',
    'stats.s3': 'под ключ: от идеи до деплоя',

    'marquee': 'Лендинги под ключ ✦ Telegram-боты ✦ Вёрстка ✦ Дизайн ✦ Анимации ✦ Деплой ✦ Поддержка ✦ ',

    'about.label': '01 · Обо мне',
    'about.title': 'Дизайн, который работает',
    'about.a1t': 'Эстетика × функция',
    'about.a1d': 'Быстрые адаптивные лендинги, где дизайн работает на задачу, а не против неё. Ничего лишнего: каждый блок ведёт к цели.',
    'about.a2t': 'Современный стек',
    'about.a2d': 'Сайты: HTML5, Tailwind CSS, JavaScript. Боты: Python. Без тяжёлых фреймворков, страницы открываются мгновенно.',
    'about.a3t': 'Результат для бизнеса',
    'about.a3d': 'Целюсь в высокую конверсию и PageSpeed 90+, а не в награды за красоту. Сайт обязан приносить заявки, бот — экономить часы рутины.',

    'works.label': '02 · Работы',
    'works.title': 'Избранные проекты',
    'works.all': 'Всё портфолио ↗',
    'works.w1t': 'Visit Vienna',
    'works.w1d': 'Сайт сервиса премиум-трансферов и экскурсий по Вене и Европе: 18 маршрутов, бронирование, светлая и тёмная темы.',
    'works.w1tag1': 'сайт под ключ',
    'works.w1tag2': 'Django',
    'works.w2t': 'Lux Sea Property',
    'works.w2d': 'Сайт агентства зарубежной недвижимости: каталог объектов с фильтрами, умные заявки, Telegram-уведомления.',
    'works.w2tag1': 'недвижимость',
    'works.w2tag2': 'каталог',

    'services.label': '03 · Услуги',
    'services.title': 'Прайс без звёздочек',
    'services.r1t': 'Лендинг',
    'services.r1d': 'одностраничник под ключ: дизайн, вёрстка, деплой',
    'services.r1p': 'от 5 000 ₽',
    'services.r2t': 'Многостраничный сайт',
    'services.r2d': 'до пяти страниц, единая дизайн-система',
    'services.r2p': 'от 9 000 ₽',
    'services.r3t': 'Telegram-бот',
    'services.r3d': 'бот под вашу задачу: заявки, автоответы, интеграции',
    'services.r3p': 'цена по задаче',
    'services.r4t': 'Консультация',
    'services.r4d': 'разбор задачи, советы по структуре и текстам',
    'services.r4p': 'бесплатно',

    'contact.label': '04 · Контакт',
    'contact.title': 'Есть задача? Обсудим.',
    'contact.sub': 'Опишите проект в двух словах, отвечу в течение дня.',
    'contact.or': '// или напрямую',
    'form.name': 'Имя',
    'form.nameph': 'Как к вам обращаться',
    'form.contact': 'Telegram или email',
    'form.contactph': '@username / you@mail.ru',
    'form.msg': 'Задача',
    'form.msgph': 'Пара слов о проекте',
    'form.send': 'Отправить ↗',
    'form.empty': '> заполните все поля',
    'form.ok': '> открываю почтовый клиент…',

    'pf.label': 'Портфолио',
    'pf.title': 'Все проекты',
    'pf.sub': 'Сайты и Telegram-боты: что уже сделано и как это работает.',
    'pf.done': 'что сделано:',
    'pf.p1m': '2026 · сайт под ключ · visitviennaservice.com',
    'pf.p1t': 'Visit Vienna: трансферы и экскурсии',
    'pf.p1d': 'Полнофункциональный сайт для сервиса премиум-трансферов и экскурсий по Вене и Европе. Платформа автоматизирует приём заявок, витрину услуг и общение с клиентами.',
    'pf.p1i1': 'двуязычный сайт RU/EN с мгновенным переключением',
    'pf.p1i2': 'автослайдер на главной с фоновыми фото',
    'pf.p1i3': 'каталог из 18 экскурсий со ссылками на бронирование',
    'pf.p1i4': '4 вида трансферов и форма бронирования с датой и временем',
    'pf.p1i5': 'светлая и тёмная темы, контент управляется через Django Admin',
    'pf.p1i6': 'деплой на VPS: Docker, Nginx, SSL',
    'pf.p1link': 'visitviennaservice.com ↗',
    'pf.p2m': '2026 · сайт под ключ',
    'pf.p2t': 'Lux Sea Property: зарубежная недвижимость',
    'pf.p2d': 'Сайт агентства недвижимости, работающего в Грузии, Северном Кипре и Болгарии. Платформа автоматизирует привлечение клиентов, показ объектов и сбор заявок.',
    'pf.p2i1': 'многоязычный сайт RU/EN с автоматическим переключением',
    'pf.p2i2': 'каталог объектов: фильтры по цене и спальням, поиск',
    'pf.p2i3': 'умная форма заявок с бюджетами под каждую страну',
    'pf.p2i4': 'Telegram-уведомления о новых заявках в реальном времени',
    'pf.p2i5': 'SEO: sitemap, robots.txt, Open Graph, Schema.org',
    'pf.p4t': 'Здесь может быть ваш проект',
    'pf.p4d': 'Опишите задачу: соберу прототип, посчитаю сроки и стоимость.',
    'pf.p4btn': 'Обсудить ↗',

    'footer.rights': '© 2026 DaniiKodit · сайты и боты под ключ',
    'footer.made': 'сделано руками, без конструкторов',
    'footer.top': 'наверх ↑',
  },

  en: {
    'meta.title': 'DaniiKodit · websites & Telegram bots',
    'meta.titlePf': 'DaniiKodit · portfolio',
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.works': 'Works',
    'nav.services': 'Services',
    'nav.contact': 'Contact',
    'nav.cta': 'Get in touch',

    'hero.eyebrow': '// portfolio: websites & telegram bots',
    'hero.title1': 'Big ideas',
    'hero.title2': 'start with a pixel.',
    'hero.sub': 'I build turnkey landing pages and Telegram bots. Fast, precise and conversion-driven.',
    'hero.cta1': 'Discuss a project ↗',
    'hero.cta2': 'View works',

    'stats.s1': 'reachable, quick replies',
    'stats.s2': 'tracks: websites and TG bots',
    'stats.s3': 'turnkey: from idea to deploy',

    'marquee': 'Turnkey landing pages ✦ Telegram bots ✦ Markup ✦ Design ✦ Animation ✦ Deploy ✦ Support ✦ ',

    'about.label': '01 · About',
    'about.title': 'Design that works',
    'about.a1t': 'Aesthetics × function',
    'about.a1d': 'Fast responsive landing pages where design serves the goal, not fights it. Nothing extra: every block leads somewhere.',
    'about.a2t': 'Modern stack',
    'about.a2d': 'Websites: HTML5, Tailwind CSS, JavaScript. Bots: Python. No heavy frameworks, pages open instantly.',
    'about.a3t': 'Business results',
    'about.a3d': 'I aim for high conversion and PageSpeed 90+, not beauty awards. A website must bring leads, a bot must save hours of routine.',

    'works.label': '02 · Works',
    'works.title': 'Selected projects',
    'works.all': 'Full portfolio ↗',
    'works.w1t': 'Visit Vienna',
    'works.w1d': 'Website for a premium transfer and tour service in Vienna and Europe: 18 routes, booking, light and dark themes.',
    'works.w1tag1': 'turnkey website',
    'works.w1tag2': 'Django',
    'works.w2t': 'Lux Sea Property',
    'works.w2d': 'Website for an overseas real estate agency: property catalogue with filters, smart lead forms, Telegram notifications.',
    'works.w2tag1': 'real estate',
    'works.w2tag2': 'catalogue',

    'services.label': '03 · Services',
    'services.title': 'Pricing, no asterisks',
    'services.r1t': 'Landing page',
    'services.r1d': 'turnkey one-pager: design, markup, deploy',
    'services.r1p': 'from 5 000 ₽',
    'services.r2t': 'Multi-page website',
    'services.r2d': 'up to five pages, one design system',
    'services.r2p': 'from 9 000 ₽',
    'services.r3t': 'Telegram bot',
    'services.r3d': 'a bot for your task: leads, auto-replies, integrations',
    'services.r3p': 'depends on task',
    'services.r4t': 'Consultation',
    'services.r4d': 'project review, advice on structure and copy',
    'services.r4p': 'free',

    'contact.label': '04 · Contact',
    'contact.title': 'Got a project? Let’s talk.',
    'contact.sub': 'Describe it in a couple of sentences, I reply within a day.',
    'contact.or': '// or directly',
    'form.name': 'Name',
    'form.nameph': 'What should I call you',
    'form.contact': 'Telegram or email',
    'form.contactph': '@username / you@mail.com',
    'form.msg': 'Project',
    'form.msgph': 'A few words about it',
    'form.send': 'Send ↗',
    'form.empty': '> please fill in all fields',
    'form.ok': '> opening your mail client…',

    'pf.label': 'Portfolio',
    'pf.title': 'All projects',
    'pf.sub': 'Websites and Telegram bots: what is already shipped and how it works.',
    'pf.done': 'what was done:',
    'pf.p1m': '2026 · turnkey website · visitviennaservice.com',
    'pf.p1t': 'Visit Vienna: transfers & tours',
    'pf.p1d': 'Full-featured website for a premium transfer and tour service in Vienna and Europe. The platform automates lead intake, the service showcase and client communication.',
    'pf.p1i1': 'bilingual RU/EN site with instant switching',
    'pf.p1i2': 'homepage auto-slider with background photos',
    'pf.p1i3': 'catalogue of 18 tours with direct booking links',
    'pf.p1i4': '4 transfer types and a booking form with date and time',
    'pf.p1i5': 'light and dark themes, content managed via Django Admin',
    'pf.p1i6': 'VPS deployment: Docker, Nginx, SSL',
    'pf.p1link': 'visitviennaservice.com ↗',
    'pf.p2m': '2026 · turnkey website',
    'pf.p2t': 'Lux Sea Property: real estate abroad',
    'pf.p2d': 'Website for a real estate agency operating in Georgia, Northern Cyprus and Bulgaria. The platform automates client acquisition, property showcase and lead collection.',
    'pf.p2i1': 'multilingual RU/EN site with automatic switching',
    'pf.p2i2': 'property catalogue: price and bedroom filters, search',
    'pf.p2i3': 'smart lead form with per-country budgets',
    'pf.p2i4': 'real-time Telegram notifications for new leads',
    'pf.p2i5': 'SEO: sitemap, robots.txt, Open Graph, Schema.org',
    'pf.p4t': 'Your project could be here',
    'pf.p4d': 'Describe the task: I will build a prototype and estimate time and cost.',
    'pf.p4btn': 'Discuss ↗',

    'footer.rights': '© 2026 DaniiKodit · websites & bots',
    'footer.made': 'built by hand, no site builders',
    'footer.top': 'back to top ↑',
  },
};

const CONTACT_EMAIL = 'd82208962@gmail.com';

let currentLang = localStorage.getItem('lang') || 'ru';

function t(key) {
  return (I18N[currentLang] && I18N[currentLang][key]) || I18N.ru[key] || key;
}

function setLang(lang, animate) {
  currentLang = I18N[lang] ? lang : 'ru';
  localStorage.setItem('lang', currentLang);
  document.documentElement.lang = currentLang;
  document.title = t(document.body.dataset.titleKey || 'meta.title');

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    el.textContent = t(el.dataset.i18n);
  });
  document.querySelectorAll('[data-i18n-clone]').forEach((el) => {
    el.textContent = t(el.dataset.i18nClone);
  });
  document.querySelectorAll('[data-i18n-ph]').forEach((el) => {
    el.placeholder = t(el.dataset.i18nPh);
  });

  document.querySelectorAll('.lang-switch button').forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.lang === currentLang);
  });

  if (tickerRefresh) tickerRefresh();
  if (animate) scrambleAll();
}

/* ---------- эффект «дешифровки» заголовков ---------- */

const GLYPHS = '▓▒░█#<>/\\*+=~';

function scramble(el, finalText) {
  if (!el) return;
  if (el._scrambleTimer) clearInterval(el._scrambleTimer);

  const total = finalText.length;
  let frame = 0;
  const framesPerChar = 2;

  el._scrambleTimer = setInterval(() => {
    const revealed = Math.floor(frame / framesPerChar);
    let out = '';
    for (let i = 0; i < total; i++) {
      if (i < revealed || finalText[i] === ' ') {
        out += finalText[i];
      } else {
        out += GLYPHS[(Math.random() * GLYPHS.length) | 0];
      }
    }
    el.textContent = out;
    frame++;
    if (revealed >= total) {
      clearInterval(el._scrambleTimer);
      el._scrambleTimer = null;
      el.textContent = finalText;
    }
  }, 30);
}

function scrambleAll() {
  document.querySelectorAll('.js-scramble').forEach((el) => {
    scramble(el, t(el.dataset.i18n));
  });
}

/* ---------- дизеринг: общее ---------- */

const BAYER8 = [
  [0, 32, 8, 40, 2, 34, 10, 42],
  [48, 16, 56, 24, 50, 18, 58, 26],
  [12, 44, 4, 36, 14, 46, 6, 38],
  [60, 28, 52, 20, 62, 30, 54, 22],
  [3, 35, 11, 43, 1, 33, 9, 41],
  [51, 19, 59, 27, 49, 17, 57, 25],
  [15, 47, 7, 39, 13, 45, 5, 37],
  [63, 31, 55, 23, 61, 29, 53, 21],
];

// цвета пикселей: тусклый, яркий, акцент
const C_DIM = [70, 70, 78];
const C_INK = [232, 230, 224];
const C_ACC = [198, 242, 78];

/* ---------- цикличная пиксельная волна в hero ---------- */

function initHeroDither() {
  const canvas = document.getElementById('dither-hero');
  if (!canvas) return;
  if (new URLSearchParams(location.search).has('static')) return;
  const ctx = canvas.getContext('2d');

  const CELL = 5;              // размер «пикселя» в css-px
  let W = 0, H = 0, img = null;
  let crestBack = null, crestFront = null;

  function resize() {
    const rect = canvas.parentElement.getBoundingClientRect();
    W = Math.max(1, Math.ceil(rect.width / CELL));
    H = Math.max(1, Math.ceil(rect.height / CELL));
    canvas.width = W;
    canvas.height = H;
    img = ctx.createImageData(W, H);
    crestBack = new Float32Array(W);
    crestFront = new Float32Array(W);
    // смена размера очищает canvas — сразу рисуем кадр, не дожидаясь rAF
    // (у скрытой вкладки rAF заморожен, и фон остался бы пустым)
    render(performance.now());
  }

  new ResizeObserver(resize).observe(canvas.parentElement);
  resize();

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // рисуем только когда hero виден и вкладка активна,
  // иначе цикл жрёт ресурсы впустую
  let heroVisible = true;
  let rafId = 0;
  let last = 0;

  function frame(now) {
    rafId = 0;
    if (now - last > 90) {     // ~11 fps — дизеринг любит «дёрганость»
      last = now;
      render(now);
    }
    schedule();
  }

  function schedule() {
    if (!reduceMotion && heroVisible && !document.hidden && !rafId) {
      rafId = requestAnimationFrame(frame);
    }
  }

  // рисует один слой волны: всё ниже линии гребня заливается
  // дизерингом, плотность тает с глубиной; overwrite=true затирает
  // задний слой, чтобы передняя волна перекрывала заднюю
  function drawWave(crest, fadeLen, crestColor, overwrite) {
    const data = img.data;
    for (let x = 0; x < W; x++) {
      const top = Math.max(0, crest[x] | 0);
      for (let y = top; y < H; y++) {
        const depth = y - crest[x];
        const v = 1 - depth / fadeLen;
        if (v <= 0) break;
        const i = (y * W + x) * 4;
        if (v * 64 > BAYER8[y & 7][x & 7]) {
          const c = depth < 2 ? crestColor : depth < 8 ? C_INK : C_DIM;
          data[i] = c[0]; data[i + 1] = c[1]; data[i + 2] = c[2];
          data[i + 3] = 255;
        } else if (overwrite) {
          data[i + 3] = 0;
        }
      }
    }
  }

  function render(now) {
    const phase = now * 0.0012;
    img.data.fill(0);

    // линии гребней: сумма двух синусоид на колонку, фаза бежит
    // по кругу — волны катятся бесконечно
    for (let x = 0; x < W; x++) {
      crestBack[x] =
        H * 0.66 +
        H * 0.045 * Math.sin(x * 0.05 + phase * 1.6) +
        H * 0.028 * Math.sin(x * 0.023 - phase * 2.4);
      crestFront[x] =
        H * 0.78 +
        H * 0.055 * Math.sin(x * 0.042 - phase * 2.0) +
        H * 0.032 * Math.sin(x * 0.019 + phase * 1.2);
    }

    drawWave(crestBack, H * 0.4, C_INK, false);   // задняя волна, тусклый гребень
    drawWave(crestFront, H * 0.5, C_ACC, true);   // передняя волна, лаймовый гребень

    ctx.putImageData(img, 0, 0);
  }

  new IntersectionObserver((entries) => {
    heroVisible = entries[0].isIntersecting;
    schedule();
  }).observe(canvas.parentElement);

  document.addEventListener('visibilitychange', schedule);

  schedule();
}

/* ---------- пиксельный тикер ---------- */

// setLang дёргает этот хук, чтобы тикер перерисовал текст на новом языке
let tickerRefresh = null;

function initPixelTicker() {
  const canvas = document.getElementById('pixel-ticker');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  const CELL = 4;              // размер «пикселя» в css-px
  const STRIP = 64;            // высота полосы в css-px
  let W = 0, H = 0, img = null;
  let mask = null, maskW = 1;

  // текст рендерится в offscreen-канвас и превращается в битовую маску
  function buildMask() {
    const text = t('marquee').toUpperCase();
    const m = document.createElement('canvas');
    const mc = m.getContext('2d');
    const font = `${H - 4}px "JetBrains Mono", monospace`;
    mc.font = font;
    maskW = Math.max(1, Math.ceil(mc.measureText(text).width));
    m.width = maskW;
    m.height = H;
    mc.font = font;            // смена размера сбрасывает состояние
    mc.textBaseline = 'middle';
    mc.fillStyle = '#fff';
    mc.fillText(text, 0, H / 2 + 1);

    const d = mc.getImageData(0, 0, maskW, H).data;
    mask = new Uint8Array(maskW * H);
    for (let i = 0; i < mask.length; i++) mask[i] = d[i * 4 + 3] > 120 ? 1 : 0;
  }

  function resize() {
    const rect = canvas.parentElement.getBoundingClientRect();
    W = Math.max(1, Math.ceil(rect.width / CELL));
    H = Math.round(STRIP / CELL);
    canvas.width = W;
    canvas.height = H;
    img = ctx.createImageData(W, H);
    buildMask();
    render(performance.now());
  }

  function render(now) {
    if (!mask) return;
    const data = img.data;
    data.fill(0);

    const offset = Math.floor(now * 0.02) % maskW;  // скорость прокрутки
    const phase = now * 0.0025;
    const FADE = Math.min(14, W >> 2);              // растворение у краёв

    for (let sx = 0; sx < W; sx++) {
      const mx = (sx + offset) % maskW;
      // волна прокатывается по строке: буквы приподнимаются,
      // а на гребне подсвечиваются акцентом
      const wobble = Math.sin(sx * 0.09 - phase);
      const dy = Math.round(wobble * 1.6);
      const c = wobble > 0.9 ? C_ACC : C_INK;
      const edge = Math.min(sx, W - 1 - sx);

      for (let sy = 0; sy < H; sy++) {
        const my = sy - dy;
        if (my < 0 || my >= H) continue;
        if (!mask[my * maskW + mx]) continue;
        if (edge < FADE && (edge / FADE) * 64 <= BAYER8[sy & 7][sx & 7]) continue;
        const i = (sy * W + sx) * 4;
        data[i] = c[0]; data[i + 1] = c[1]; data[i + 2] = c[2];
        data[i + 3] = 255;
      }
    }
    ctx.putImageData(img, 0, 0);
  }

  new ResizeObserver(resize).observe(canvas.parentElement);
  resize();

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let stripVisible = true;
  let rafId = 0;
  let last = 0;

  function frame(now) {
    rafId = 0;
    if (now - last > 70) {
      last = now;
      render(now);
    }
    schedule();
  }

  function schedule() {
    if (!reduceMotion && stripVisible && !document.hidden && !rafId) {
      rafId = requestAnimationFrame(frame);
    }
  }

  new IntersectionObserver((entries) => {
    stripVisible = entries[0].isIntersecting;
    schedule();
  }).observe(canvas.parentElement);

  document.addEventListener('visibilitychange', schedule);

  tickerRefresh = () => { buildMask(); render(performance.now()); };
  // когда догрузится моноширинный шрифт, перерисовываем маску начисто
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(() => tickerRefresh && tickerRefresh());
  }

  schedule();
}

/* ---------- статичные дизеринг-обложки проектов ---------- */

function drawWorkCanvas(canvas) {
  const ctx = canvas.getContext('2d');
  const seed = parseInt(canvas.dataset.seed || '1', 10);
  const CELL = 5;

  const rect = canvas.getBoundingClientRect();
  const W = Math.max(1, Math.ceil(rect.width / CELL));
  const H = Math.max(1, Math.ceil(rect.height / CELL));
  canvas.width = W;
  canvas.height = H;

  const img = ctx.createImageData(W, H);
  const data = img.data;

  for (let y = 0; y < H; y++) {
    for (let x = 0; x < W; x++) {
      // диагональный градиент + волна, у каждой обложки свой характер от seed
      let v =
        (x / W) * 0.5 + (1 - y / H) * 0.25 +
        0.3 * Math.sin(x * 0.09 * (1 + seed * 0.13) + y * 0.07 + seed) +
        0.15 * Math.sin(y * 0.2 + seed * 2);

      const i = (y * W + x) * 4;
      const lit = v * 64 > BAYER8[y & 7][x & 7];
      if (lit) {
        const c = v > 0.9 ? C_ACC : v > 0.6 ? C_INK : C_DIM;
        data[i] = c[0]; data[i + 1] = c[1]; data[i + 2] = c[2];
        data[i + 3] = 255;
      } else {
        data[i] = 17; data[i + 1] = 17; data[i + 2] = 20;
        data[i + 3] = 255;
      }
    }
  }
  ctx.putImageData(img, 0, 0);
}

function initWorkCanvases() {
  document.querySelectorAll('.work-canvas').forEach((canvas) => {
    new ResizeObserver(() => drawWorkCanvas(canvas)).observe(canvas.parentElement);
    drawWorkCanvas(canvas);
  });
}

/* ---------- появление при скролле ---------- */

function initReveal() {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  document.querySelectorAll('.reveal').forEach((el) => io.observe(el));
}

/* ---------- мобильное меню ---------- */

function initBurger() {
  const burger = document.getElementById('burger');
  const nav = document.getElementById('site-nav');
  if (!burger || !nav) return;

  burger.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    burger.setAttribute('aria-expanded', String(open));
  });
  nav.querySelectorAll('a').forEach((a) =>
    a.addEventListener('click', () => {
      nav.classList.remove('open');
      burger.setAttribute('aria-expanded', 'false');
    })
  );
}

/* ---------- форма → письмо ---------- */

function initForm() {
  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = form.name.value.trim();
    const contact = form.contact.value.trim();
    const message = form.message.value.trim();

    if (!name || !contact || !message) {
      status.textContent = t('form.empty');
      return;
    }

    const subject = encodeURIComponent(`Заявка с сайта: ${name}`);
    const body = encodeURIComponent(`Имя: ${name}\nКонтакт: ${contact}\n\n${message}`);
    status.textContent = t('form.ok');
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  });
}

/* ---------- старт ---------- */

document.addEventListener('DOMContentLoaded', () => {
  setLang(currentLang, false);

  document.querySelectorAll('.lang-switch button').forEach((btn) => {
    btn.addEventListener('click', () => {
      if (btn.dataset.lang !== currentLang) setLang(btn.dataset.lang, true);
    });
  });

  initHeroDither();
  initPixelTicker();
  initWorkCanvases();
  initReveal();
  initBurger();
  initForm();

  // «дешифровка» заголовков при загрузке
  setTimeout(scrambleAll, 250);
});
