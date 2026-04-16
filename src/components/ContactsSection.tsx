import { useState } from "react";
import Icon from "@/components/ui/icon";

const NAV_LINKS = [
  { label: "Услуги", href: "#services" },
  { label: "Как работает", href: "#how" },
  { label: "Тарифы", href: "#pricing" },
  { label: "Калькулятор", href: "#calculator" },
  { label: "Контакты", href: "#contacts" },
];

export default function ContactsSection() {
  const [orderForm, setOrderForm] = useState({ name: "", company: "", phone: "", email: "", comment: "" });
  const [formSent, setFormSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSent(true);
  };

  return (
    <>
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
                  { icon: "Phone", label: "Телефон", value: "+7 995 982-10-92" },
                  { icon: "Mail", label: "Email", value: "wegaprod@yandex.ru" },
                  { icon: "MapPin", label: "Склад", value: "Казань, ул. Братьев Петряевых 5к4" },
                  { icon: "Clock", label: "Режим работы", value: "Ежедневно с 10:00 до 20:00" },
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
    </>
  );
}