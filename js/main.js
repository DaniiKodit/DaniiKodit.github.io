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
    'works.w1t': 'Бьюти-салон «ВДОХ»',
    'works.w1d': 'Многостраничный лендинг с AI-генерацией изображений: услуги, мастера, онлайн-запись.',
    'works.w1tag1': 'лендинг',
    'works.w1tag2': 'AI-графика',
    'works.w2t': 'Витрина продукта «Зерно»',
    'works.w2d': 'Продуктовая витрина для локального бренда: каталог, история, точки продаж.',
    'works.w2tag1': 'витрина',
    'works.w2tag2': 'бренд',

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
    'pf.p1m': '2026 · лендинг',
    'pf.p1t': 'Бьюти-салон «ВДОХ»',
    'pf.p1d': 'Многостраничный лендинг для салона красоты: услуги, мастера, онлайн-запись. Изображения сгенерированы нейросетью под фирменный стиль.',
    'pf.p1i1': 'структура и тексты под запись клиентов',
    'pf.p1i2': 'адаптивная вёрстка и анимации',
    'pf.p1i3': 'AI-генерация изображений в стиле салона',
    'pf.p2m': '2026 · витрина',
    'pf.p2t': 'Витрина продукта «Зерно»',
    'pf.p2d': 'Продуктовая витрина для локального бренда: каталог с карточками, история производства, карта точек продаж.',
    'pf.p2i1': 'каталог с карточками продукта',
    'pf.p2i2': 'страница истории бренда',
    'pf.p2i3': 'карта точек продаж',
    'pf.p3m': '2026 · telegram-бот',
    'pf.p3t': 'Бот приёма заявок',
    'pf.p3d': 'Telegram-бот, который собирает заявки через анкету и мгновенно отправляет их менеджеру: без потерянных клиентов и ручного копирования.',
    'pf.p3i1': 'сценарий анкеты и проверка ответов',
    'pf.p3i2': 'уведомления менеджеру в чат',
    'pf.p3i3': 'выгрузка заявок в таблицу',
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
    'works.w1t': 'Beauty salon “VDOKH”',
    'works.w1d': 'Multi-page landing with AI-generated imagery: services, staff, online booking.',
    'works.w1tag1': 'landing',
    'works.w1tag2': 'AI imagery',
    'works.w2t': 'Product showcase “Zerno”',
    'works.w2d': 'Product vitrine for a local brand: catalogue, story, points of sale.',
    'works.w2tag1': 'showcase',
    'works.w2tag2': 'brand',

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
    'pf.p1m': '2026 · landing',
    'pf.p1t': 'Beauty salon “VDOKH”',
    'pf.p1d': 'Multi-page landing for a beauty salon: services, staff, online booking. Imagery generated by AI to match the brand style.',
    'pf.p1i1': 'structure and copy built for bookings',
    'pf.p1i2': 'responsive markup and animations',
    'pf.p1i3': 'AI imagery in the salon’s style',
    'pf.p2m': '2026 · showcase',
    'pf.p2t': 'Product showcase “Zerno”',
    'pf.p2d': 'Product vitrine for a local brand: catalogue with product cards, brand story, points-of-sale map.',
    'pf.p2i1': 'catalogue with product cards',
    'pf.p2i2': 'brand story page',
    'pf.p2i3': 'points-of-sale map',
    'pf.p3m': '2026 · telegram bot',
    'pf.p3t': 'Lead intake bot',
    'pf.p3d': 'A Telegram bot that collects leads through a guided form and instantly forwards them to the manager: no lost clients, no manual copying.',
    'pf.p3i1': 'guided form flow with validation',
    'pf.p3i2': 'instant manager notifications',
    'pf.p3i3': 'lead export to a spreadsheet',
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
  let rowA = null, rowB = null, edgeY = null;

  function resize() {
    const rect = canvas.parentElement.getBoundingClientRect();
    W = Math.max(1, Math.ceil(rect.width / CELL));
    H = Math.max(1, Math.ceil(rect.height / CELL));
    canvas.width = W;
    canvas.height = H;
    img = ctx.createImageData(W, H);
    rowA = new Float32Array(H);
    rowB = new Float32Array(H);
    edgeY = new Float32Array(H);
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

  function render(now) {
    const phase = now * 0.0011;
    const data = img.data;

    // фазы двух встречных волн зависят только от ряда — считаем заранее
    for (let y = 0; y < H; y++) {
      rowA[y] = y * 0.03 + phase * 2;
      rowB[y] = 1.7 - y * 0.052 - phase * 3;
      const dy = (y - H / 2) / H;
      edgeY[y] = dy * dy;
    }

    for (let y = 0; y < H; y++) {
      const bayerRow = BAYER8[y & 7];
      const a = rowA[y];
      const b = rowB[y];
      const ey = edgeY[y];

      for (let x = 0; x < W; x++) {
        // две встречные синусоиды дают бесконечную пиксельную рябь
        let v = 0.5 + 0.32 * Math.sin(x * 0.045 + a) + 0.2 * Math.sin(x * 0.021 + b);

        // затемнение к центру, чтобы читался текст
        const dx = (x - W / 2) / W;
        const edge = Math.min(1, (dx * dx + ey) * 5.76);
        v *= 0.12 + 0.88 * edge;

        const i = (y * W + x) * 4;
        if (v * 64 > bayerRow[x & 7]) {
          const c = v > 0.96 ? C_ACC : v > 0.72 ? C_INK : C_DIM;
          data[i] = c[0]; data[i + 1] = c[1]; data[i + 2] = c[2];
          data[i + 3] = 255;
        } else {
          data[i + 3] = 0;
        }
      }
    }
    ctx.putImageData(img, 0, 0);
  }

  new IntersectionObserver((entries) => {
    heroVisible = entries[0].isIntersecting;
    schedule();
  }).observe(canvas.parentElement);

  document.addEventListener('visibilitychange', schedule);

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
  initWorkCanvases();
  initReveal();
  initBurger();
  initForm();

  // «дешифровка» заголовков при загрузке
  setTimeout(scrambleAll, 250);
});
