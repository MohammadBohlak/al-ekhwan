import React, { useEffect } from "react";
import Footer from "./components/common/Footer";
import HeroSection from "./components/sections/HeroSection";
import ServicesSection from "./components/sections/ServicesSection";
import ProjectsSection from "./components/sections/ProjectsSection";
import ClientsSection from "./components/sections/ClientsSection";
import TeamSection from "./components/sections/TeamSection";
import ContactSection from "./components/sections/ContactSection";
import BackgroundEffects from "./components/common/BackgroundEffects";
import ScrollAnimations from "./components/common/ScrollAnimations";
import Navbar from "./components/ui/navbar/Navbar";
import AboutUsSection from "./components/sections/AboutUsSection";
import Ourvision from "./components/sections/Ourvision";
import ScrollCircle from "./components/ui/ScrollCircle";

function App() {
  useEffect(() => {
    // إضافة اتجاه RTL للصفحة
    document.documentElement.setAttribute("dir", "rtl");
    document.documentElement.setAttribute("lang", "ar");
  }, []);

  return (
    <>
      {/* <BackgroundEffects /> */}
      <Navbar />
      <main>
        <ScrollCircle />
        <HeroSection />
        <AboutUsSection />
        <Ourvision />
        <ServicesSection />
        <ProjectsSection />
        <ClientsSection />
        <TeamSection />
        <ContactSection />
      </main>
      <Footer />
      {/* <ScrollAnimations /> */}
    </>
  );
}

export default App;
