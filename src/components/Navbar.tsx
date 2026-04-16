import { useState } from "react";
import Icon from "@/components/ui/icon";

const NAV_LINKS = [
  { label: "Услуги", href: "#services" },
  { label: "Как работает", href: "#how" },
  { label: "Тарифы", href: "#pricing" },
  { label: "Калькулятор", href: "#calculator" },
  { label: "Контакты", href: "#contacts" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
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
          <a href="tel:+79959821092" className="text-sm font-semibold text-[hsl(var(--navy))]">
            +7 995 982-10-92
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
  );
}