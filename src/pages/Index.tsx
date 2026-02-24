import { useState } from "react";
import Icon from "@/components/ui/icon";

const NAV_LINKS = [
  { id: "home", label: "Главная" },
  { id: "services", label: "Услуги" },
  { id: "about", label: "О компании" },
  { id: "calculator", label: "Калькулятор" },
  { id: "tracking", label: "Отслеживание" },
  { id: "blog", label: "Блог" },
  { id: "contacts", label: "Контакты" },
];

const SERVICES = [
  {
    icon: "Truck",
    title: "Автомобильные перевозки",
    desc: "Доставка грузов по России и Европе на собственном и привлечённом транспорте. FTL и LTL отправки.",
  },
  {
    icon: "Package",
    title: "Складская логистика",
    desc: "Ответственное хранение, обработка и комплектация грузов на сертифицированных складских комплексах.",
  },
  {
    icon: "Globe",
    title: "Международные перевозки",
    desc: "Организация международных грузоперевозок с полным таможенным оформлением и страхованием.",
  },
  {
    icon: "Ship",
    title: "Морские и авиаперевозки",
    desc: "Мультимодальные схемы доставки с использованием морского и воздушного транспорта.",
  },
  {
    icon: "ClipboardList",
    title: "Таможенное оформление",
    desc: "Профессиональные таможенные брокеры обеспечат быстрое и правильное оформление документов.",
  },
  {
    icon: "Shield",
    title: "Страхование грузов",
    desc: "Комплексное страхование вашего груза на всех этапах перевозки от отправителя до получателя.",
  },
];

const STATS = [
  { value: "15+", label: "Лет на рынке" },
  { value: "10 000+", label: "Доставленных грузов" },
  { value: "50+", label: "Стран присутствия" },
  { value: "98%", label: "Довольных клиентов" },
];

const BLOG_POSTS = [
  {
    date: "15 февраля 2026",
    tag: "Новости",
    title: "Изменения в таможенном законодательстве 2026",
    desc: "Обзор ключевых поправок, вступивших в силу в начале года, и их влияние на международные грузоперевозки.",
  },
  {
    date: "10 февраля 2026",
    tag: "Советы",
    title: "Как правильно упаковать груз для международной доставки",
    desc: "Практические рекомендации по упаковке и маркировке, которые помогут сохранить ваш товар в пути.",
  },
  {
    date: "3 февраля 2026",
    tag: "Аналитика",
    title: "Тренды в логистике: что ждёт рынок в 2026 году",
    desc: "Цифровизация, устойчивое развитие и автоматизация — ключевые тенденции логистического рынка.",
  },
];

