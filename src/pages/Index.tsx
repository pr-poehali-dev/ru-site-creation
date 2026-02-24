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
    setTrackingResult(statuses[Math.floor(Math.random() * statuses.length)]);
  };

  return (
    <div className="font-opensans" style={{ color: "#313131" }}>

      {/* TOP BAR */}
      <div className="bg-brand-dark text-white text-sm py-2.5 hidden md:block">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex gap-8">
            <a href="tel:+78005553535" className="flex items-center gap-2 hover:text-brand-accent transition-colors">
              <Icon name="Phone" size={14} />
              +7 (800) 555-35-35
            </a>
            <a href="mailto:info@st-cargo.ru" className="flex items-center gap-2 hover:text-brand-accent transition-colors">
              <Icon name="Mail" size={14} />
              info@st-cargo.ru
            </a>
          </div>
          <div className="flex gap-8 text-gray-400">
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
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-[70px]">

          {/* LOGO */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollTo("home")}>
            <div className="flex items-center gap-1">
              <div className="bg-brand-dark px-2 py-1 rounded-sm">
                <span className="text-white font-montserrat font-black text-base tracking-widest">ST</span>
              </div>
              <div className="bg-brand-accent px-2 py-1 rounded-sm">
                <span className="text-white font-montserrat font-black text-base tracking-widest">CARGO</span>
              </div>
            </div>
          </div>

          {/* NAV */}
          <nav className="hidden lg:flex items-center gap-0">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="px-4 py-2 text-sm font-semibold text-brand-text hover:text-brand-blue transition-colors duration-200 relative group"
                style={{ color: "#313131" }}
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-blue transition-all duration-200 group-hover:w-full" />
              </button>
            ))}
          </nav>

          {/* CTA */}
          <button
            onClick={() => scrollTo("contacts")}
            className="hidden lg:block text-white px-6 py-2.5 rounded-sm text-sm font-bold hover:opacity-90 transition-opacity"
            style={{ backgroundColor: "#003F80", border: "2px solid #003F80" }}
          >
            Получить расчёт
          </button>

          {/* MOBILE TOGGLE */}
          <button className="lg:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
            <Icon name={mobileOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {mobileOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="text-left py-2.5 text-sm font-semibold border-b border-gray-50 hover:text-brand-blue transition-colors"
                style={{ color: "#313131" }}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo("contacts")}
              className="mt-3 text-white px-5 py-2.5 rounded-sm text-sm font-bold"
              style={{ backgroundColor: "#003F80" }}
            >
              Получить расчёт
            </button>
          </div>
        )}
      </header>

      {/* HERO */}
      <section
        id="home"
        className="relative min-h-[88vh] flex items-center overflow-hidden"
        style={{
          backgroundImage: `url(https://cdn.poehali.dev/projects/52680bc8-790c-4e8e-b954-29f1b97cbe10/files/8d49882e-58c0-41d5-9d7b-de5379345c5b.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(26,35,50,0.82)" }} />
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-28">
          <div className="max-w-2xl animate-fade-in">
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-sm text-sm font-bold mb-6 text-white"
              style={{ backgroundColor: "#7CB82F" }}
            >
              <Icon name="Zap" size={14} />
              Международный логистический оператор
            </div>
            <h1 className="font-montserrat text-4xl md:text-6xl font-black text-white leading-tight mb-6">
              Доставим ваш груз<br />
              <span style={{ color: "#7CB82F" }}>в любую точку мира</span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-10 max-w-xl">
              ST-CARGO — надёжный партнёр в сфере грузоперевозок с 15-летним опытом.
              Работаем в 50+ странах, гарантируем сохранность и сроки.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => scrollTo("calculator")}
                className="text-white px-8 py-3.5 rounded-sm font-bold text-base transition-all duration-200 hover:opacity-90"
                style={{ backgroundColor: "#7CB82F" }}
              >
                Рассчитать стоимость
              </button>
              <button
                onClick={() => scrollTo("services")}
                className="px-8 py-3.5 rounded-sm font-bold text-base transition-all duration-200 text-white"
                style={{ border: "2px solid #003F80", backgroundColor: "#003F80" }}
              >
                Наши услуги
              </button>
            </div>
          </div>
        </div>

        {/* STATS */}
        <div className="absolute bottom-0 left-0 right-0" style={{ backgroundColor: "#003F80" }}>
          <div className="max-w-7xl mx-auto px-6 py-5 grid grid-cols-2 md:grid-cols-4 gap-4">
            {STATS.map((s) => (
              <div key={s.label} className="text-center text-white">
                <div className="font-montserrat font-black text-2xl md:text-3xl" style={{ color: "#7CB82F" }}>
                  {s.value}
                </div>
                <div className="text-blue-200 text-sm mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-20 bg-brand-gray">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <div
              className="inline-block text-white text-xs font-bold px-4 py-1.5 rounded-sm mb-4 uppercase tracking-widest"
              style={{ backgroundColor: "#7CB82F" }}
            >
              Что мы делаем
            </div>
            <h2 className="font-montserrat font-black text-3xl md:text-4xl mb-4" style={{ color: "#003F80" }}>
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
                className="bg-white rounded-sm p-7 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group border-b-4 border-transparent hover:border-brand-accent"
              >
                <div
                  className="w-12 h-12 rounded-sm flex items-center justify-center mb-5 transition-colors duration-300"
                  style={{ backgroundColor: "rgba(124,184,47,0.12)" }}
                >
                  <Icon
                    name={s.icon}
                    fallback="Package"
                    size={22}
                    className="transition-colors duration-300"
                    style={{ color: "#7CB82F" }}
                  />
                </div>
                <h3 className="font-montserrat font-bold text-lg mb-3" style={{ color: "#003F80" }}>
                  {s.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
                <div className="mt-4 flex items-center gap-1 text-sm font-semibold" style={{ color: "#003F80" }}>
                  Подробнее <Icon name="ArrowRight" size={14} />
                </div>
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
              <div
                className="inline-block text-white text-xs font-bold px-4 py-1.5 rounded-sm mb-4 uppercase tracking-widest"
                style={{ backgroundColor: "#7CB82F" }}
              >
                О компании
              </div>
              <h2 className="font-montserrat font-black text-3xl md:text-4xl mb-6 leading-tight" style={{ color: "#003F80" }}>
                15 лет надёжной логистики
              </h2>
              <p className="text-gray-500 leading-relaxed mb-5">
                ST-CARGO основана в 2010 году и за это время выросла в одного из ведущих
                логистических операторов региона. Специализируемся на организации сложных
                мультимодальных перевозок и предоставляем полный комплекс логистических
                услуг для бизнеса любого масштаба.
              </p>
              <p className="text-gray-500 leading-relaxed mb-8">
                Наша команда — более 200 профессионалов: логисты, таможенные брокеры,
                водители и менеджеры по работе с клиентами. Каждый груз — персональная
                ответственность каждого сотрудника.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: "Users", text: "200+ специалистов" },
                  { icon: "MapPin", text: "Офисы в 10 городах" },
                  { icon: "Award", text: "ISO 9001:2015" },
                  { icon: "TrendingUp", text: "Рост 30% в год" },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-3 bg-brand-gray rounded-sm p-3">
                    <div
                      className="w-8 h-8 rounded-sm flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: "rgba(124,184,47,0.15)" }}
                    >
                      <Icon name={item.icon} fallback="Info" size={16} style={{ color: "#7CB82F" }} />
                    </div>
                    <span className="text-sm font-semibold" style={{ color: "#003F80" }}>{item.text}</span>
                  </div>
                ))}
              </div>
              <button
                onClick={() => scrollTo("contacts")}
                className="mt-8 text-white px-8 py-3 rounded-sm font-bold text-sm hover:opacity-90 transition-opacity"
                style={{ backgroundColor: "#003F80", border: "2px solid #003F80" }}
              >
                Связаться с нами
              </button>
            </div>
            <div className="relative">
              <img
                src="https://cdn.poehali.dev/projects/52680bc8-790c-4e8e-b954-29f1b97cbe10/files/b8b5174a-deb6-4f37-99b0-0beff481fe08.jpg"
                alt="Склад ST-CARGO"
                className="rounded-sm w-full object-cover h-[440px] shadow-xl"
              />
              <div
                className="absolute -bottom-6 -left-6 text-white rounded-sm p-5 shadow-xl"
                style={{ backgroundColor: "#003F80" }}
              >
                <div className="font-montserrat font-black text-3xl" style={{ color: "#7CB82F" }}>10K+</div>
                <div className="text-gray-400 text-sm">доставленных грузов</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CALCULATOR */}
      <section id="calculator" className="py-20" style={{ backgroundColor: "#003F80" }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <div
              className="inline-block text-white text-xs font-bold px-4 py-1.5 rounded-sm mb-4 uppercase tracking-widest"
              style={{ backgroundColor: "#7CB82F" }}
            >
              Быстрый расчёт
            </div>
            <h2 className="font-montserrat font-black text-3xl md:text-4xl text-white mb-4">
              Калькулятор стоимости доставки
            </h2>
            <p className="text-gray-400 text-lg">
              Введите параметры груза и получите предварительную стоимость
            </p>
          </div>

          <div className="rounded-sm p-8 md:p-10" style={{ backgroundColor: "#162035" }}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {[
                { label: "Вес груза (кг)", placeholder: "Например: 500", value: weight, set: setWeight },
                { label: "Объём груза (м³)", placeholder: "Например: 2.5", value: volume, set: setVolume },
                { label: "Расстояние (км)", placeholder: "Например: 1500", value: distance, set: setDistance },
              ].map((field) => (
                <div key={field.label}>
                  <label className="block text-gray-400 text-sm font-medium mb-2">{field.label}</label>
                  <input
                    type="number"
                    placeholder={field.placeholder}
                    value={field.value}
                    onChange={(e) => field.set(e.target.value)}
                    className="w-full text-white placeholder-gray-600 rounded-sm px-4 py-3 focus:outline-none transition-colors"
                    style={{
                      backgroundColor: "#003F80",
                      border: "1px solid rgba(255,255,255,0.1)",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "#7CB82F")}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
                  />
                </div>
              ))}
            </div>

            <div className="flex flex-col md:flex-row gap-6 items-center">
              <button
                onClick={handleCalc}
                className="text-white px-10 py-3.5 rounded-sm font-bold text-base hover:opacity-90 transition-opacity w-full md:w-auto"
                style={{ backgroundColor: "#7CB82F" }}
              >
                Рассчитать стоимость
              </button>

              {calcResult !== null && (
                <div
                  className="flex-1 rounded-sm px-6 py-3.5 flex items-center justify-between"
                  style={{ backgroundColor: "rgba(124,184,47,0.1)", border: "1px solid rgba(124,184,47,0.3)" }}
                >
                  <div>
                    <div className="text-gray-400 text-sm">Предварительная стоимость</div>
                    <div className="font-montserrat font-black text-2xl" style={{ color: "#7CB82F" }}>
                      {calcResult.toLocaleString("ru-RU")} ₽
                    </div>
                  </div>
                  <div className="text-gray-500 text-xs text-right max-w-[140px]">
                    * Точная стоимость уточняется у менеджера
                  </div>
                </div>
              )}
            </div>

            <div className="mt-6 flex flex-wrap gap-5 text-sm text-gray-500">
              {["Учитывается объёмный вес", "Ставка от расстояния маршрута", "Цены включают НДС"].map((t) => (
                <span key={t} className="flex items-center gap-1.5">
                  <Icon name="CheckCircle" size={14} style={{ color: "#7CB82F" }} />
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TRACKING */}
      <section id="tracking" className="py-20 bg-brand-gray">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <div
              className="inline-block text-white text-xs font-bold px-4 py-1.5 rounded-sm mb-4 uppercase tracking-widest"
              style={{ backgroundColor: "#003F80" }}
            >
              Отслеживание
            </div>
            <h2 className="font-montserrat font-black text-3xl md:text-4xl mb-4" style={{ color: "#003F80" }}>
              Где мой груз?
            </h2>
            <p className="text-gray-500 text-lg">
              Введите номер накладной для получения актуального статуса
            </p>
          </div>

          <div className="bg-white rounded-sm p-8 shadow-sm border border-gray-100">
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                placeholder="Номер накладной (например: ST-2026-00123)"
                value={trackingNumber}
                onChange={(e) => setTrackingNumber(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleTracking()}
                className="flex-1 border border-gray-200 placeholder-gray-400 rounded-sm px-4 py-3 focus:outline-none transition-colors text-brand-text"
                style={{ color: "#313131" }}
                onFocus={(e) => (e.target.style.borderColor = "#003F80")}
                onBlur={(e) => (e.target.style.borderColor = "#e5e7eb")}
              />
              <button
                onClick={handleTracking}
                className="text-white px-8 py-3 rounded-sm font-bold hover:opacity-90 transition-opacity whitespace-nowrap"
                style={{ backgroundColor: "#003F80" }}
              >
                Отследить
              </button>
            </div>

            {trackingResult && (
              <div className="mt-6 rounded-sm p-5" style={{ backgroundColor: "#f0f7e6", border: "1px solid #c3e08a" }}>
                <div className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: "#ddf0b0" }}
                  >
                    <Icon name="MapPin" size={18} style={{ color: "#7CB82F" }} />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Текущий статус груза</div>
                    <div className="font-semibold text-lg" style={{ color: "#003F80" }}>{trackingResult}</div>
                    <div className="text-sm text-gray-400 mt-1">
                      Последнее обновление: {new Date().toLocaleString("ru-RU")}
                    </div>
                  </div>
                </div>
                <div className="mt-4 flex gap-2">
                  {["Принят", "В пути", "На складе", "Доставлен"].map((step, i) => (
                    <div
                      key={step}
                      className="flex-1 text-center py-2 rounded-sm text-xs font-bold"
                      style={
                        i < 2
                          ? { backgroundColor: "#7CB82F", color: "#fff" }
                          : { backgroundColor: "#f0f0f0", color: "#999" }
                      }
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
              <div
                className="inline-block text-white text-xs font-bold px-4 py-1.5 rounded-sm mb-4 uppercase tracking-widest"
                style={{ backgroundColor: "#7CB82F" }}
              >
                Полезно знать
              </div>
              <h2 className="font-montserrat font-black text-3xl md:text-4xl" style={{ color: "#003F80" }}>
                Блог и новости
              </h2>
            </div>
            <button
              className="font-bold text-sm flex items-center gap-1 hover:gap-2 transition-all"
              style={{ color: "#003F80" }}
            >
              Все статьи <Icon name="ArrowRight" size={16} />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {BLOG_POSTS.map((post) => (
              <article key={post.title} className="group cursor-pointer">
                <div
                  className="rounded-sm h-44 mb-5 flex items-center justify-center"
                  style={{ backgroundColor: "#F4F6F9" }}
                >
                  <Icon name="FileText" size={48} style={{ color: "#d1d9e3" }} />
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <span
                    className="text-white text-xs font-bold px-3 py-1 rounded-sm"
                    style={{ backgroundColor: "#003F80" }}
                  >
                    {post.tag}
                  </span>
                  <span className="text-gray-400 text-xs">{post.date}</span>
                </div>
                <h3
                  className="font-montserrat font-bold text-base mb-2 leading-snug transition-colors group-hover:underline"
                  style={{ color: "#003F80" }}
                >
                  {post.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{post.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="py-20" style={{ backgroundColor: "#003F80" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <div
                className="inline-block text-white text-xs font-bold px-4 py-1.5 rounded-sm mb-4 uppercase tracking-widest"
                style={{ backgroundColor: "#7CB82F" }}
              >
                Контакты
              </div>
              <h2 className="font-montserrat font-black text-3xl md:text-4xl text-white mb-6">
                Свяжитесь с нами
              </h2>
              <p className="text-gray-400 leading-relaxed mb-8">
                Оставьте заявку, и наш менеджер свяжется с вами в течение 30 минут
                в рабочее время. Поможем подобрать оптимальное решение для вашего груза.
              </p>

              <div className="space-y-5">
                {[
                  { icon: "Phone", label: "Телефон", value: "+7 (800) 555-35-35" },
                  { icon: "Mail", label: "Email", value: "info@st-cargo.ru" },
                  { icon: "MapPin", label: "Адрес", value: "Москва, ул. Логистическая, 1" },
                  { icon: "Clock", label: "Режим работы", value: "Пн–Пт: 9:00–18:00" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-4">
                    <div
                      className="w-10 h-10 rounded-sm flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: "rgba(124,184,47,0.15)" }}
                    >
                      <Icon name={item.icon} fallback="Info" size={18} style={{ color: "#7CB82F" }} />
                    </div>
                    <div>
                      <div className="text-gray-500 text-xs">{item.label}</div>
                      <div className="text-white font-medium">{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-sm p-8" style={{ backgroundColor: "#162035" }}>
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
                      className="w-full text-white placeholder-gray-600 rounded-sm px-4 py-3 focus:outline-none transition-colors"
                      style={{ backgroundColor: "#003F80", border: "1px solid rgba(255,255,255,0.1)" }}
                    />
                  </div>
                  <div>
                    <label className="block text-gray-400 text-sm mb-2">Телефон</label>
                    <input
                      type="tel"
                      placeholder="+7 (___) ___-__-__"
                      className="w-full text-white placeholder-gray-600 rounded-sm px-4 py-3 focus:outline-none transition-colors"
                      style={{ backgroundColor: "#003F80", border: "1px solid rgba(255,255,255,0.1)" }}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-400 text-sm mb-2">Email</label>
                  <input
                    type="email"
                    placeholder="ivan@company.ru"
                    className="w-full text-white placeholder-gray-600 rounded-sm px-4 py-3 focus:outline-none transition-colors"
                    style={{ backgroundColor: "#003F80", border: "1px solid rgba(255,255,255,0.1)" }}
                  />
                </div>
                <div>
                  <label className="block text-gray-400 text-sm mb-2">Опишите задачу</label>
                  <textarea
                    rows={4}
                    placeholder="Расскажите о вашем грузе: тип, вес, маршрут..."
                    className="w-full text-white placeholder-gray-600 rounded-sm px-4 py-3 focus:outline-none transition-colors resize-none"
                    style={{ backgroundColor: "#003F80", border: "1px solid rgba(255,255,255,0.1)" }}
                  />
                </div>
                <button
                  className="w-full text-white py-3.5 rounded-sm font-bold hover:opacity-90 transition-opacity"
                  style={{ backgroundColor: "#7CB82F" }}
                >
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
      <footer className="py-8" style={{ backgroundColor: "#0d1520" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-1">
              <div className="px-2 py-1 rounded-sm" style={{ backgroundColor: "#003F80" }}>
                <span className="text-white font-montserrat font-black text-sm tracking-widest">ST</span>
              </div>
              <div className="px-2 py-1 rounded-sm" style={{ backgroundColor: "#7CB82F" }}>
                <span className="text-white font-montserrat font-black text-sm tracking-widest">CARGO</span>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-gray-500">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className="hover:text-white transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </div>
            <div className="text-gray-600 text-sm">© 2026 ST-CARGO</div>
          </div>
        </div>
      </footer>
    </div>
  );
}