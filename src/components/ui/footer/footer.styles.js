import styled from "styled-components";
import { MainTitle } from "../../common/texts";
import { Container } from "../container.styles";

export const FooterContainer = styled(Container)`
  /* background: linear-gradient(135deg, #111, #222); */
  background-color: white;
  /* text-align: center; */
  padding-top: 2rem;
  padding-bottom: 2rem;
  font-size: var(--min-text);
  color: #333;
  border-top: 2px solid #ff8c00;
  /* min-height: 400px; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const FooterBody = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
  /* text-align: center; */
  justify-content: center;
  align-items: center;
`;
export const FooterBottom = styled.div`
  /* height: 100px; */
  color: #333;
  background-color: white;
  padding: 1rem;
  /* margin-top: 1rem; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: #0000004f;
    /* z-index: -1; */
  }
  @media (max-width: 768px) {
    text-align: center;
  }
`;
export const FooterItem = styled.div`
  /* background-color: #123456; */
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  /* justify-content: center; */
  /* text-align: center; */
  /* padding: 20px; */
  @media (max-width: 768px) {
    .text-logo {
      text-align: center;
    }
  }
`;
export const FooterLogo = styled.img`
  width: 100px;
  height: 100px;
  margin-bottom: 10px;
  @media (max-width: 768px) {
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 20px;
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export const SocialLink = styled.a`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--normal-text);
  color: #6c757d;
  background-color: #f8f9fa;
  border: 1px solid #e9ecef;
  border-radius: 50%;
  transition: all 0.3s ease;

  &:hover {
    background-color: #ff7043;
    color: #ffffff;
    transform: translateY(-3px);
    border-color: #ff7043;
  }
`;
export const FooterItemTitle = styled(MainTitle)`
  font-size: var(--normal-text);
  text-align: initial;
  /* background-color: red; */
  color: black !important;
  margin-bottom: 20px;
  &::after {
    left: auto;
    right: 0px;
    width: 70px;
    transform: translateX(0);
    height: 3px;
  }
  @media (max-width: 768px) {
    text-align: center;
    &::after {
      left: 50%;
      transform: translateX(-50%);
      right: auto;
    }
  }
`;
export const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;
`;
export const FooterLink = styled.a`
  display: block;
  margin-bottom: 10px;
  color: #6c757d;
  text-decoration: none;
  transition: all 0.3s ease;
  font-size: var(--small-text);
  text-align: initial;
  &:hover {
    color: #ff7043 !important;
  }
  @media (max-width: 768px) {
    text-align: center;
  }
`;
export const ContactItems = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
`;
export const ContactIcon = styled.div`
  /* font-size: 1.5rem; */
  color: var(--primary);
  /* margin-bottom: 1rem; */

  /* width: 60px;
  height: 60px; */
  /* border-radius: 50%; */
  display: flex;
  align-items: center;
  justify-content: center;
  /* background-color: #f5f5f5; */
  transition: all 0.3s;
`;
export const ContactItem = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 10px;
  @media (max-width: 768px) {
    justify-content: center;
    align-items: center;
  }
`;
