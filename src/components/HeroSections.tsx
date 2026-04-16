import Icon from "@/components/ui/icon";

const STATS = [
  { value: "2 400+", label: "клиентов доверяют нам" },
  { value: "18 000 м²", label: "складских площадей" },
  { value: "99.7%", label: "точность сборки" },
  { value: "8 лет", label: "на рынке логистики" },
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

export default function HeroSections() {
  return (
    <>
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
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-5 transition-colors group-hover:bg-[hsl(42,85%,52%,0.15)]"
                  style={{ background: "hsl(218, 65%, 18%, 0.07)" }}
                >
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
    </>
  );
}
