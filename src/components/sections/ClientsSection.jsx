import React from 'react';
import styled from 'styled-components';
import { clients } from '../../assets/data/projects';

const ClientsSectionContainer = styled.section`
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

const ClientsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 2rem;
  justify-items: center;
  align-items: center;
  margin-top: 2rem;
`;

const ClientLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  
  img {
    max-width: 100px;
    height: auto;
    opacity: 0.8;
    transition: opacity 0.3s ease, transform 0.3s ease;
  }
  
  &:hover img {
    opacity: 1;
    transform: scale(1.05);
  }
`;

const ClientsSection = () => {
  return (
    <ClientsSectionContainer id="clients" className="fade-in section">
      <SectionTitle>عملاؤنا المميزون</SectionTitle>
      <ClientsGrid>
        {clients.map((client, index) => (
          <ClientLink 
            key={index}
            href={client.url} 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <img src={client.logo} alt={`Client ${index + 1}`} />
          </ClientLink>
        ))}
      </ClientsGrid>
    </ClientsSectionContainer>
  );
};

export default ClientsSection;