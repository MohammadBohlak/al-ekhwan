import React from "react";
import styled from "styled-components";
import { contactInfo } from "../../assets/data/projects";
import { Container } from "../ui/container.styles";

const ContactSectionContainer = styled.section`
  padding: var(--p-section) 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
  color: #ff8c00;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 3px;
    background: linear-gradient(45deg, #ff8c00, #ff6600);
  }
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const ContactItem = styled.div`
  text-align: center;
  padding: 2rem;
  background: linear-gradient(
    135deg,
    rgba(255, 140, 0, 0.1),
    rgba(0, 0, 0, 0.8)
  );
  border-radius: 15px;
  border: 1px solid rgba(255, 140, 0, 0.3);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(255, 140, 0, 0.2);
  }
`;

const ContactIcon = styled.div`
  font-size: 2.5rem;
  color: #ff8c00;
  margin-bottom: 1rem;
`;

const ContactTitle = styled.h3`
  color: #fff;
  margin-bottom: 0.5rem;
`;

const ContactDetails = styled.p`
  color: #ddd;
`;

const ContactSection = () => {
  return (
    <Container id="contact" className="fade-in section">
      <SectionTitle>تواصل معنا</SectionTitle>
      <ContactGrid>
        {contactInfo.map((item, index) => (
          <ContactItem key={index}>
            <ContactIcon>{item.icon}</ContactIcon>
            <ContactTitle>{item.title}</ContactTitle>
            <ContactDetails
              dangerouslySetInnerHTML={{ __html: item.details }}
            />
          </ContactItem>
        ))}
      </ContactGrid>
    </Container>
  );
};

export default ContactSection;
