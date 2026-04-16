import { useState } from "react";
import Icon from "@/components/ui/icon";

const CALC_ITEMS = [
  { id: "storage", label: "Хранение (SKU)", unit: "SKU", price: 8, hint: "Количество уникальных артикулов", min: 10, max: 500, step: 10 },
  { id: "orders", label: "Заказы в месяц", unit: "шт", price: 35, hint: "Среднемесячное количество заказов", min: 50, max: 10000, step: 50 },
  { id: "returns", label: "Возвраты в месяц", unit: "шт", price: 120, hint: "Ожидаемое количество возвратов", min: 0, max: 300, step: 5 },
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

export default function CalculatorSection() {
  const [calcValues, setCalcValues] = useState({ storage: 50, orders: 300, returns: 15 });

  const totalCost =
    calcValues.storage * 8 * 30 +
    calcValues.orders * 35 +
    calcValues.returns * 120;

  return (
    <>
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
    </>
  );
}
