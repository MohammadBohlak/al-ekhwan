import React, { createContext, useEffect, useState } from "react";
import Footer from "./components/ui/footer/Footer";
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
// import Loader from "./components/ui/Loader";
import axios from "axios";
// import { data } from "./data";
import styled from "styled-components";

const Loader = styled.div`
  /* HTML: <div class="loader"></div> */
  position: fixed;
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%);
  /* HTML: <div class="loader"></div> */
  width: fit-content;
  font-size: 40px;
  font-family: monospace;
  font-weight: bold;
  text-transform: uppercase;
  color: #0000;
  -webkit-text-stroke: 1px var(--primary);
  --g: conic-gradient(var(--primary) 0 0) no-repeat text;
  background: var(--g) 0, var(--g) 1ch, var(--g) 2ch, var(--g) 3ch, var(--g) 4ch,
    var(--g) 5ch, var(--g) 6ch;
  background-position-y: 100%, 0;
  animation: l16 2s linear infinite alternate;
  &::before {
    content: "ALAKHWAN";
  }
  @keyframes l16 {
    0% {
      background-size: 1ch 0, 1ch 0, 1ch 0, 1ch 0, 1ch 0, 1ch 0, 1ch 0;
    }
    14.28% {
      background-size: 1ch 100%, 1ch 0, 1ch 0, 1ch 0, 1ch 0, 1ch 0, 1ch 0;
    }
    28.57% {
      background-size: 1ch 100%, 1ch 100%, 1ch 0, 1ch 0, 1ch 0, 1ch 0, 1ch 0;
    }
    42.85% {
      background-size: 1ch 100%, 1ch 100%, 1ch 100%, 1ch 0, 1ch 0, 1ch 0, 1ch 0;
    }
    57.14% {
      background-size: 1ch 100%, 1ch 100%, 1ch 100%, 1ch 100%, 1ch 0, 1ch 0,
        1ch 0;
    }
    71.43% {
      background-size: 1ch 100%, 1ch 100%, 1ch 100%, 1ch 100%, 1ch 100%, 1ch 0,
        1ch 0;
    }
    85.71% {
      background-size: 1ch 100%, 1ch 100%, 1ch 100%, 1ch 100%, 1ch 100%,
        1ch 100%, 1ch 0;
    }
    100% {
      background-size: 1ch 100%, 1ch 100%, 1ch 100%, 1ch 100%, 1ch 100%,
        1ch 100%, 1ch 100%;
    }
  }
`;
export const DataContext = createContext();
export const url = "https://jaberissa.pythonanywhere.com";
const MainContent = styled.main`
  margin-top: var(--h-navbar);
`;
function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // إضافة اتجاه RTL للصفحة
    document.documentElement.setAttribute("dir", "rtl");
    document.documentElement.setAttribute("lang", "ar");
    axios
      .get("https://jaberissa.pythonanywhere.com/api/home/", {})
      .then((res) => {
        console.log(res.data);
        console.log("data is :", data);
        setData(res.data);
        setLoading(false);
      });
  }, []);

  return (
    <DataContext.Provider value={{ ...data, url: data.base_url }}>
      {/* <BackgroundEffects /> */}
      {!loading ? (
        <>
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
        </>
      ) : (
        <Loader />
      )}
    </DataContext.Provider>
  );
}

export default App;
