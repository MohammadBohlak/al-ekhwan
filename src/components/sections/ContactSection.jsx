import React from "react";
import styled from "styled-components";
import { contactInfo } from "../../assets/data/projects";
import { Container } from "../ui/container.styles";
import { LigntText, MainTitle, SubTitle } from "../common/texts";

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const ContactIcon = styled.div`
  font-size: 2.5rem;
  color: var(--primary);
  margin-bottom: 1rem;
`;
const ContactDetails = styled(LigntText)`
  color: #ddd;
`;
const ContactItem = styled.div`
  /* text-align: center; */
  padding: 2rem;
  /* background: linear-gradient(
    135deg,
    rgba(255, 140, 0, 0.1),
    rgba(0, 0, 0, 0.8)
  ); */
  border-radius: 15px;
  /* border: 1px solid rgba(255, 140, 0, 0.3); */
  transition: all 0.3s ease;

  ${ContactIcon} {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    font-size: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s;
  }
  &:nth-child(odd) {
    background-color: black;
    ${ContactIcon} {
      background-color: #4a4a4a;
    }
  }
  &:nth-child(even) {
    background-color: white;
    ${ContactIcon} {
      background-color: #f5f5f5;
      color: var(--primary);
    }
    ${ContactDetails} {
      color: #666;
    }
  }
  &:hover ${ContactIcon} {
    background-color: var(--primary);
    color: white;
  }
  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--card-shadow);
  }
`;

const ContactSection = () => {
  return (
    <Container id="contact" className="fade-in section">
      <MainTitle>تواصل معنا</MainTitle>
      <ContactGrid>
        {contactInfo.map((item, index) => (
          <ContactItem key={index}>
            <ContactIcon>{item.icon}</ContactIcon>
            <SubTitle>{item.title}</SubTitle>
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
