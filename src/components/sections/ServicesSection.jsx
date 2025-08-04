import React from 'react';
import styled from 'styled-components';
import Card from '../ui/Card';
import { services } from '../../assets/data/projects';

const ServicesSectionContainer = styled.section`
  padding: 100px 2rem;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    padding: 60px 1rem;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
  color: #ff8c00;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 3px;
    background: linear-gradient(45deg, #ff8c00, #ff6600);
  }
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ServicesSection = () => {
    console.log(services)
  return (
    <ServicesSectionContainer id="services" className="fade-in section">
      <SectionTitle>خدماتنا</SectionTitle>
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
    </ServicesSectionContainer>
  );
};

export default ServicesSection;