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
    'meta.titlePr': 'DaniiKodit · политика конфиденциальности',
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
    'works.w3t': 'Киномир',
    'works.w3d': 'Кинопортал для онлайн-просмотра: каталог с фильтрами по жанрам, умный поиск, встроенный плеер.',
    'works.w3tag1': 'кинопортал',
    'works.w3tag2': 'каталог',
    'works.w4t': 'Бот онлайн-записи',
    'works.w4d': 'Telegram-бот записи клиентов: выбор услуги, мастера и свободного слота, автоматические напоминания.',
    'works.w4tag1': 'Telegram-бот',
    'works.w4tag2': 'Python',

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
    'form.sending': '> отправляю заявку…',
    'form.success': '> заявка отправлена, скоро отвечу',
    'form.error': '> не удалось отправить, напишите в Telegram @Off05',
    'form.consent1': 'Отправляя форму, вы соглашаетесь с ',
    'form.consent2': 'политикой обработки персональных данных',
    'form.consent3': ' (152-ФЗ).',

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
    'pf.p3m': '2026 · кинопортал · kinomir.online',
    'pf.p3t': 'Киномир: онлайн-кинотеатр',
    'pf.p3d': 'Полнофункциональный сайт для просмотра фильмов онлайн. Удобный доступ к каталогу без регистрации и подписки.',
    'pf.p3i1': 'каталог фильмов с фильтрами по жанрам и категориям',
    'pf.p3i2': 'умный поиск с автоподсказками в реальном времени',
    'pf.p3i3': 'встроенный плеер с рекламным блоком',
    'pf.p3i4': 'адаптивный дизайн для мобильных и десктопа',
    'pf.p3i5': 'Open Graph для красивых превью в мессенджерах, юридические страницы',
    'pf.p3link': 'kinomir.online ↗',
    'pf.p4m': '2026 · telegram-бот',
    'pf.p4t': 'Бот онлайн-записи',
    'pf.p4d': 'Telegram-бот, который берёт на себя запись клиентов: показывает свободные слоты, оформляет визит и напоминает о нём. Работает 24/7 и разгружает администратора.',
    'pf.p4i1': 'интерактивный календарь свободных слотов',
    'pf.p4i2': 'выбор услуги и специалиста в пару нажатий',
    'pf.p4i3': 'подтверждение записи и напоминания клиенту',
    'pf.p4i4': 'уведомления бизнесу о новых и отменённых записях',
    'pf.p4i5': 'панель администратора и выгрузка записей',
    'pf.ctat': 'Здесь может быть ваш проект',
    'pf.ctad': 'Опишите задачу: соберу прототип, посчитаю сроки и стоимость.',
    'pf.ctabtn': 'Обсудить ↗',

    'footer.rights': '© 2026 DaniiKodit · сайты и боты под ключ',
    'footer.made': 'сделано руками, без конструкторов',
    'footer.privacy': 'политика конфиденциальности',
    'footer.top': 'наверх ↑',

    'pr.label': 'Документ',
    'pr.title': 'Политика конфиденциальности',
    'pr.updated': 'обновлено: 9 июля 2026',
    'pr.intro': 'Эта страница простым языком объясняет, какие данные собирает сайт, зачем они нужны и что с ними происходит. Оператор данных: DaniiKodit.',
    'pr.s1t': '1. Какие данные собираются',
    'pr.s1d': 'Только то, что вы сами вводите в форму заявки: имя, контакт для связи (Telegram или email) и текст сообщения. Сайт не требует регистрации и не собирает данные в фоне.',
    'pr.s2t': '2. Зачем они нужны',
    'pr.s2d': 'Чтобы ответить на вашу заявку и обсудить проект. Данные не используются для рассылок и рекламы.',
    'pr.s3t': '3. Как обрабатываются',
    'pr.s3d': 'Заявка передаётся через сервис Cloudflare Workers и доставляется оператору в Telegram. На самом сайте данные не сохраняются: базы данных у сайта нет.',
    'pr.s4t': '4. Cookie и localStorage',
    'pr.s4d': 'Сайт не использует cookie и счётчики аналитики. В localStorage браузера хранится только выбранный язык интерфейса (ru/en) — это настройка, а не персональные данные.',
    'pr.s5t': '5. Передача третьим лицам',
    'pr.s5d': 'Данные не продаются и не передаются третьим лицам. Исключение: технические посредники доставки сообщения (Cloudflare, Telegram) в объёме, необходимом для работы формы.',
    'pr.s6t': '6. Ваши права и согласие',
    'pr.s6d': 'Вы можете запросить удаление своих данных из переписки: напишите на d82208962@gmail.com или в Telegram @Off05. Отправляя форму, вы даёте согласие на обработку персональных данных в соответствии с 152-ФЗ «О персональных данных».',
    'pr.back': '← На главную',
  },

  en: {
    'meta.title': 'DaniiKodit · websites & Telegram bots',
    'meta.titlePf': 'DaniiKodit · portfolio',
    'meta.titlePr': 'DaniiKodit · privacy policy',
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
    'works.w3t': 'Kinomir',
    'works.w3d': 'Online cinema portal: catalogue with genre filters, smart search and a built-in player.',
    'works.w3tag1': 'cinema portal',
    'works.w3tag2': 'catalogue',
    'works.w4t': 'Online booking bot',
    'works.w4d': 'Telegram bot for client bookings: pick a service, specialist and free slot, with automatic reminders.',
    'works.w4tag1': 'Telegram bot',
    'works.w4tag2': 'Python',

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
    'form.sending': '> sending your request…',
    'form.success': '> request sent, I’ll reply soon',
    'form.error': '> couldn’t send, ping me on Telegram @Off05',
    'form.consent1': 'By submitting this form you agree to the ',
    'form.consent2': 'personal data processing policy',
    'form.consent3': ' (Russian Federal Law 152-FZ).',

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
    'pf.p3m': '2026 · cinema portal · kinomir.online',
    'pf.p3t': 'Kinomir: online cinema',
    'pf.p3d': 'Full-featured site for watching movies online. Easy access to the catalogue with no sign-up or subscription.',
    'pf.p3i1': 'movie catalogue with genre and category filters',
    'pf.p3i2': 'smart search with real-time suggestions',
    'pf.p3i3': 'built-in player with an ad slot',
    'pf.p3i4': 'responsive design for mobile and desktop',
    'pf.p3i5': 'Open Graph for rich link previews, legal pages',
    'pf.p3link': 'kinomir.online ↗',
    'pf.p4m': '2026 · telegram bot',
    'pf.p4t': 'Online booking bot',
    'pf.p4d': 'A Telegram bot that handles client bookings: shows free slots, books the visit and sends reminders. Works 24/7 and offloads the admin.',
    'pf.p4i1': 'interactive calendar of free slots',
    'pf.p4i2': 'pick a service and specialist in a couple of taps',
    'pf.p4i3': 'booking confirmation and client reminders',
    'pf.p4i4': 'business alerts for new and cancelled bookings',
    'pf.p4i5': 'admin panel and booking export',
    'pf.ctat': 'Your project could be here',
    'pf.ctad': 'Describe the task: I will build a prototype and estimate time and cost.',
    'pf.ctabtn': 'Discuss ↗',

    'footer.rights': '© 2026 DaniiKodit · websites & bots',
    'footer.made': 'built by hand, no site builders',
    'footer.privacy': 'privacy policy',
    'footer.top': 'back to top ↑',

    'pr.label': 'Document',
    'pr.title': 'Privacy policy',
    'pr.updated': 'updated: July 9, 2026',
    'pr.intro': 'This page explains in plain words what data this website collects, why it is needed and what happens to it. Data operator: DaniiKodit.',
    'pr.s1t': '1. What data is collected',
    'pr.s1d': 'Only what you type into the contact form yourself: your name, a way to reach you (Telegram or email) and the message text. The site requires no registration and collects nothing in the background.',
    'pr.s2t': '2. Why it is needed',
    'pr.s2d': 'To reply to your request and discuss the project. The data is never used for mailing lists or advertising.',
    'pr.s3t': '3. How it is processed',
    'pr.s3d': 'The request is passed through Cloudflare Workers and delivered to the operator in Telegram. Nothing is stored on the website itself: the site has no database.',
    'pr.s4t': '4. Cookies and localStorage',
    'pr.s4d': 'The site uses no cookies and no analytics trackers. The browser’s localStorage keeps only your interface language choice (ru/en) — a setting, not personal data.',
    'pr.s5t': '5. Sharing with third parties',
    'pr.s5d': 'The data is never sold or shared with third parties. The only exception: technical delivery intermediaries (Cloudflare, Telegram) to the extent required for the form to work.',
    'pr.s6t': '6. Your rights and consent',
    'pr.s6d': 'You can ask to have your data deleted from the correspondence: write to d82208962@gmail.com or Telegram @Off05. By submitting the form you consent to the processing of personal data under Russian Federal Law 152-FZ “On Personal Data”.',
    'pr.back': '← Back to home',
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

/* ---------- звёздное небо у формы ---------- */

function initStars() {
  const canvas = document.getElementById('pixel-stars');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  const CELL = 5;              // размер «пикселя» в css-px
  let W = 0, H = 0, img = null;
  let stars = [];              // мерцающее звёздное поле

  function put(x, y, c) {
    x |= 0; y |= 0;
    if (x < 0 || x >= W || y < 0 || y >= H) return;
    const i = (y * W + x) * 4;
    const d = img.data;
    d[i] = c[0]; d[i + 1] = c[1]; d[i + 2] = c[2]; d[i + 3] = 255;
  }

  function resize() {
    const rect = canvas.parentElement.getBoundingClientRect();
    W = Math.max(1, Math.ceil(rect.width / CELL));
    H = Math.max(1, Math.ceil(rect.height / CELL));
    canvas.width = W;
    canvas.height = H;
    img = ctx.createImageData(W, H);

    stars = [];
    const n = Math.min(110, Math.round((W * H) / 380));
    for (let i = 0; i < n; i++) {
      stars.push({
        x: 1 + ((Math.random() * (W - 2)) | 0),
        y: 1 + ((Math.random() * (H - 2)) | 0),
        phase: Math.random() * 6.28,
        tw: 0.4 + Math.random() * 1.1,   // скорость мерцания
        big: Math.random() < 0.4,        // крупные умеют вспыхивать искрой
        accent: Math.random() < 0.06,    // редкие лаймовые звёзды
      });
    }
    render(performance.now());
  }

  function render(now) {
    img.data.fill(0);

    // звезда разгорается: точка → ярче → пиксельная искра ✦ → гаснет
    for (const s of stars) {
      const b = Math.sin(now * 0.001 * s.tw + s.phase);
      if (b <= 0.15) continue;
      const head = s.accent ? C_ACC : C_INK;

      if (s.big && b > 0.88) {
        // вспышка крестиком, как рисуют звёзды в пиксель-арте
        put(s.x, s.y, head);
        put(s.x - 1, s.y, C_DIM);
        put(s.x + 1, s.y, C_DIM);
        put(s.x, s.y - 1, C_DIM);
        put(s.x, s.y + 1, C_DIM);
      } else {
        put(s.x, s.y, b > 0.6 ? head : C_DIM);
      }
    }

    ctx.putImageData(img, 0, 0);
  }

  new ResizeObserver(resize).observe(canvas.parentElement);
  resize();

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let sectionVisible = true;
  let rafId = 0;
  let last = 0;

  function frame(now) {
    rafId = 0;
    if (now - last > 80) {
      last = now;
      render(now);
    }
    schedule();
  }

  function schedule() {
    if (!reduceMotion && sectionVisible && !document.hidden && !rafId) {
      rafId = requestAnimationFrame(frame);
    }
  }

  new IntersectionObserver((entries) => {
    sectionVisible = entries[0].isIntersecting;
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

// пиксельная обложка бота онлайн-записи: календарь со слотами
// и бейджем-галочкой (подтверждённая запись)
function drawBotCover(canvas) {
  const ctx = canvas.getContext('2d');
  const W = 128, H = 72;
  canvas.width = W;
  canvas.height = H;
  const rect = (x, y, w, h, c) => { ctx.fillStyle = c; ctx.fillRect(x, y, w, h); };

  const BG = '#111114', DIM = '#2a2a30', INK = '#e8e6e0', ACC = '#c6f24e';

  rect(0, 0, W, H, BG);

  // дизеринг-виньетка по краям — привязка к общему пиксельному стилю
  ctx.fillStyle = '#1c1c22';
  for (let y = 0; y < H; y++) {
    for (let x = 0; x < W; x++) {
      const edge = Math.min(x, W - 1 - x, y, H - 1 - y);
      const v = 1 - edge / 24;
      if (v > 0 && v * 64 > BAYER8[y & 7][x & 7]) ctx.fillRect(x, y, 1, 1);
    }
  }

  // тело календаря
  const cx = 32, cy = 13, cw = 64, ch = 46;
  rect(cx - 1, cy - 1, cw + 2, ch + 2, ACC);   // лаймовая рамка
  rect(cx, cy, cw, ch, '#17171c');             // подложка
  rect(cx, cy, cw, 9, ACC);                    // шапка
  rect(cx + 11, cy - 3, 3, 5, INK);            // «кольца» переплёта
  rect(cx + cw - 14, cy - 3, 3, 5, INK);

  // сетка дней 7×4, часть слотов занята (лайм)
  const cols = 7, rows = 4, cell = 6, gap = 2;
  const gx = cx + 5, gy = cy + 14;
  const booked = { '0,3': 1, '1,1': 1, '2,5': 1 };
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const x = gx + c * (cell + gap);
      const y = gy + r * (cell + gap);
      rect(x, y, cell, cell, booked[r + ',' + c] ? ACC : DIM);
    }
  }

  // бейдж подтверждения с галочкой в правом нижнем углу
  const bx = cx + cw - 15, by = cy + ch - 15;
  rect(bx - 2, by - 2, 18, 18, BG);
  rect(bx, by, 14, 14, ACC);
  const check = [[3, 7], [4, 8], [5, 9], [6, 8], [7, 7], [8, 6], [9, 5], [10, 4]];
  ctx.fillStyle = BG;
  check.forEach(([dx, dy]) => ctx.fillRect(bx + dx, by + dy, 2, 2));
}

function initWorkCanvases() {
  document.querySelectorAll('.work-canvas').forEach((canvas) => {
    if (canvas.dataset.cover === 'bot') {
      drawBotCover(canvas);
      return;
    }
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

/* ---------- форма → Telegram ---------- */

// URL Cloudflare Worker (см. worker/worker.js и README).
// Пока пусто — форма откатывается на почтовый клиент, сайт не ломается.
const FORM_ENDPOINT = 'https://portfolio-form.d82208962.workers.dev';

// откат: открыть почтовый клиент с готовым письмом
function mailtoFallback(status, name, contact, message) {
  const subject = encodeURIComponent(`Заявка с сайта: ${name}`);
  const body = encodeURIComponent(`Имя: ${name}\nКонтакт: ${contact}\n\n${message}`);
  status.textContent = t('form.ok');
  window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
}

function initForm() {
  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');
  if (!form) return;
  const button = form.querySelector('button[type="submit"]');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = form.name.value.trim();
    const contact = form.contact.value.trim();
    const message = form.message.value.trim();

    if (!name || !contact || !message) {
      status.textContent = t('form.empty');
      return;
    }

    // приёмник не настроен — используем почтовый клиент
    if (!FORM_ENDPOINT) {
      mailtoFallback(status, name, contact, message);
      return;
    }

    status.textContent = t('form.sending');
    button.disabled = true;
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          contact,
          message,
          company: form.company ? form.company.value : '', // honeypot
          lang: currentLang,
          page: location.href,
        }),
      });
      if (!res.ok) throw new Error(res.status);
      status.textContent = t('form.success');
      form.reset();
    } catch (err) {
      // не потеряем заявку: предлагаем написать напрямую
      status.textContent = t('form.error');
    } finally {
      button.disabled = false;
    }
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
  initStars();
  initReveal();
  initBurger();
  initForm();

  // «дешифровка» заголовков при загрузке
  setTimeout(scrambleAll, 250);
});
