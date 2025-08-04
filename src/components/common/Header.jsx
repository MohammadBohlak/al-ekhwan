import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import logo from '../../assets/images/logo_without_background2.png';

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.9);
  backdrop-filter: blur(10px);
  z-index: 1000;
  padding: 1rem 2rem;
  transition: all 0.3s ease;
  box-shadow: ${props => props.$scrolled ? '0 5px 20px rgba(255, 140, 0, 0.3)' : 'none'};
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const LogoLink = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #fff;
  transition: color 0.3s ease;
  
  &:hover {
    color: #ff8c00;
  }
`;

const LogoImg = styled.img`
  height: 60px;
`;

const SiteTitle = styled.span`
  font-size: 1.2rem;
  font-weight: bold;
  white-space: nowrap;
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  gap: 2rem;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.a`
  color: #fff;
  text-decoration: none;
  transition: color 0.3s ease;
  position: relative;
  
  &:hover {
    color: #ff8c00;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: #ff8c00;
    transition: width 0.3s ease;
  }
  
  &:hover::after {
    width: 100%;
  }
`;

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <HeaderContainer $scrolled={scrolled}>
      <Nav>
        <Logo>
          <LogoLink href="#home">
            <LogoImg src={logo} alt="الأخوان للإنشاءات" />
            <SiteTitle>مجموعة الاخوان للأعمال الهندسية</SiteTitle>
          </LogoLink>
        </Logo>
        <NavLinks>
          <li><NavLink href="#home">الرئيسية</NavLink></li>
          <li><NavLink href="#services">خدماتنا</NavLink></li>
          <li><NavLink href="#projects">مشاريعنا</NavLink></li>
          <li><NavLink href="#contact">اتصل بنا</NavLink></li>
        </NavLinks>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;