import { useState } from "react";
import { Navbar } from "./components/Navbar.jsx";
import { HeroSection } from "./components/HeroSection.jsx";
import { AboutSection } from "./components/AboutSection.jsx";
import { HowItWorks } from "./components/HowItWorks.jsx";
import { WhoCanApply } from "./components/WhoCanApply.jsx";
import { InvestorsSection } from "./components/InvestorsSection.jsx";
import { FeaturedStartups } from "./components/FeaturedStartups.jsx";
import { AboutKaroStartup } from "./components/AboutKaroStartup.jsx";
import { CTASection } from "./components/CTASection.jsx";
import { Footer } from "./components/Footer.jsx";
import { ApplicationModal } from "./components/ApplicationModal.jsx";
import { StatsSection } from "./components/StatsSection.jsx";
import { StartupDiscovery } from "./components/StartupDiscovery.jsx";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar onApplyClick={handleOpenModal} />
      <main>
        <HeroSection onApplyClick={handleOpenModal} />
        <AboutSection />
        <HowItWorks />
        <WhoCanApply />
        <InvestorsSection />
        <StatsSection />
        <FeaturedStartups />
        <StartupDiscovery />
        <AboutKaroStartup />
        <CTASection onApplyClick={handleOpenModal} />
      </main>
      <Footer />
      <ApplicationModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
}

export default App;

