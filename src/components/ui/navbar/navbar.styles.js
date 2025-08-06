import styled from "styled-components";

export const NavbarContainer = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  /* background: rgba(0, 0, 0, 0.9); */
  /* background: rgba(255, 255, 255, 0.9); */
  background: #fff;
  backdrop-filter: blur(10px);
  z-index: 1000;
  padding: 10px 2rem;
  transition: all 0.3s ease;
  box-shadow: 0 1px 10px rgba(255, 140, 0, 0.3);
  transform: translateY(${(props) => (props.$scrolled ? "-100%" : "0")});
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* max-width: 1200px; */
  margin: 0 auto;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const LogoLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: #616161;
  transition: color 0.3s ease;
  column-gap: 10px;
  &:hover {
    color: #ff8c00;
  }
`;

export const LogoImg = styled.img`
  height: 60px;
`;

export const SiteTitle = styled.span`
  font-size: 1.2rem;
  font-weight: bold;
  white-space: nowrap;
`;

export const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  gap: 2rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavLink = styled.a`
  color: #fff;
  text-decoration: none;
  transition: color 0.3s ease;
  position: relative;
  color: #616161;
  font-size: var(--normal-text);
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
