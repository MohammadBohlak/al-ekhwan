import React from "react";
import styled from "styled-components";
import logo from "../../assets/images/logo_without_background2.png";
import { LigntText, MainTitle, SubTitle, Text } from "./texts";
import { Container } from "../ui/container.styles";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { contactInfo } from "../../assets/data/projects";
const FooterContainer = styled(Container)`
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
const FooterBody = styled.div`
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
const FooterBottom = styled.div`
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
const FooterItem = styled.div`
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
const FooterLogo = styled.img`
  width: 100px;
  height: 100px;
  margin-bottom: 10px;
  @media (max-width: 768px) {
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 20px;
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const SocialLink = styled.a`
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
const FooterItemTitle = styled(MainTitle)`
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
const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;
`;
const FooterLink = styled.a`
  display: block;
  margin-bottom: 10px;
  color: #6c757d;
  text-decoration: none;
  transition: all 0.3s ease;
  font-size: var(--small-text);
  text-align: initial;
  &:hover {
    color: #ff7043;
  }
  @media (max-width: 768px) {
    text-align: center;
  }
`;
const ContactItems = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
`;
const ContactIcon = styled.div`
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
const ContactItem = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 10px;
  @media (max-width: 768px) {
    justify-content: center;
    align-items: center;
  }
`;
const Footer = () => {
  return (
    <>
      <FooterContainer>
        <FooterBody>
          <FooterItem>
            <FooterLogo src={logo} />
            <Text className="text-logo">
              نقدم حلولاً بنائية متكاملة ومبتكرة تلبي احتياجات عملائنا بأعلى
              معايير الجودة والاحترافية.
            </Text>
            <SocialLinks>
              <SocialLink href="#">
                <FaFacebookF />
              </SocialLink>
              <SocialLink href="#">
                <FaInstagram />
              </SocialLink>
              <SocialLink href="#">
                <FaWhatsapp />
              </SocialLink>
            </SocialLinks>
          </FooterItem>
          <FooterItem>
            <FooterItemTitle>روابط سريعة</FooterItemTitle>
            <FooterLinks>
              <FooterLink href="#home">الرئيسية</FooterLink>
              <FooterLink href="#services">خدماتنا</FooterLink>
              <FooterLink href="#projects">مشاريعنا</FooterLink>
              <FooterLink href="#contact">اتصل بنا</FooterLink>
            </FooterLinks>
          </FooterItem>
          <FooterItem>
            <FooterItemTitle>تواصل معنا</FooterItemTitle>
            <FooterLinks>
              <ContactItems>
                {contactInfo.map((item, idx) => (
                  <ContactItem key={idx}>
                    <ContactIcon>{item.icon}</ContactIcon>
                    {/* <SubTitle>{item.title}</SubTitle> */}
                    <Text dangerouslySetInnerHTML={{ __html: item.details }} />
                  </ContactItem>
                ))}
              </ContactItems>
            </FooterLinks>
          </FooterItem>
        </FooterBody>
      </FooterContainer>
      <FooterBottom>
        <LigntText>
          &copy; 2025 الأخوان للإنشاءات | ALAKHWAN For Constructions. جميع
          الحقوق محفوظة.
        </LigntText>
        <LigntText>بناء أحلامكم بجودة وإتقان</LigntText>
      </FooterBottom>
    </>
  );
};

export default Footer;
