import { useState } from "react";
import Icon from "@/components/ui/icon";

const NAV_LINKS = [
  { id: "home", label: "Главная" },
  { id: "services", label: "Услуги" },
  { id: "about", label: "О компании" },
  { id: "geography", label: "География" },
  { id: "fleet", label: "Автопарк" },
  { id: "calculator", label: "Калькулятор" },
  { id: "contacts", label: "Контакты" },
];

const SERVICES = [
  {
    icon: "Truck",
    title: "Автоперевозки",
    desc: "FTL и LTL перевозки по России и СНГ. Температурный режим, негабарит, сборный груз.",
    img: "https://cdn.poehali.dev/projects/52680bc8-790c-4e8e-b954-29f1b97cbe10/files/be137d81-73bd-408f-afa5-01ea67453f91.jpg",
  },
  {
    icon: "TrainFront",
    title: "Ж/Д перевозки",
    desc: "Контейнерные и вагонные перевозки. Повагонная отправка и маршрутные поезда по всей сети РЖД.",
    img: "https://cdn.poehali.dev/projects/52680bc8-790c-4e8e-b954-29f1b97cbe10/files/f9ee4a48-f66b-4be4-80be-fdc4ed626dc7.jpg",
  },
  {
    icon: "Ship",
    title: "Морские перевозки",
    desc: "Контейнерные перевозки FCL/LCL через все основные порты мира. Линейные и чартерные сервисы.",
    img: "https://cdn.poehali.dev/projects/52680bc8-790c-4e8e-b954-29f1b97cbe10/files/8fca182e-5fd0-4370-a76b-f1585cf6eb6b.jpg",
  },
  {
    icon: "Plane",
    title: "Авиаперевозки",
    desc: "Срочная доставка авиатранспортом. Чартерные и регулярные рейсы, опасные грузы, негабарит.",
    img: "https://cdn.poehali.dev/projects/52680bc8-790c-4e8e-b954-29f1b97cbe10/files/8d49882e-58c0-41d5-9d7b-de5379345c5b.jpg",
  },
  {
    icon: "Warehouse",
    title: "Складская логистика",
    desc: "Ответственное хранение, кросс-докинг, комплектация заказов на складах классов A и B+.",
    img: "https://cdn.poehali.dev/projects/52680bc8-790c-4e8e-b954-29f1b97cbe10/files/57469db9-1642-44e0-bac3-976e94c43507.jpg",
  },
  {
    icon: "FileCheck",
    title: "Таможенное оформление",
    desc: "Полный цикл таможенного оформления: декларирование, сертификация, консультации по ВЭД.",
    img: "",
  },
];

const STATS = [
  { value: "4 000+", label: "перевозок в год" },
  { value: "445 000", label: "тонн грузов за 2025 год" },
  { value: "16", label: "лет на рынке" },
  { value: "200+", label: "единиц транспорта" },
];

const FLEET = [
  { type: "Тент 20т", count: "82", icon: "Truck" },
  { type: "Рефрижератор", count: "34", icon: "Thermometer" },
  { type: "Контейнеровоз", count: "28", icon: "Container" },
  { type: "Негабарит", count: "18", icon: "Maximize" },
  { type: "Малотоннажные", count: "40+", icon: "CarFront" },
];

const ADVANTAGES = [
  { icon: "Clock", title: "Точно в срок", desc: "98.7% доставок без опозданий" },
  { icon: "ShieldCheck", title: "Страхование", desc: "Полное страхование каждого груза" },
  { icon: "HeadphonesIcon", title: "Поддержка 24/7", desc: "Персональный менеджер на связи" },
  { icon: "BarChart3", title: "Отслеживание", desc: "GPS-мониторинг в реальном времени" },
  { icon: "Banknote", title: "Гибкие тарифы", desc: "Индивидуальные условия для каждого клиента" },
  { icon: "FileText", title: "Документооборот", desc: "Полный комплект документов в срок" },
];

