import { useState } from "react";
import Icon from "@/components/ui/icon";

const NAV_LINKS = [
  { label: "Услуги", href: "#services" },
  { label: "Как работает", href: "#how" },
  { label: "Тарифы", href: "#pricing" },
  { label: "Калькулятор", href: "#calculator" },
  { label: "Контакты", href: "#contacts" },
];

const SERVICES = [
  {
    icon: "Warehouse",
    title: "Ответственное хранение",
    desc: "Современные склады класса А с системой адресного хранения, видеонаблюдением и климат-контролем.",
    detail: "от 8 ₽/день за позицию",
  },
  {
    icon: "Package",
    title: "Сборка и упаковка",
    desc: "Комплектация заказов любой сложности, брендированная упаковка, вложения и промо-материалы.",
    detail: "от 35 ₽ за заказ",
  },
  {
    icon: "Truck",
    title: "Доставка по России",
    desc: "Интеграция с СДЭК, Boxberry, Почта России и ПВЗ. Автовыгрузка трек-номеров в вашу CRM.",
    detail: "Лучшие тарифы партнёров",
  },
  {
    icon: "RotateCcw",
    title: "Обработка возвратов",
    desc: "Приём, проверка качества и переупаковка возвратов. Отчётность в режиме реального времени.",
    detail: "от 120 ₽ за возврат",
  },
  {
    icon: "BarChart2",
    title: "Аналитика и отчёты",
    desc: "Личный кабинет с детализацией по остаткам, оборачиваемости, статусам заказов и расходам.",
    detail: "24/7 онлайн-доступ",
  },
  {
    icon: "Plug",
    title: "Интеграции",
    desc: "Готовые коннекторы к Wildberries, Ozon, 1С, AmoCRM, Bitrix24 и API для любой системы.",
    detail: "Настройка за 1 день",
  },
];

const STATS = [
  { value: "2 400+", label: "клиентов доверяют нам" },
  { value: "18 000 м²", label: "складских площадей" },
  { value: "99.7%", label: "точность сборки" },
  { value: "8 лет", label: "на рынке логистики" },
];

const HOW_STEPS = [
  {
    num: "01",
    title: "Заключаем договор",
    desc: "Согласовываем условия, подписываем договор хранения и оказания услуг фулфилмента.",
  },
  {
    num: "02",
    title: "Принимаем товар",
    desc: "Вы отправляете поставку на наш склад. Проводим приёмку, пересчёт и размещение в ячейках.",
  },
  {
    num: "03",
    title: "Подключаем системы",
    desc: "Настраиваем интеграцию с вашим интернет-магазином или маркетплейсом. Заказы поступают автоматически.",
  },
  {
    num: "04",
    title: "Собираем и отправляем",
    desc: "Каждый заказ комплектуется, упаковывается и передаётся в службу доставки. Вы видите всё онлайн.",
  },
];

const TARIFFS = [
  {
    name: "Старт",
    subtitle: "До 500 заказов/мес",
    price: "9 900",
    period: "₽/месяц",
    features: [
      "Хранение до 50 SKU",
      "Сборка включена",
      "2 службы доставки",
      "Базовая аналитика",
      "Email поддержка",
    ],
    highlight: false,
    cta: "Выбрать тариф",
  },
  {
    name: "Бизнес",
    subtitle: "До 3 000 заказов/мес",
    price: "29 900",
    period: "₽/месяц",
    features: [
      "Хранение до 300 SKU",
      "Брендированная упаковка",
      "Все службы доставки",
      "Расширенная аналитика",
      "Персональный менеджер",
      "Обработка возвратов",
    ],
    highlight: true,
    cta: "Выбрать тариф",
  },
  {
    name: "Корпоратив",
    subtitle: "Без ограничений",
    price: "По запросу",
    period: "",
    features: [
      "Неограниченное хранение",
      "Выделенная зона на складе",
      "Приоритетная обработка",
      "Кастомная интеграция",
      "SLA 99.9%",
      "Выделенная команда",
    ],
    highlight: false,
    cta: "Связаться с нами",
  },
];

