import { createContext, useEffect, useState } from "react";
import Footer from "./components/ui/footer/Footer";
import HeroSection from "./components/sections/HeroSection";
import ServicesSection from "./components/sections/ServicesSection";
import ProjectsSection from "./components/sections/projects/ProjectsSection";
import ClientsSection from "./components/sections/clients/ClientsSection";
import ContactSection from "./components/sections/contact/ContactSection";
import Navbar from "./components/ui/navbar/Navbar";
import AboutUsSection from "./components/sections/aboutUs/AboutUsSection";
import Ourvision from "./components/sections/ourvision/Ourvision";
import axios from "axios";
import styled from "styled-components";
import Loader from "./components/ui/Loader";
import WhatsappIcon from "./components/ui/WhatsappIcon";

export const DataContext = createContext();
export const url = "https://jaberissa.pythonanywhere.com";
const MainContent = styled.main`
  margin-top: var(--h-navbar);
`;
function App() {
  const showContent = () => {
    setShow(true);
  };
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [show, setShow] = useState(false);
  useEffect(() => {
    // إضافة اتجاه RTL للصفحة
    document.documentElement.setAttribute("dir", "rtl");
    document.documentElement.setAttribute("lang", "ar");
    axios
      .get("https://jaberissa.pythonanywhere.com/api/home/", {})
      .then((res) => {
        console.log(res.data);
        setData(res.data);
        setLoading(false);
      });
  }, []);

  return (
    <DataContext.Provider value={{ ...data, url: data.base_url }}>
      {loading || !show ? (
        <>
          <Loader loading={loading} showContent={showContent} />
        </>
      ) : (
        <>
          <Navbar />

          <MainContent>
            <HeroSection />
            <AboutUsSection />
            <Ourvision />
            <ServicesSection />
            <ProjectsSection />
            <ClientsSection />
            <ContactSection />
          </MainContent>
          <Footer />
          <WhatsappIcon />
        </>
      )}
    </DataContext.Provider>
  );
}

export default App;
