import React, { createContext, useEffect, useState } from "react";
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
import Loader from "./components/ui/Loader";
import axios from "axios";
import { data } from "./data";

export const DataContext = createContext();
export const url = "https://jaberissa.pythonanywhere.com";
function App() {
  // const [data ,setData] = useState([]) ;
  useEffect(() => {
    // إضافة اتجاه RTL للصفحة
    document.documentElement.setAttribute("dir", "rtl");
    document.documentElement.setAttribute("lang", "ar");
    // axios.get("https://jaberissa.pythonanywhere.com/api/home").then((res) => {
    //   console.log(res.data);
    // });
  }, []);

  return (
    <DataContext.Provider value={data}>
      {/* <Loader /> */}
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
        {/* <TeamSection /> */}
        <ContactSection />
      </main>
      <Footer />
      {/* <ScrollAnimations /> */}
    </DataContext.Provider>
  );
}

export default App;
