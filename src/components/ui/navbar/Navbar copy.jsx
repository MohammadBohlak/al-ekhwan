// Navbar.jsx
import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "motion/react";
import logo from "../../../assets/images/logo_without_background2.png";

// ================= Styled Components =================

export const NavbarContainer = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  height: var(--h-navbar);
  background: #fff;
  backdrop-filter: blur(10px);
  padding: 10px 2rem;
  box-shadow: ${({ $scrolled }) =>
    !$scrolled ? "0 1px 10px rgba(255, 140, 0, 0.3)" : "none"};
  transform: translateY(${(props) => (props.$scrolled ? "-100%" : "0")});
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  z-index: 1000;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const LogoLink = styled.a`
  display: flex;
  align-items: center;
  color: #616161;
  text-decoration: none;
  transition: color 0.3s ease;
  gap: 10px;

  &:hover {
    color: #ff8c00;
  }
`;

export const LogoImg = styled.img`
  height: 60px;
`;

export const SiteTitle = styled.span`
  font-size: 20px;
  font-weight: bold;
  white-space: nowrap;
  @media (max-width: 768px) {
    font-size: 16px;
  }
  @media (max-width: 500px) {
    font-size: 12px;
  }
`;

export const NavLinks = styled.ul`
  display: flex;
  gap: 2rem;
  list-style: none;

  @media (max-width: 992px) {
    display: none;
  }
`;

export const NavLink = styled.a`
  position: relative;
  color: #616161;
  text-decoration: none;
  font-size: var(--small-text);
  transition: color 0.3s ease;

  &:hover {
    color: #ff8c00;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -5px;
    right: 0;
    width: 0;
    height: 2px;
    background: #ff8c00;
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;

const MenuButton = styled.button`
  background: none;
  border: none;
  font-size: 2rem;
  color: #616161;
  cursor: pointer;
  display: none;

  @media (max-width: 992px) {
    display: block;
  }
`;

const Overlay = styled(motion.div)`
  position: fixed;
  top: var(--h-navbar);
  left: 0;
  width: 100%;
  height: calc(100% - var(--h-navbar));
  background: rgba(0, 0, 0, 0.3);
  z-index: 998;
`;

const Drawer = styled(motion.div)`
  position: absolute;
  top: var(--h-navbar);
  left: 0;
  width: 100%;
  background: #fff;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 999;
`;

const DrawerLinks = styled(motion.ul)`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 0;
  margin: 0;
`;

const DrawerItem = styled(motion.li)`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const DrawerNavLink = styled(NavLink)`
  width: 100%;
  text-align: center;
  padding: 0.5rem 0;
  font-size: 1.1rem;
`;

// ================= Motion Variants =================

const dropVariants = {
  closed: {
    height: 0,
    opacity: 0,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
  open: {
    height: "auto",
    opacity: 1,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
};

const listVariants = {
  closed: { transition: { staggerChildren: 0 } },
  open: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  closed: { opacity: 0, y: -20 },
  open: { opacity: 1, y: 0 },
};

// ================= Navbar Component =================

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const lastScrollTop = useRef(0);

  // إظهار/إخفاء شريط التنقل عند التمرير
  useEffect(() => {
    const handleScroll = () => {
      const st = window.pageYOffset || document.documentElement.scrollTop;
      if (st > 100 && st > lastScrollTop.current) {
        setScrolled(true);
      } else if (st < lastScrollTop.current) {
        setScrolled(false);
      }
      lastScrollTop.current = st <= 0 ? 0 : st;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDrawer = () => setDrawerOpen((prev) => !prev);

  return (
    <>
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

          <MenuButton onClick={toggleDrawer}>
            <AnimatePresence exitBeforeEnter>
              {drawerOpen ? (
                <motion.span
                  key="close"
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.3 }}
                >
                  <FiX />
                </motion.span>
              ) : (
                <motion.span
                  key="open"
                  initial={{ opacity: 0, rotate: 90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: -90 }}
                  transition={{ duration: 0.3 }}
                >
                  <FiMenu />
                </motion.span>
              )}
            </AnimatePresence>
          </MenuButton>
        </Nav>

        <AnimatePresence initial={false}>
          {drawerOpen && (
            <Drawer
              variants={dropVariants}
              initial="closed"
              animate="open"
              exit="closed"
              style={{ originY: 0 }}
            >
              <DrawerLinks
                variants={listVariants}
                initial="closed"
                animate="open"
                exit="closed"
              >
                {[
                  { href: "#home", label: "الرئيسية" },
                  { href: "#services", label: "خدماتنا" },
                  { href: "#projects", label: "مشاريعنا" },
                  { href: "#contact", label: "اتصل بنا" },
                ].map((item) => (
                  <DrawerItem key={item.href} variants={itemVariants}>
                    <DrawerNavLink
                      href={item.href}
                      onClick={() => setDrawerOpen(false)}
                    >
                      {item.label}
                    </DrawerNavLink>
                  </DrawerItem>
                ))}
              </DrawerLinks>
            </Drawer>
          )}
        </AnimatePresence>
      </NavbarContainer>

      <AnimatePresence>
        {drawerOpen && (
          <Overlay
            variants={{ closed: { opacity: 0 }, open: { opacity: 1 } }}
            initial="closed"
            animate="open"
            exit="closed"
            onClick={() => setDrawerOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
