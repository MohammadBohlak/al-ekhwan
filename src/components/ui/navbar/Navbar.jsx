import React, { useState, useEffect, useRef } from "react";
import logo from "../../../assets/images/logo_without_background2.png";
import {
  Logo,
  LogoImg,
  LogoLink,
  Nav,
  NavbarContainer,
  NavLink,
  NavLinks,
  SiteTitle,
} from "./navbar.styles";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  const lastScrollTop = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > 100 && scrollTop > lastScrollTop.current) {
        setScrolled(true);
      } else if (scrollTop < lastScrollTop.current) {
        setScrolled(false);
      }

      lastScrollTop.current = scrollTop <= 0 ? 0 : scrollTop; // للحماية من التمرير السلبي
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <NavbarContainer $scrolled={scrolled}>
      <Nav>
        <Logo>
          <LogoLink href="#home">
            <LogoImg src={logo} alt="الأخوان للإنشاءات" />
            <SiteTitle>مجموعة الاخوان للأعمال الهندسية</SiteTitle>
          </LogoLink>
        </Logo>
        <NavLinks>
          <li>
            <NavLink href="#home">الرئيسية</NavLink>
          </li>
          <li>
            <NavLink href="#services">خدماتنا</NavLink>
          </li>
          <li>
            <NavLink href="#projects">مشاريعنا</NavLink>
          </li>
          <li>
            <NavLink href="#contact">اتصل بنا</NavLink>
          </li>
        </NavLinks>
      </Nav>
    </NavbarContainer>
  );
};

export default Navbar;
