import React from "react";
import styled from "styled-components";
import Card from "../ui/Card";
import { services } from "../../assets/data/projects";
import { MainTitle } from "../common/texts";
import { Container } from "../ui/container.styles";

const ServicesSectionContainer = styled.section`
  padding: var(--p-section) 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  /* margin-top: 3rem; */

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ServicesSection = () => {
  console.log(services);
  return (
    <Container id="services" className="fade-in section">
      <MainTitle>خدماتنا</MainTitle>
      <ServicesGrid>
        {services.map((service, index) => (
          <Card
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}
      </ServicesGrid>
    </Container>
  );
};

export default ServicesSection;