export default function Index() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [weight, setWeight] = useState("");
  const [volume, setVolume] = useState("");
  const [distance, setDistance] = useState("");
  const [calcResult, setCalcResult] = useState<number | null>(null);
  const [trackingNumber, setTrackingNumber] = useState("");
  const [trackingResult, setTrackingResult] = useState<string | null>(null);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  const handleCalc = () => {
    const w = parseFloat(weight) || 0;
    const v = parseFloat(volume) || 0;
    const d = parseFloat(distance) || 0;
    if (!w || !v || !d) return;
    const base = Math.max(w * 15, v * 1000 * 15);
    const result = base + d * 0.8;
    setCalcResult(Math.round(result));
  };

  const handleTracking = () => {
    if (!trackingNumber.trim()) return;
    const statuses = [
      "Груз принят на складе отправления",
      "В пути — таможенная очистка пройдена",
      "Прибыл на склад назначения",
      "Передан курьеру для доставки",
    ];
    const random = statuses[Math.floor(Math.random() * statuses.length)];
    setTrackingResult(random);
  };

  return (
    <div className="font-opensans text-brand-dark">
      {/* TOP BAR */}
      <div className="bg-brand-dark text-white text-sm py-2 hidden md:block">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex gap-6">
            <span className="flex items-center gap-2">
              <Icon name="Phone" size={14} />
              +7 (800) 555-35-35
            </span>
            <span className="flex items-center gap-2">
              <Icon name="Mail" size={14} />
              info@st-cargo.ru
            </span>
          </div>
          <div className="flex gap-6">
            <span className="flex items-center gap-2">
              <Icon name="Clock" size={14} />
              Пн–Пт: 9:00–18:00
            </span>
            <span className="flex items-center gap-2">
              <Icon name="MapPin" size={14} />
              Москва, ул. Логистическая, 1
            </span>
          </div>
        </div>
      </div>

      {/* HEADER */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
          {/* LOGO */}
          <div
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => scrollTo("home")}
          >
            <div className="bg-brand-orange w-10 h-10 flex items-center justify-center rounded">
              <span className="text-white font-montserrat font-black text-sm tracking-tight">ST</span>
            </div>
            <div className="leading-tight">
              <div className="font-montserrat font-black text-xl text-brand-dark tracking-wide">
                ST-CARGO
              </div>
              <div className="text-[10px] text-brand-orange font-semibold tracking-widest uppercase">
                Международные перевозки
              </div>
            </div>
          </div>

          {/* NAV */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="px-3 py-2 text-sm font-medium text-brand-dark hover:text-brand-orange transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-orange transition-all duration-200 group-hover:w-full" />
              </button>
            ))}
          </nav>

          {/* CTA */}
          <button
            onClick={() => scrollTo("contacts")}
            className="hidden lg:block bg-brand-orange text-white px-5 py-2 rounded text-sm font-semibold hover:bg-orange-600 transition-colors duration-200"
          >
            Получить расчёт
          </button>

          {/* MOBILE TOGGLE */}
          <button
            className="lg:hidden text-brand-dark"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <Icon name={mobileOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {/* MOBILE MENU */}
        {mobileOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-2">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="text-left py-2 text-sm font-medium text-brand-dark hover:text-brand-orange transition-colors"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo("contacts")}
              className="mt-2 bg-brand-orange text-white px-5 py-2 rounded text-sm font-semibold"
            >
              Получить расчёт
            </button>
          </div>
        )}
      </header>

      {/* HERO */}
      <section
        id="home"
        className="relative min-h-[90vh] flex items-center overflow-hidden"
        style={{
          backgroundImage: `url(https://cdn.poehali.dev/projects/52680bc8-790c-4e8e-b954-29f1b97cbe10/files/dbc20085-1667-4d30-b940-6972ab9d6597.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-brand-dark/75" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
          <div className="max-w-2xl animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-brand-orange/20 border border-brand-orange/40 text-brand-orange px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
              <Icon name="Zap" size={14} />
              Надёжная доставка по всему миру
            </div>
            <h1 className="font-montserrat text-4xl md:text-6xl font-black text-white leading-tight mb-6">
              Ваш груз —<br />
              <span className="text-brand-orange">наша ответственность</span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-10">
              ST-CARGO — международный логистический оператор полного цикла.
              Доставляем грузы в 50+ стран мира быстро, безопасно и выгодно.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => scrollTo("calculator")}
                className="bg-brand-orange text-white px-8 py-3.5 rounded font-semibold text-base hover:bg-orange-600 transition-all duration-200 hover:-translate-y-0.5 shadow-lg shadow-orange-900/30"
              >
                Рассчитать стоимость
              </button>
              <button
                onClick={() => scrollTo("services")}
                className="border border-white/40 text-white px-8 py-3.5 rounded font-semibold text-base hover:bg-white/10 transition-all duration-200"
              >
                Наши услуги
              </button>
            </div>
          </div>
        </div>

        {/* STATS BAR */}
        <div className="absolute bottom-0 left-0 right-0 bg-brand-orange">
          <div className="max-w-7xl mx-auto px-6 py-5 grid grid-cols-2 md:grid-cols-4 gap-4">
            {STATS.map((s) => (
              <div key={s.label} className="text-center text-white">
                <div className="font-montserrat font-black text-2xl md:text-3xl">{s.value}</div>
                <div className="text-orange-100 text-sm mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-20 bg-brand-gray">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="inline-block bg-brand-orange/10 text-brand-orange text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              Что мы делаем
            </div>
            <h2 className="font-montserrat font-black text-3xl md:text-4xl text-brand-dark mb-4">
              Наши услуги
            </h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              Полный спектр логистических решений для вашего бизнеса
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s) => (
              <div
                key={s.title}
                className="bg-white rounded-xl p-7 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 group border border-gray-100"
              >
                <div className="w-12 h-12 bg-brand-orange/10 rounded-lg flex items-center justify-center mb-5 group-hover:bg-brand-orange transition-colors duration-300">
                  <Icon
                    name={s.icon}
                    fallback="Package"
                    size={22}
                    className="text-brand-orange group-hover:text-white transition-colors duration-300"
                  />
                </div>
                <h3 className="font-montserrat font-bold text-lg text-brand-dark mb-3">
                  {s.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block bg-brand-orange/10 text-brand-orange text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
                О нас
              </div>
              <h2 className="font-montserrat font-black text-3xl md:text-4xl text-brand-dark mb-6 leading-tight">
                15 лет надёжной<br />
                <span className="text-brand-orange">логистики</span>
              </h2>
              <p className="text-gray-500 leading-relaxed mb-6">
                ST-CARGO основана в 2010 году и за это время выросла в одного из ведущих
                логистических операторов региона. Мы специализируемся на организации
                сложных мультимодальных перевозок и предоставляем полный комплекс
                логистических услуг для бизнеса любого масштаба.
              </p>
              <p className="text-gray-500 leading-relaxed mb-8">
                Наша команда — это более 200 профессиональных специалистов: логисты,
                таможенные брокеры, водители и менеджеры по работе с клиентами.
                Каждый груз для нас — персональная ответственность.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: "Users", text: "200+ специалистов" },
                  { icon: "MapPin", text: "Офисы в 10 городах" },
                  { icon: "Award", text: "ISO 9001:2015" },
                  { icon: "TrendingUp", text: "Рост 30% в год" },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-3 bg-brand-gray rounded-lg p-3">
                    <div className="w-8 h-8 bg-brand-orange/10 rounded flex items-center justify-center flex-shrink-0">
                      <Icon name={item.icon} fallback="Info" size={16} className="text-brand-orange" />
                    </div>
                    <span className="text-sm font-semibold text-brand-dark">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="https://cdn.poehali.dev/projects/52680bc8-790c-4e8e-b954-29f1b97cbe10/files/9adc43c3-bfd6-400b-9948-6111d8afa5f6.jpg"
                alt="Склад ST-CARGO"
                className="rounded-2xl w-full object-cover h-[420px] shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-brand-orange text-white rounded-xl p-5 shadow-xl">
                <div className="font-montserrat font-black text-3xl">10K+</div>
                <div className="text-orange-100 text-sm">доставленных грузов</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CALCULATOR */}
      <section id="calculator" className="py-20 bg-brand-dark">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-block bg-brand-orange/20 text-brand-orange text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              Быстрый расчёт
            </div>
            <h2 className="font-montserrat font-black text-3xl md:text-4xl text-white mb-4">
              Калькулятор стоимости доставки
            </h2>
            <p className="text-gray-400 text-lg">
              Введите параметры груза и получите предварительную стоимость
            </p>
          </div>

          <div className="bg-brand-dark-light rounded-2xl p-8 md:p-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div>
                <label className="block text-gray-400 text-sm font-medium mb-2">
                  Вес груза (кг)
                </label>
                <input
                  type="number"
                  placeholder="Например: 500"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  className="w-full bg-brand-dark border border-white/10 text-white placeholder-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-orange transition-colors"
                />
              </div>
              <div>
                <label className="block text-gray-400 text-sm font-medium mb-2">
                  Объём груза (м³)
                </label>
                <input
                  type="number"
                  placeholder="Например: 2.5"
                  value={volume}
                  onChange={(e) => setVolume(e.target.value)}
                  className="w-full bg-brand-dark border border-white/10 text-white placeholder-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-orange transition-colors"
                />
              </div>
              <div>
                <label className="block text-gray-400 text-sm font-medium mb-2">
                  Расстояние (км)
                </label>
                <input
                  type="number"
                  placeholder="Например: 1500"
                  value={distance}
                  onChange={(e) => setDistance(e.target.value)}
                  className="w-full bg-brand-dark border border-white/10 text-white placeholder-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-orange transition-colors"
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 items-center">
              <button
                onClick={handleCalc}
                className="bg-brand-orange text-white px-10 py-3.5 rounded-lg font-semibold text-base hover:bg-orange-600 transition-colors w-full md:w-auto"
              >
                Рассчитать стоимость
              </button>

              {calcResult !== null && (
                <div className="flex-1 bg-brand-orange/10 border border-brand-orange/30 rounded-lg px-6 py-3.5 flex items-center justify-between">
                  <div>
                    <div className="text-gray-400 text-sm">Предварительная стоимость</div>
                    <div className="font-montserrat font-black text-2xl text-brand-orange">
                      {calcResult.toLocaleString("ru-RU")} ₽
                    </div>
                  </div>
                  <div className="text-gray-500 text-xs text-right max-w-[150px]">
                    * Точная стоимость уточняется у менеджера
                  </div>
                </div>
              )}
            </div>

            <div className="mt-6 flex flex-wrap gap-4 text-sm text-gray-500">
              <span className="flex items-center gap-1.5">
                <Icon name="CheckCircle" size={14} className="text-brand-orange" />
                Учитывается объёмный вес
              </span>
              <span className="flex items-center gap-1.5">
                <Icon name="CheckCircle" size={14} className="text-brand-orange" />
                Ставка от расстояния маршрута
              </span>
              <span className="flex items-center gap-1.5">
                <Icon name="CheckCircle" size={14} className="text-brand-orange" />
                Цены включают НДС
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* TRACKING */}
      <section id="tracking" className="py-20 bg-brand-gray">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-block bg-brand-orange/10 text-brand-orange text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              Отслеживание
            </div>
            <h2 className="font-montserrat font-black text-3xl md:text-4xl text-brand-dark mb-4">
              Где мой груз?
            </h2>
            <p className="text-gray-500 text-lg">
              Введите номер накладной для получения актуального статуса
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                placeholder="Номер накладной (например: ST-2026-00123)"
                value={trackingNumber}
                onChange={(e) => setTrackingNumber(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleTracking()}
                className="flex-1 border border-gray-200 text-brand-dark placeholder-gray-400 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-orange transition-colors"
              />
              <button
                onClick={handleTracking}
                className="bg-brand-orange text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors whitespace-nowrap"
              >
                Отследить
              </button>
            </div>

            {trackingResult && (
              <div className="mt-6 bg-green-50 border border-green-200 rounded-xl p-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" size={18} className="text-green-600" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Текущий статус груза</div>
                    <div className="font-semibold text-brand-dark text-lg">{trackingResult}</div>
                    <div className="text-sm text-gray-400 mt-1">
                      Последнее обновление: {new Date().toLocaleString("ru-RU")}
                    </div>
                  </div>
                </div>
                <div className="mt-4 flex gap-2 flex-wrap">
                  {["Принят", "В пути", "На складе", "Доставлен"].map((step, i) => (
                    <div
                      key={step}
                      className={`flex-1 min-w-[80px] text-center py-2 rounded-lg text-xs font-semibold ${
                        i < 2
                          ? "bg-brand-orange text-white"
                          : "bg-gray-100 text-gray-400"
                      }`}
                    >
                      {step}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* BLOG */}
      <section id="blog" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <div className="inline-block bg-brand-orange/10 text-brand-orange text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
                Полезно знать
              </div>
              <h2 className="font-montserrat font-black text-3xl md:text-4xl text-brand-dark">
                Блог и новости
              </h2>
            </div>
            <button className="text-brand-orange font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all">
              Все статьи <Icon name="ArrowRight" size={16} />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {BLOG_POSTS.map((post) => (
              <article
                key={post.title}
                className="group cursor-pointer"
              >
                <div className="bg-brand-gray rounded-xl h-44 mb-5 overflow-hidden flex items-center justify-center">
                  <Icon name="FileText" size={48} className="text-gray-300 group-hover:text-brand-orange transition-colors duration-300" />
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="bg-brand-orange/10 text-brand-orange text-xs font-semibold px-3 py-1 rounded-full">
                    {post.tag}
                  </span>
                  <span className="text-gray-400 text-xs">{post.date}</span>
                </div>
                <h3 className="font-montserrat font-bold text-base text-brand-dark mb-2 group-hover:text-brand-orange transition-colors leading-snug">
                  {post.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{post.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="py-20 bg-brand-dark">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <div className="inline-block bg-brand-orange/20 text-brand-orange text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
                Контакты
              </div>
              <h2 className="font-montserrat font-black text-3xl md:text-4xl text-white mb-6">
                Свяжитесь с нами
              </h2>
              <p className="text-gray-400 leading-relaxed mb-8">
                Оставьте заявку, и наш менеджер свяжется с вами в течение 30 минут
                в рабочее время. Мы поможем подобрать оптимальное решение для вашего груза.
              </p>

              <div className="space-y-5">
                {[
                  { icon: "Phone", label: "Телефон", value: "+7 (800) 555-35-35" },
                  { icon: "Mail", label: "Email", value: "info@st-cargo.ru" },
                  { icon: "MapPin", label: "Адрес", value: "Москва, ул. Логистическая, 1" },
                  { icon: "Clock", label: "Режим работы", value: "Пн–Пт: 9:00–18:00" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-brand-orange/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name={item.icon} fallback="Info" size={18} className="text-brand-orange" />
                    </div>
                    <div>
                      <div className="text-gray-500 text-xs">{item.label}</div>
                      <div className="text-white font-medium">{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-brand-dark-light rounded-2xl p-8">
              <h3 className="font-montserrat font-bold text-xl text-white mb-6">
                Оставить заявку
              </h3>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-400 text-sm mb-2">Имя</label>
                    <input
                      type="text"
                      placeholder="Иван Иванов"
                      className="w-full bg-brand-dark border border-white/10 text-white placeholder-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-orange transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-400 text-sm mb-2">Телефон</label>
                    <input
                      type="tel"
                      placeholder="+7 (___) ___-__-__"
                      className="w-full bg-brand-dark border border-white/10 text-white placeholder-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-orange transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-400 text-sm mb-2">Email</label>
                  <input
                    type="email"
                    placeholder="ivan@company.ru"
                    className="w-full bg-brand-dark border border-white/10 text-white placeholder-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-orange transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 text-sm mb-2">Опишите задачу</label>
                  <textarea
                    rows={4}
                    placeholder="Расскажите о вашем грузе: тип, вес, маршрут..."
                    className="w-full bg-brand-dark border border-white/10 text-white placeholder-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-orange transition-colors resize-none"
                  />
                </div>
                <button className="w-full bg-brand-orange text-white py-3.5 rounded-lg font-semibold hover:bg-orange-600 transition-colors">
                  Отправить заявку
                </button>
                <p className="text-gray-600 text-xs text-center">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-white py-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="bg-brand-orange w-8 h-8 flex items-center justify-center rounded">
                <span className="text-white font-montserrat font-black text-xs">ST</span>
              </div>
              <span className="font-montserrat font-bold text-lg">ST-CARGO</span>
            </div>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-gray-500">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className="hover:text-brand-orange transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </div>
            <div className="text-gray-600 text-sm">
              © 2026 ST-CARGO. Все права защищены.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}