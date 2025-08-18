import React, { createContext, useEffect, useState } from "react";
import Footer from "./components/common/Footer";
import HeroSection from "./components/sections/HeroSection";
import ServicesSection from "./components/sections/ServicesSection";
import ProjectsSection from "./components/sections/projects/ProjectsSection";
import ClientsSection from "./components/sections/clients/ClientsSection";
import TeamSection from "./components/sections/TeamSection";
import ContactSection from "./components/sections/contact/ContactSection";
import BackgroundEffects from "./components/common/BackgroundEffects";
import ScrollAnimations from "./components/common/ScrollAnimations";
import Navbar from "./components/ui/navbar/Navbar";
import AboutUsSection from "./components/sections/aboutUs/AboutUsSection";
import Ourvision from "./components/sections/Ourvision";
import ScrollCircle from "./components/ui/ScrollCircle";
import Loader from "./components/ui/Loader";
import axios from "axios";
import { data } from "./data";
import styled from "styled-components";

export const DataContext = createContext();
export const url = "https://jaberissa.pythonanywhere.com";
const MainContent = styled.main`
  margin-top: var(--h-navbar);
`;
function App() {
  useEffect(() => {
    // إضافة اتجاه RTL للصفحة
    document.documentElement.setAttribute("dir", "rtl");
    document.documentElement.setAttribute("lang", "ar");
    axios
      .get("https://jaberissa.pythonanywhere.com/api/home/", {})
      .then((res) => {
        // console.log(res.data);
        // setData(res.data);
      });
  }, []);

  return (
    <DataContext.Provider value={{ ...data, url: data.base_url }}>
      {/* <Loader /> */}
      {/* <BackgroundEffects /> */}
      <Navbar />

      <MainContent>
        <ScrollCircle />
        <HeroSection />
        <AboutUsSection />
        <Ourvision />
        <ServicesSection />
        <ProjectsSection />
        <ClientsSection />
        {/* <TeamSection /> */}
        <ContactSection />
      </MainContent>
      <Footer />
      {/* <ScrollAnimations /> */}
    </DataContext.Provider>
  );
}

export default App;
