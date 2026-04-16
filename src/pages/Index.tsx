import Navbar from "@/components/Navbar";
import HeroSections from "@/components/HeroSections";
import CalculatorSection from "@/components/CalculatorSection";
import ContactsSection from "@/components/ContactsSection";

export default function Index() {
  return (
    <div className="min-h-screen bg-background font-body">
      <Navbar />
      <HeroSections />
      <CalculatorSection />
      <ContactsSection />
    </div>
  );
}