const CALC_ITEMS = [
  { id: "storage", label: "Хранение (SKU)", unit: "SKU", price: 8, hint: "Количество уникальных артикулов", min: 10, max: 500, step: 10 },
  { id: "orders", label: "Заказы в месяц", unit: "шт", price: 35, hint: "Среднемесячное количество заказов", min: 50, max: 10000, step: 50 },
  { id: "returns", label: "Возвраты в месяц", unit: "шт", price: 120, hint: "Ожидаемое количество возвратов", min: 0, max: 300, step: 5 },
];

export default function Index() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [calcValues, setCalcValues] = useState({ storage: 50, orders: 300, returns: 15 });
  const [orderForm, setOrderForm] = useState({ name: "", company: "", phone: "", email: "", comment: "" });
  const [formSent, setFormSent] = useState(false);

  const totalCost =
    calcValues.storage * 8 * 30 +
    calcValues.orders * 35 +
    calcValues.returns * 120;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSent(true);
  };

  return (
    <div className="min-h-screen bg-background font-body">
      {/* NAVBAR */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-border shadow-sm">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2.5">
            <div className="w-8 h-8 bg-[hsl(var(--navy))] rounded flex items-center justify-center">
              <Icon name="Box" size={16} className="text-white" />
            </div>
            <span className="font-display font-extrabold text-xl text-[hsl(var(--navy))] tracking-tight">
              Logi<span className="text-[hsl(var(--gold))]">Pro</span>
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-muted-foreground hover:text-[hsl(var(--navy))] transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a href="tel:+78001234567" className="text-sm font-semibold text-[hsl(var(--navy))]">
              8 800 123-45-67
            </a>
            <a
              href="#contacts"
              className="btn-gold px-5 py-2 text-sm font-display font-bold rounded"
            >
              Получить расчёт
            </a>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Icon name={mobileMenuOpen ? "X" : "Menu"} size={22} className="text-[hsl(var(--navy))]" />
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-border px-6 py-4 flex flex-col gap-4">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-semibold text-[hsl(var(--navy))]"
                onClick={() => setMobileMenuOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contacts"
              className="btn-gold px-5 py-2.5 text-sm font-display font-bold rounded text-center"
            >
              Получить расчёт
            </a>
          </div>
        )}
      </header>

      {/* HERO */}
      <section className="relative pt-16 overflow-hidden">
        <div
          className="diagonal-bg min-h-[92vh] flex items-center"
          style={{
            background: `
              radial-gradient(ellipse at 70% 40%, hsl(218 65% 25% / 0.8) 0%, transparent 60%),
              linear-gradient(135deg, hsl(220, 70%, 10%) 0%, hsl(218, 65%, 18%) 50%, hsl(215, 55%, 22%) 100%)
            `,
          }}
        >
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: `linear-gradient(hsl(42, 85%, 52%) 1px, transparent 1px), linear-gradient(90deg, hsl(42, 85%, 52%) 1px, transparent 1px)`,
              backgroundSize: "60px 60px",
            }}
          />

          <div className="relative max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-16 items-center w-full">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded px-4 py-1.5 mb-8">
                <div className="w-2 h-2 rounded-full bg-[hsl(var(--gold))]" />
                <span className="text-white/80 text-xs font-semibold uppercase tracking-widest">
                  Профессиональный фулфилмент
                </span>
              </div>

              <h1 className="font-display font-black text-white leading-tight mb-6">
                <span className="text-5xl lg:text-6xl block">Хранение.</span>
                <span className="text-5xl lg:text-6xl block">Сборка.</span>
                <span className="text-5xl lg:text-6xl block text-[hsl(var(--gold))]">Доставка.</span>
              </h1>

              <p className="text-white/70 text-lg leading-relaxed mb-10 max-w-lg font-light">
                Передайте нам операционные процессы и сосредоточьтесь на росте продаж.
                Мы берём ваш товар и доставляем его покупателю — быстро, точно, прозрачно.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#calculator"
                  className="btn-gold px-8 py-4 font-display font-bold text-base rounded inline-flex items-center justify-center gap-2"
                >
                  <Icon name="Calculator" size={18} />
                  Рассчитать стоимость
                </a>
                <a
                  href="#how"
                  className="border border-white/30 text-white px-8 py-4 font-display font-semibold text-base rounded inline-flex items-center justify-center gap-2 hover:bg-white/10 transition-colors"
                >
                  <Icon name="Play" size={18} />
                  Как это работает
                </a>
              </div>

              <div className="mt-12 flex flex-wrap gap-8">
                {[
                  { icon: "CheckCircle", text: "Без скрытых платежей" },
                  { icon: "Shield", text: "Материальная ответственность" },
                  { icon: "Zap", text: "Запуск за 3 дня" },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-2">
                    <Icon name={item.icon} size={16} className="text-[hsl(var(--gold))]" />
                    <span className="text-white/70 text-sm">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="hidden lg:grid grid-cols-2 gap-4">
              {STATS.map((s) => (
                <div
                  key={s.label}
                  className="rounded-lg p-6"
                  style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)" }}
                >
                  <div className="font-display font-black text-3xl text-[hsl(var(--gold))] mb-2">
                    {s.value}
                  </div>
                  <div className="text-white/60 text-sm leading-snug">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:hidden bg-[hsl(var(--navy))] grid grid-cols-2 gap-px border-t border-white/10">
          {STATS.map((s) => (
            <div key={s.label} className="p-5 text-center">
              <div className="font-display font-black text-2xl text-[hsl(var(--gold))]">{s.value}</div>
              <div className="text-white/60 text-xs mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-14">
            <div className="text-[hsl(var(--gold))] text-xs font-display font-bold uppercase tracking-widest mb-3">
              Услуги
            </div>
            <h2 className="font-display font-extrabold text-4xl text-[hsl(var(--navy))] mb-4">
              Полный цикл обработки заказов
            </h2>
            <p className="text-muted-foreground max-w-2xl text-lg">
              От приёмки товара на складе до вручения посылки покупателю — все процессы под одной крышей.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s) => (
              <div
                key={s.title}
                className="card-hover border border-border rounded-lg p-7 group"
              >
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-5 transition-colors group-hover:bg-[hsl(42,85%,52%,0.15)]"
                  style={{ background: "hsl(218, 65%, 18%, 0.07)" }}>
                  <Icon name={s.icon} size={22} className="text-[hsl(var(--navy))] group-hover:text-[hsl(38,80%,44%)] transition-colors" />
                </div>
                <h3 className="font-display font-bold text-lg text-[hsl(var(--navy))] mb-2">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{s.desc}</p>
                <div className="pt-4 border-t border-border">
                  <span className="text-xs font-display font-semibold text-[hsl(38,80%,44%)] uppercase tracking-wide">
                    {s.detail}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="py-24 bg-[hsl(216,20%,96%)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-14">
            <div className="text-[hsl(var(--gold))] text-xs font-display font-bold uppercase tracking-widest mb-3">
              Как это работает
            </div>
            <h2 className="font-display font-extrabold text-4xl text-[hsl(var(--navy))] mb-4">
              Запуск за 4 шага
            </h2>
            <p className="text-muted-foreground max-w-xl text-lg">
              Простой процесс подключения без бюрократии и долгих согласований.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {HOW_STEPS.map((step, i) => (
              <div key={step.num} className="relative bg-white rounded-lg p-7 border border-border card-hover">
                <span className="step-number">{step.num}</span>
                <div className="relative z-10">
                  <div className="font-display font-black text-[hsl(var(--gold))] text-sm mb-4 tracking-wider">
                    ШАГ {step.num}
                  </div>
                  <h3 className="font-display font-bold text-[hsl(var(--navy))] text-lg mb-3">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
                </div>
                {i < HOW_STEPS.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 z-20">
                    <Icon name="ChevronRight" size={20} className="text-[hsl(var(--steel))]" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CALCULATOR */}
      <section id="calculator" className="py-24 bg-[hsl(var(--navy-dark))]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="text-[hsl(var(--gold))] text-xs font-display font-bold uppercase tracking-widest mb-3">
                Калькулятор
              </div>
              <h2 className="font-display font-extrabold text-4xl text-white mb-4">
                Рассчитайте стоимость
              </h2>
              <p className="text-white/60 text-lg mb-10">
                Укажите параметры вашего бизнеса и получите предварительную оценку затрат на фулфилмент.
              </p>

              <div className="space-y-8">
                {CALC_ITEMS.map((item) => (
                  <div key={item.id}>
                    <div className="flex justify-between items-baseline mb-2">
                      <label className="text-white font-display font-semibold text-sm">{item.label}</label>
                      <span className="text-[hsl(var(--gold))] font-display font-bold text-lg">
                        {calcValues[item.id as keyof typeof calcValues].toLocaleString()} {item.unit}
                      </span>
                    </div>
                    <p className="text-white/40 text-xs mb-3">{item.hint}</p>
                    <input
                      type="range"
                      min={item.min}
                      max={item.max}
                      step={item.step}
                      value={calcValues[item.id as keyof typeof calcValues]}
                      onChange={(e) =>
                        setCalcValues((prev) => ({ ...prev, [item.id]: Number(e.target.value) }))
                      }
                      className="w-full h-1.5 rounded-full appearance-none cursor-pointer"
                      style={{ accentColor: "hsl(42, 85%, 52%)", background: "rgba(255,255,255,0.15)" }}
                    />
                    <div className="flex justify-between text-white/30 text-xs mt-1">
                      <span>{item.min}</span>
                      <span>{item.max.toLocaleString()}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div
              className="rounded-xl p-10 sticky top-24"
              style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)" }}
            >
              <div className="text-white/50 text-sm font-display font-semibold uppercase tracking-widest mb-6">
                Предварительный расчёт
              </div>

              <div className="space-y-0 mb-8">
                <div className="flex justify-between items-center py-3.5 border-b border-white/10">
                  <span className="text-white/70 text-sm">
                    Хранение ({calcValues.storage} SKU × 30 дн)
                  </span>
                  <span className="text-white font-display font-semibold">
                    {(calcValues.storage * 8 * 30).toLocaleString()} ₽
                  </span>
                </div>
                <div className="flex justify-between items-center py-3.5 border-b border-white/10">
                  <span className="text-white/70 text-sm">
                    Сборка заказов ({calcValues.orders} шт)
                  </span>
                  <span className="text-white font-display font-semibold">
                    {(calcValues.orders * 35).toLocaleString()} ₽
                  </span>
                </div>
                <div className="flex justify-between items-center py-3.5 border-b border-white/10">
                  <span className="text-white/70 text-sm">
                    Возвраты ({calcValues.returns} шт)
                  </span>
                  <span className="text-white font-display font-semibold">
                    {(calcValues.returns * 120).toLocaleString()} ₽
                  </span>
                </div>
              </div>

              <div
                className="rounded-lg p-5 mb-8"
                style={{ background: "rgba(213, 162, 65, 0.12)", border: "1px solid rgba(213, 162, 65, 0.25)" }}
              >
                <div className="text-white/60 text-xs font-display uppercase tracking-widest mb-1">
                  Итого в месяц
                </div>
                <div className="font-display font-black text-4xl text-[hsl(var(--gold))]">
                  {totalCost.toLocaleString()} ₽
                </div>
                <div className="text-white/40 text-xs mt-2">
                  * без учёта стоимости доставки до конечного клиента
                </div>
              </div>

              <a
                href="#contacts"
                className="btn-gold w-full py-4 font-display font-bold text-base rounded flex items-center justify-center gap-2"
              >
                <Icon name="FileText" size={18} />
                Получить точный расчёт
              </a>

              <p className="text-white/30 text-xs text-center mt-4">
                Менеджер свяжется в течение 30 минут
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ORDER MANAGEMENT */}
      <section className="py-24 bg-white" id="management">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-[hsl(var(--gold))] text-xs font-display font-bold uppercase tracking-widest mb-3">
                Управление заказами
              </div>
              <h2 className="font-display font-extrabold text-4xl text-[hsl(var(--navy))] mb-6">
                Полный контроль в реальном времени
              </h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                Личный кабинет позволяет отслеживать каждый заказ от момента поступления
                до вручения покупателю. Все данные синхронизируются автоматически.
              </p>

              <div className="space-y-5">
                {[
                  { icon: "Eye", title: "Мониторинг остатков", desc: "Актуальные данные по каждому SKU с уведомлениями о критическом уровне" },
                  { icon: "RefreshCw", title: "Автосинхронизация", desc: "Заказы с Ozon, WB и вашего сайта поступают без ручного ввода" },
                  { icon: "Bell", title: "Push-уведомления", desc: "Мгновенные оповещения о статусах, проблемах и задержках" },
                  { icon: "Download", title: "Выгрузка отчётов", desc: "Excel, PDF, 1С-форматы в один клик за любой период" },
                ].map((f) => (
                  <div key={f.title} className="flex gap-4">
                    <div className="w-10 h-10 rounded-lg flex-shrink-0 flex items-center justify-center" style={{ background: "hsl(218,65%,18%,0.08)" }}>
                      <Icon name={f.icon} size={18} className="text-[hsl(var(--navy))]" />
                    </div>
                    <div>
                      <div className="font-display font-bold text-[hsl(var(--navy))] text-sm mb-0.5">{f.title}</div>
                      <div className="text-muted-foreground text-sm">{f.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Dashboard mockup */}
            <div className="bg-[hsl(var(--navy-dark))] rounded-xl overflow-hidden" style={{ border: "1px solid hsl(218,40%,28%,0.5)" }}>
              <div className="bg-[hsl(var(--navy))] px-5 py-3 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/70" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <div className="w-3 h-3 rounded-full bg-green-500/70" />
                <span className="text-white/40 text-xs ml-4 font-mono">dashboard.logipro.ru</span>
              </div>

              <div className="p-6">
                <div className="grid grid-cols-3 gap-3 mb-5">
                  {[
                    { label: "Активных заказов", value: "247", trend: "+12%" },
                    { label: "На складе (SKU)", value: "1 834", trend: "−3 SKU" },
                    { label: "Отправлено сегодня", value: "89", trend: "+7%" },
                  ].map((s) => (
                    <div key={s.label} className="rounded-lg p-3" style={{ background: "rgba(255,255,255,0.07)" }}>
                      <div className="text-white/40 text-xs mb-1 leading-tight">{s.label}</div>
                      <div className="font-display font-black text-white text-lg">{s.value}</div>
                      <div className="text-[hsl(var(--gold))] text-xs font-semibold mt-0.5">{s.trend}</div>
                    </div>
                  ))}
                </div>

                <div className="rounded-lg overflow-hidden" style={{ background: "rgba(255,255,255,0.04)" }}>
                  <div className="px-4 py-2 flex justify-between" style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
                    <span className="text-white/50 text-xs font-display font-semibold">ПОСЛЕДНИЕ ЗАКАЗЫ</span>
                    <span className="text-[hsl(var(--gold))] text-xs">Все заказы →</span>
                  </div>
                  {[
                    { id: "#45821", status: "Собран", client: "Иванова А.А.", color: "text-green-400" },
                    { id: "#45820", status: "В пути", client: "ООО Ромашка", color: "text-blue-400" },
                    { id: "#45819", status: "Доставлен", client: "Петров В.С.", color: "text-emerald-400" },
                    { id: "#45818", status: "В обработке", client: "Смирнова О.П.", color: "text-yellow-400" },
                  ].map((order) => (
                    <div
                      key={order.id}
                      className="px-4 py-2.5 flex items-center justify-between"
                      style={{ borderBottom: "1px solid rgba(255,255,255,0.04)" }}
                    >
                      <span className="text-white/70 text-xs font-mono">{order.id}</span>
                      <span className="text-white/50 text-xs">{order.client}</span>
                      <span className={`text-xs font-semibold ${order.color}`}>{order.status}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-24 bg-[hsl(216,20%,96%)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="text-[hsl(var(--gold))] text-xs font-display font-bold uppercase tracking-widest mb-3">
              Тарифы
            </div>
            <h2 className="font-display font-extrabold text-4xl text-[hsl(var(--navy))] mb-4">
              Прозрачное ценообразование
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-lg">
              Никаких скрытых комиссий. Платите только за то, чем пользуетесь.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 items-start">
            {TARIFFS.map((t) => (
              <div
                key={t.name}
                className={`rounded-xl border p-8 ${
                  t.highlight
                    ? "shadow-2xl scale-[1.02]"
                    : "bg-white border-border card-hover"
                }`}
                style={t.highlight ? {
                  background: "hsl(218, 65%, 18%)",
                  borderColor: "rgba(213,162,65,0.4)",
                } : {}}
              >
                {t.highlight && (
                  <div className="bg-[hsl(var(--gold))] text-[hsl(var(--navy-dark))] text-xs font-display font-bold uppercase tracking-widest px-3 py-1 rounded inline-block mb-4">
                    Популярный выбор
                  </div>
                )}

                <div className={`font-display font-extrabold text-2xl mb-1 ${t.highlight ? "text-white" : "text-[hsl(var(--navy))]"}`}>
                  {t.name}
                </div>
                <div className={`text-sm mb-6 ${t.highlight ? "text-white/60" : "text-muted-foreground"}`}>
                  {t.subtitle}
                </div>

                <div className="mb-8">
                  <span className={`font-display font-black text-4xl ${t.highlight ? "text-[hsl(var(--gold))]" : "text-[hsl(var(--navy))]"}`}>
                    {t.price}
                  </span>
                  {t.period && (
                    <span className={`text-sm ml-1 ${t.highlight ? "text-white/50" : "text-muted-foreground"}`}>
                      {t.period}
                    </span>
                  )}
                </div>

                <ul className="space-y-3 mb-8">
                  {t.features.map((f) => (
                    <li key={f} className="flex items-center gap-3">
                      <Icon
                        name="Check"
                        size={15}
                        className={t.highlight ? "text-[hsl(var(--gold))]" : "text-[hsl(var(--navy))]"}
                      />
                      <span className={`text-sm ${t.highlight ? "text-white/80" : "text-foreground"}`}>{f}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contacts"
                  className={`w-full py-3.5 font-display font-bold text-sm rounded flex items-center justify-center transition-all ${
                    t.highlight ? "btn-gold" : "btn-navy text-white"
                  }`}
                >
                  {t.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-20 bg-[hsl(var(--gold))]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display font-black text-4xl text-[hsl(var(--navy-dark))] mb-4">
            Готовы запустить фулфилмент?
          </h2>
          <p className="text-[hsl(218,65%,18%)] text-lg mb-8 opacity-70">
            Первые 30 дней — без абонентской платы. Только фактические расходы.
          </p>
          <a
            href="#contacts"
            className="bg-[hsl(var(--navy-dark))] text-white px-10 py-4 font-display font-bold text-base rounded inline-flex items-center gap-2 hover:bg-[hsl(var(--navy-light))] transition-colors"
          >
            <Icon name="ArrowRight" size={18} />
            Начать бесплатно
          </a>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <div className="text-[hsl(var(--gold))] text-xs font-display font-bold uppercase tracking-widest mb-3">
                Контакты
              </div>
              <h2 className="font-display font-extrabold text-4xl text-[hsl(var(--navy))] mb-6">
                Обсудим ваш проект
              </h2>
              <p className="text-muted-foreground text-lg mb-10">
                Оставьте заявку — менеджер свяжется в течение 30 минут и подготовит
                персональное коммерческое предложение.
              </p>

              <div className="space-y-5">
                {[
                  { icon: "Phone", label: "Телефон", value: "8 800 123-45-67 (бесплатно)" },
                  { icon: "Mail", label: "Email", value: "hello@logipro.ru" },
                  { icon: "MapPin", label: "Склад", value: "Москва, Новорижское ш., 26-й км" },
                  { icon: "Clock", label: "Режим работы", value: "Пн–Пт 9:00–18:00, склад 24/7" },
                ].map((c) => (
                  <div key={c.label} className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-lg flex-shrink-0 flex items-center justify-center" style={{ background: "hsl(218,65%,18%,0.08)" }}>
                      <Icon name={c.icon} size={18} className="text-[hsl(var(--navy))]" />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground uppercase tracking-wide mb-0.5">{c.label}</div>
                      <div className="font-display font-semibold text-[hsl(var(--navy))] text-sm">{c.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="border border-border rounded-xl p-8" style={{ background: "hsl(216,20%,97%)" }}>
              {formSent ? (
                <div className="flex flex-col items-center justify-center h-full py-12 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <Icon name="CheckCircle" size={32} className="text-green-600" />
                  </div>
                  <h3 className="font-display font-extrabold text-2xl text-[hsl(var(--navy))] mb-2">Заявка отправлена!</h3>
                  <p className="text-muted-foreground">Менеджер свяжется с вами в течение 30 минут.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="font-display font-bold text-[hsl(var(--navy))] text-xl mb-6">
                    Оставить заявку
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-display font-semibold text-[hsl(var(--navy))] uppercase tracking-wide mb-1.5 block">
                        Имя *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Александр"
                        value={orderForm.name}
                        onChange={(e) => setOrderForm((p) => ({ ...p, name: e.target.value }))}
                        className="w-full border border-border rounded px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[hsl(var(--navy))] bg-white"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-display font-semibold text-[hsl(var(--navy))] uppercase tracking-wide mb-1.5 block">
                        Компания
                      </label>
                      <input
                        type="text"
                        placeholder="ООО Компания"
                        value={orderForm.company}
                        onChange={(e) => setOrderForm((p) => ({ ...p, company: e.target.value }))}
                        className="w-full border border-border rounded px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[hsl(var(--navy))] bg-white"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-display font-semibold text-[hsl(var(--navy))] uppercase tracking-wide mb-1.5 block">
                        Телефон *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+7 (___) ___-__-__"
                        value={orderForm.phone}
                        onChange={(e) => setOrderForm((p) => ({ ...p, phone: e.target.value }))}
                        className="w-full border border-border rounded px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[hsl(var(--navy))] bg-white"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-display font-semibold text-[hsl(var(--navy))] uppercase tracking-wide mb-1.5 block">
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="mail@company.ru"
                        value={orderForm.email}
                        onChange={(e) => setOrderForm((p) => ({ ...p, email: e.target.value }))}
                        className="w-full border border-border rounded px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[hsl(var(--navy))] bg-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-display font-semibold text-[hsl(var(--navy))] uppercase tracking-wide mb-1.5 block">
                      Комментарий
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Расскажите о вашем товаре, объёмах, пожеланиях..."
                      value={orderForm.comment}
                      onChange={(e) => setOrderForm((p) => ({ ...p, comment: e.target.value }))}
                      className="w-full border border-border rounded px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[hsl(var(--navy))] bg-white resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-navy w-full py-4 font-display font-bold text-base rounded flex items-center justify-center gap-2 text-white"
                  >
                    <Icon name="Send" size={18} />
                    Отправить заявку
                  </button>

                  <p className="text-muted-foreground text-xs text-center">
                    Нажимая кнопку, вы соглашаетесь с политикой обработки персональных данных
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[hsl(var(--navy-dark))] py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 bg-[hsl(var(--gold))] rounded flex items-center justify-center">
                <Icon name="Box" size={14} className="text-[hsl(var(--navy-dark))]" />
              </div>
              <span className="font-display font-extrabold text-lg text-white tracking-tight">
                Logi<span className="text-[hsl(var(--gold))]">Pro</span>
              </span>
            </div>

            <div className="flex flex-wrap justify-center gap-6">
              {NAV_LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="text-white/40 hover:text-white/80 text-sm transition-colors"
                >
                  {l.label}
                </a>
              ))}
            </div>

            <div className="text-white/30 text-xs">
              © 2026 LogiPro. Все права защищены.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}