const GEOGRAPHY = [
  "Москва", "Санкт-Петербург", "Новосибирск", "Екатеринбург", "Казань",
  "Краснодар", "Владивосток", "Ростов-на-Дону", "Нижний Новгород", "Самара",
  "Челябинск", "Уфа", "Красноярск", "Пермь", "Воронеж", "Волгоград",
];

export default function Index() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [weight, setWeight] = useState("");
  const [distance, setDistance] = useState("");
  const [cargoType, setCargoType] = useState("standard");
  const [calcResult, setCalcResult] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState(0);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  const handleCalc = () => {
    const w = parseFloat(weight) || 0;
    const d = parseFloat(distance) || 0;
    if (!w || !d) return;
    const multiplier = cargoType === "refrigerator" ? 22 : cargoType === "oversized" ? 28 : 16;
    setCalcResult(Math.round(w * multiplier + d * 0.6 + 3500));
  };

  return (
    <div className="font-opensans" style={{ color: "#2C2C2C" }}>

      {/* TOP BAR */}
      <div className="hidden md:block text-white text-sm py-2" style={{ backgroundColor: "#0B1F3F" }}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex gap-8">
            <a href="tel:+78001234567" className="flex items-center gap-2 hover:text-white/80 transition-colors">
              <Icon name="Phone" size={13} />
              8 (800) 123-45-67
            </a>
            <a href="mailto:info@unionfreight.ru" className="flex items-center gap-2 hover:text-white/80 transition-colors">
              <Icon name="Mail" size={13} />
              info@unionfreight.ru
            </a>
          </div>
          <div className="flex gap-8 text-blue-300">
            <span className="flex items-center gap-2">
              <Icon name="Clock" size={13} />
              Пн–Пт: 8:00–20:00, Сб: 9:00–16:00
            </span>
          </div>
        </div>
      </div>

      {/* HEADER */}
      <header className="bg-white sticky top-0 z-50 shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollTo("home")}>
            <div className="flex items-center">
              <span className="font-montserrat font-black text-xl tracking-tight" style={{ color: "#0B1F3F" }}>
                UNION
              </span>
              <span className="font-montserrat font-black text-xl tracking-tight ml-1" style={{ color: "#E63F20" }}>
                FREIGHT
              </span>
            </div>
            <span className="text-xs text-gray-400 hidden sm:block">SERVICE</span>
          </div>

          <nav className="hidden lg:flex items-center gap-0">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="px-3.5 py-2 text-[13px] font-semibold transition-colors duration-200 relative group"
                style={{ color: "#2C2C2C" }}
              >
                {link.label}
                <span
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 transition-all duration-200 group-hover:w-3/4"
                  style={{ backgroundColor: "#E63F20" }}
                />
              </button>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:+78001234567" className="font-bold text-sm" style={{ color: "#0B1F3F" }}>
              8 (800) 123-45-67
            </a>
            <button
              onClick={() => scrollTo("contacts")}
              className="text-white px-5 py-2 text-sm font-bold transition-all duration-200 hover:brightness-110"
              style={{ backgroundColor: "#E63F20", borderRadius: "3px" }}
            >
              Заказать перевозку
            </button>
          </div>

          <button className="lg:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
            <Icon name={mobileOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {mobileOpen && (
          <div className="lg:hidden bg-white border-t px-6 py-3 flex flex-col gap-0.5">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="text-left py-2.5 text-sm font-semibold border-b border-gray-50"
                style={{ color: "#2C2C2C" }}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo("contacts")}
              className="mt-3 text-white px-5 py-2.5 text-sm font-bold"
              style={{ backgroundColor: "#E63F20", borderRadius: "3px" }}
            >
              Заказать перевозку
            </button>
          </div>
        )}
      </header>

      {/* HERO */}
      <section
        id="home"
        className="relative min-h-[85vh] flex items-center overflow-hidden"
        style={{
          backgroundImage: `url(https://cdn.poehali.dev/projects/52680bc8-790c-4e8e-b954-29f1b97cbe10/files/f56e7c65-b344-4e41-ac18-acdf31237275.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(11,31,63,0.92) 0%, rgba(26,58,107,0.8) 100%)" }} />
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 w-full">
          <div className="max-w-2xl">
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 text-xs font-bold text-white uppercase tracking-widest mb-6"
              style={{ backgroundColor: "#E63F20", borderRadius: "3px" }}
            >
              <Icon name="Zap" size={13} />
              Мультимодальная логистика
            </div>
            <h1 className="font-montserrat text-4xl md:text-[56px] font-black text-white leading-[1.1] mb-6">
              Перевозки грузов<br />
              <span style={{ color: "#E63F20" }}>по всей России</span><br />
              и миру
            </h1>
            <p className="text-blue-200 text-lg leading-relaxed mb-10 max-w-lg">
              Union Freight Service — 16 лет надёжной логистики. Авто, ж/д, морские
              и авиаперевозки с полным сопровождением и страхованием.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => scrollTo("calculator")}
                className="text-white px-8 py-3.5 font-bold text-[15px] transition-all duration-200 hover:brightness-110"
                style={{ backgroundColor: "#E63F20", borderRadius: "3px" }}
              >
                Рассчитать стоимость
              </button>
              <button
                onClick={() => scrollTo("services")}
                className="px-8 py-3.5 font-bold text-[15px] transition-all duration-200 text-white hover:bg-white/10"
                style={{ border: "2px solid rgba(255,255,255,0.4)", borderRadius: "3px" }}
              >
                Все услуги
              </button>
            </div>
          </div>
        </div>

        {/* STATS BAR */}
        <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-6 py-5 grid grid-cols-2 md:grid-cols-4 gap-6">
            {STATS.map((s) => (
              <div key={s.label} className="text-center">
                <div className="font-montserrat font-black text-2xl md:text-3xl" style={{ color: "#0B1F3F" }}>
                  {s.value}
                </div>
                <div className="text-gray-500 text-sm mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <div
              className="inline-block text-xs font-bold px-4 py-1.5 uppercase tracking-widest mb-4 text-white"
              style={{ backgroundColor: "#E63F20", borderRadius: "3px" }}
            >
              Услуги
            </div>
            <h2 className="font-montserrat font-black text-3xl md:text-4xl mb-3" style={{ color: "#0B1F3F" }}>
              Полный спектр логистических решений
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Организуем доставку любых грузов любым видом транспорта
            </p>
          </div>

          {/* TABS */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {SERVICES.map((s, i) => (
              <button
                key={s.title}
                onClick={() => setActiveTab(i)}
                className="flex items-center gap-2 px-5 py-2.5 text-sm font-semibold transition-all duration-200"
                style={
                  activeTab === i
                    ? { backgroundColor: "#0B1F3F", color: "#fff", borderRadius: "3px" }
                    : { backgroundColor: "#F2F4F7", color: "#2C2C2C", borderRadius: "3px" }
                }
              >
                <Icon name={s.icon} fallback="Package" size={16} />
                {s.title}
              </button>
            ))}
          </div>

          {/* ACTIVE SERVICE */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              {SERVICES[activeTab].img ? (
                <img
                  src={SERVICES[activeTab].img}
                  alt={SERVICES[activeTab].title}
                  className="w-full h-[360px] object-cover shadow-lg"
                  style={{ borderRadius: "4px" }}
                />
              ) : (
                <div
                  className="w-full h-[360px] flex items-center justify-center"
                  style={{ backgroundColor: "#F2F4F7", borderRadius: "4px" }}
                >
                  <Icon name={SERVICES[activeTab].icon} fallback="Package" size={80} style={{ color: "#d1d5db" }} />
                </div>
              )}
            </div>
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-12 h-12 flex items-center justify-center"
                  style={{ backgroundColor: "rgba(230,63,32,0.1)", borderRadius: "3px" }}
                >
                  <Icon name={SERVICES[activeTab].icon} fallback="Package" size={22} style={{ color: "#E63F20" }} />
                </div>
                <h3 className="font-montserrat font-black text-2xl" style={{ color: "#0B1F3F" }}>
                  {SERVICES[activeTab].title}
                </h3>
              </div>
              <p className="text-gray-600 text-base leading-relaxed mb-6">{SERVICES[activeTab].desc}</p>
              <ul className="space-y-3 mb-8">
                {[
                  "Собственный и привлечённый транспорт",
                  "GPS-отслеживание в режиме реального времени",
                  "Полное страхование груза",
                  "Персональный менеджер на маршруте",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm">
                    <Icon name="CheckCircle" size={16} style={{ color: "#2B5EA7" }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => scrollTo("contacts")}
                className="text-white px-7 py-3 font-bold text-sm transition-all hover:brightness-110"
                style={{ backgroundColor: "#E63F20", borderRadius: "3px" }}
              >
                Заказать услугу
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ADVANTAGES */}
      <section className="py-16" style={{ backgroundColor: "#F2F4F7" }}>
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-montserrat font-black text-3xl md:text-4xl text-center mb-12" style={{ color: "#0B1F3F" }}>
            Почему выбирают нас
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {ADVANTAGES.map((a) => (
              <div
                key={a.title}
                className="bg-white p-6 flex items-start gap-4 shadow-sm hover:shadow-md transition-shadow"
                style={{ borderRadius: "4px", borderLeft: "4px solid #E63F20" }}
              >
                <div
                  className="w-11 h-11 flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "rgba(11,31,63,0.07)", borderRadius: "3px" }}
                >
                  <Icon name={a.icon} fallback="Star" size={20} style={{ color: "#0B1F3F" }} />
                </div>
                <div>
                  <h4 className="font-montserrat font-bold text-[15px] mb-1" style={{ color: "#0B1F3F" }}>
                    {a.title}
                  </h4>
                  <p className="text-gray-500 text-sm">{a.desc}</p>
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
                className="inline-block text-xs font-bold px-4 py-1.5 uppercase tracking-widest mb-4 text-white"
                style={{ backgroundColor: "#E63F20", borderRadius: "3px" }}
              >
                О компании
              </div>
              <h2 className="font-montserrat font-black text-3xl md:text-4xl mb-6 leading-tight" style={{ color: "#0B1F3F" }}>
                Union Freight Service — <br />надёжность с 2010 года
              </h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                Компания Union Freight Service основана в 2010 году и за 16 лет работы
                стала одним из ведущих мультимодальных логистических операторов России.
                Мы специализируемся на организации перевозок любой сложности — от
                локальных автодоставок до международных мультимодальных маршрутов.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Наш коллектив — более 300 профессионалов логистики, экспедирования и
                таможенного оформления. Собственный автопарк из 200+ единиц, партнёрская
                сеть в 50+ странах, IT-платформа для отслеживания грузов в реальном времени.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: "Users", text: "300+ сотрудников" },
                  { icon: "Globe", text: "50+ стран" },
                  { icon: "Award", text: "ISO 9001:2015" },
                  { icon: "TrendingUp", text: "Рост 35% в год" },
                ].map((item) => (
                  <div
                    key={item.text}
                    className="flex items-center gap-3 p-3"
                    style={{ backgroundColor: "#F2F4F7", borderRadius: "3px" }}
                  >
                    <div
                      className="w-8 h-8 flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: "rgba(230,63,32,0.1)", borderRadius: "3px" }}
                    >
                      <Icon name={item.icon} fallback="Info" size={15} style={{ color: "#E63F20" }} />
                    </div>
                    <span className="text-sm font-semibold" style={{ color: "#0B1F3F" }}>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="https://cdn.poehali.dev/projects/52680bc8-790c-4e8e-b954-29f1b97cbe10/files/b8b5174a-deb6-4f37-99b0-0beff481fe08.jpg"
                alt="Union Freight Service"
                className="w-full object-cover h-[440px] shadow-xl"
                style={{ borderRadius: "4px" }}
              />
              <div
                className="absolute -bottom-6 -left-6 text-white p-5 shadow-xl"
                style={{ backgroundColor: "#0B1F3F", borderRadius: "4px" }}
              >
                <div className="font-montserrat font-black text-3xl" style={{ color: "#E63F20" }}>445K</div>
                <div className="text-blue-300 text-sm">тонн за 2025 год</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GEOGRAPHY */}
      <section id="geography" className="py-20" style={{ backgroundColor: "#0B1F3F" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div
              className="inline-block text-xs font-bold px-4 py-1.5 uppercase tracking-widest mb-4 text-white"
              style={{ backgroundColor: "#E63F20", borderRadius: "3px" }}
            >
              География
            </div>
            <h2 className="font-montserrat font-black text-3xl md:text-4xl text-white mb-3">
              Работаем по всей России и за рубежом
            </h2>
            <p className="text-blue-300 text-lg max-w-xl mx-auto">
              Собственные филиалы и партнёрская сеть в ключевых точках маршрутов
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
            {GEOGRAPHY.map((city) => (
              <div
                key={city}
                className="text-center py-3 text-sm font-medium text-white transition-colors hover:text-white"
                style={{ backgroundColor: "rgba(255,255,255,0.08)", borderRadius: "3px" }}
              >
                {city}
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <p className="text-blue-400 text-sm">
              и ещё более <span className="font-bold text-white">120 городов</span> — полный список уточняйте у менеджера
            </p>
          </div>
        </div>
      </section>

      {/* FLEET */}
      <section id="fleet" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <div
              className="inline-block text-xs font-bold px-4 py-1.5 uppercase tracking-widest mb-4 text-white"
              style={{ backgroundColor: "#E63F20", borderRadius: "3px" }}
            >
              Автопарк
            </div>
            <h2 className="font-montserrat font-black text-3xl md:text-4xl mb-3" style={{ color: "#0B1F3F" }}>
              200+ единиц собственного транспорта
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
            {FLEET.map((f) => (
              <div
                key={f.type}
                className="text-center p-6 transition-shadow hover:shadow-lg"
                style={{ backgroundColor: "#F2F4F7", borderRadius: "4px" }}
              >
                <div
                  className="w-14 h-14 mx-auto flex items-center justify-center mb-4"
                  style={{ backgroundColor: "rgba(11,31,63,0.08)", borderRadius: "50%" }}
                >
                  <Icon name={f.icon} fallback="Truck" size={24} style={{ color: "#0B1F3F" }} />
                </div>
                <div className="font-montserrat font-black text-2xl mb-1" style={{ color: "#E63F20" }}>
                  {f.count}
                </div>
                <div className="text-gray-600 text-sm font-medium">{f.type}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CALCULATOR */}
      <section id="calculator" className="py-20" style={{ backgroundColor: "#0B1F3F" }}>
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <div
              className="inline-block text-xs font-bold px-4 py-1.5 uppercase tracking-widest mb-4 text-white"
              style={{ backgroundColor: "#E63F20", borderRadius: "3px" }}
            >
              Калькулятор
            </div>
            <h2 className="font-montserrat font-black text-3xl md:text-4xl text-white mb-3">
              Рассчитайте стоимость перевозки
            </h2>
            <p className="text-blue-300 text-lg">Предварительный расчёт за 10 секунд</p>
          </div>

          <div className="p-8 md:p-10" style={{ backgroundColor: "rgba(255,255,255,0.05)", borderRadius: "4px", border: "1px solid rgba(255,255,255,0.08)" }}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div>
                <label className="block text-blue-300 text-sm font-medium mb-2">Вес груза (кг)</label>
                <input
                  type="number"
                  placeholder="500"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  className="w-full text-white placeholder-gray-500 px-4 py-3 focus:outline-none transition-colors"
                  style={{ backgroundColor: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: "3px" }}
                  onFocus={(e) => (e.target.style.borderColor = "#E63F20")}
                  onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.12)")}
                />
              </div>
              <div>
                <label className="block text-blue-300 text-sm font-medium mb-2">Расстояние (км)</label>
                <input
                  type="number"
                  placeholder="1500"
                  value={distance}
                  onChange={(e) => setDistance(e.target.value)}
                  className="w-full text-white placeholder-gray-500 px-4 py-3 focus:outline-none transition-colors"
                  style={{ backgroundColor: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: "3px" }}
                  onFocus={(e) => (e.target.style.borderColor = "#E63F20")}
                  onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.12)")}
                />
              </div>
              <div>
                <label className="block text-blue-300 text-sm font-medium mb-2">Тип перевозки</label>
                <select
                  value={cargoType}
                  onChange={(e) => setCargoType(e.target.value)}
                  className="w-full text-white px-4 py-3 focus:outline-none transition-colors appearance-none cursor-pointer"
                  style={{ backgroundColor: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: "3px" }}
                >
                  <option value="standard" style={{ backgroundColor: "#0B1F3F" }}>Стандартная (тент)</option>
                  <option value="refrigerator" style={{ backgroundColor: "#0B1F3F" }}>Рефрижератор</option>
                  <option value="oversized" style={{ backgroundColor: "#0B1F3F" }}>Негабарит</option>
                </select>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 items-center">
              <button
                onClick={handleCalc}
                className="text-white px-10 py-3.5 font-bold text-base hover:brightness-110 transition-all w-full md:w-auto"
                style={{ backgroundColor: "#E63F20", borderRadius: "3px" }}
              >
                Рассчитать
              </button>

              {calcResult !== null && (
                <div
                  className="flex-1 px-6 py-4 flex items-center justify-between"
                  style={{ backgroundColor: "rgba(230,63,32,0.1)", border: "1px solid rgba(230,63,32,0.3)", borderRadius: "3px" }}
                >
                  <div>
                    <div className="text-blue-300 text-sm">Ориентировочная стоимость</div>
                    <div className="font-montserrat font-black text-2xl text-white">
                      от {calcResult.toLocaleString("ru-RU")} ₽
                    </div>
                  </div>
                  <div className="text-blue-400 text-xs text-right max-w-[140px]">
                    * Точный расчёт после уточнения деталей
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14" style={{ backgroundColor: "#E63F20" }}>
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-montserrat font-black text-2xl md:text-3xl text-white mb-2">
              Нужна перевозка? Звоните!
            </h3>
            <p className="text-white/80">Бесплатная консультация и расчёт за 15 минут</p>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="tel:+78001234567"
              className="font-montserrat font-black text-2xl text-white hover:text-white/90 transition-colors flex items-center gap-2"
            >
              <Icon name="Phone" size={22} />
              8 (800) 123-45-67
            </a>
          </div>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <div
                className="inline-block text-xs font-bold px-4 py-1.5 uppercase tracking-widest mb-4 text-white"
                style={{ backgroundColor: "#E63F20", borderRadius: "3px" }}
              >
                Контакты
              </div>
              <h2 className="font-montserrat font-black text-3xl md:text-4xl mb-6" style={{ color: "#0B1F3F" }}>
                Свяжитесь с нами
              </h2>
              <p className="text-gray-500 leading-relaxed mb-8">
                Оставьте заявку — менеджер свяжется в течение 15 минут в рабочее время.
                Подготовим индивидуальное предложение под ваш груз и маршрут.
              </p>

              <div className="space-y-5">
                {[
                  { icon: "Phone", label: "Телефон", value: "8 (800) 123-45-67" },
                  { icon: "Mail", label: "Email", value: "info@unionfreight.ru" },
                  { icon: "MapPin", label: "Головной офис", value: "Москва, ул. Транспортная, 12, оф. 401" },
                  { icon: "Clock", label: "Режим работы", value: "Пн–Пт: 8:00–20:00, Сб: 9:00–16:00" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-4">
                    <div
                      className="w-10 h-10 flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: "rgba(230,63,32,0.1)", borderRadius: "3px" }}
                    >
                      <Icon name={item.icon} fallback="Info" size={18} style={{ color: "#E63F20" }} />
                    </div>
                    <div>
                      <div className="text-gray-400 text-xs">{item.label}</div>
                      <div className="font-medium" style={{ color: "#0B1F3F" }}>{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-8" style={{ backgroundColor: "#F2F4F7", borderRadius: "4px" }}>
              <h3 className="font-montserrat font-bold text-xl mb-6" style={{ color: "#0B1F3F" }}>
                Заказать перевозку
              </h3>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-500 text-sm mb-2">Имя *</label>
                    <input
                      type="text"
                      placeholder="Ваше имя"
                      className="w-full placeholder-gray-400 px-4 py-3 focus:outline-none transition-colors bg-white"
                      style={{ border: "1px solid #e5e7eb", borderRadius: "3px", color: "#2C2C2C" }}
                      onFocus={(e) => (e.target.style.borderColor = "#E63F20")}
                      onBlur={(e) => (e.target.style.borderColor = "#e5e7eb")}
                    />
                  </div>
                  <div>
                    <label className="block text-gray-500 text-sm mb-2">Телефон *</label>
                    <input
                      type="tel"
                      placeholder="+7 (___) ___-__-__"
                      className="w-full placeholder-gray-400 px-4 py-3 focus:outline-none transition-colors bg-white"
                      style={{ border: "1px solid #e5e7eb", borderRadius: "3px", color: "#2C2C2C" }}
                      onFocus={(e) => (e.target.style.borderColor = "#E63F20")}
                      onBlur={(e) => (e.target.style.borderColor = "#e5e7eb")}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-500 text-sm mb-2">Email</label>
                  <input
                    type="email"
                    placeholder="email@company.ru"
                    className="w-full placeholder-gray-400 px-4 py-3 focus:outline-none transition-colors bg-white"
                    style={{ border: "1px solid #e5e7eb", borderRadius: "3px", color: "#2C2C2C" }}
                    onFocus={(e) => (e.target.style.borderColor = "#E63F20")}
                    onBlur={(e) => (e.target.style.borderColor = "#e5e7eb")}
                  />
                </div>
                <div>
                  <label className="block text-gray-500 text-sm mb-2">Маршрут и описание груза</label>
                  <textarea
                    rows={4}
                    placeholder="Откуда → Куда, тип груза, вес, объём..."
                    className="w-full placeholder-gray-400 px-4 py-3 focus:outline-none transition-colors resize-none bg-white"
                    style={{ border: "1px solid #e5e7eb", borderRadius: "3px", color: "#2C2C2C" }}
                    onFocus={(e) => (e.target.style.borderColor = "#E63F20")}
                    onBlur={(e) => (e.target.style.borderColor = "#e5e7eb")}
                  />
                </div>
                <button
                  className="w-full text-white py-3.5 font-bold hover:brightness-110 transition-all"
                  style={{ backgroundColor: "#E63F20", borderRadius: "3px" }}
                >
                  Отправить заявку
                </button>
                <p className="text-gray-400 text-xs text-center">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8" style={{ backgroundColor: "#0B1F3F" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="font-montserrat font-black text-base text-white tracking-tight">UNION</span>
              <span className="font-montserrat font-black text-base tracking-tight" style={{ color: "#E63F20" }}>FREIGHT</span>
              <span className="text-xs text-blue-400">SERVICE</span>
            </div>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-blue-300">
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
            <div className="text-blue-400 text-sm">© 2026 Union Freight Service</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
