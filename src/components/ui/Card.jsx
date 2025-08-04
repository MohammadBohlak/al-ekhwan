import React from 'react';
import styled from 'styled-components';

const StyledCard = styled.div`
  background: linear-gradient(135deg, rgba(255, 140, 0, 0.1), rgba(0, 0, 0, 0.8));
  padding: 2rem;
  border-radius: 20px;
  border: 1px solid rgba(255, 140, 0, 0.3);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 140, 0, 0.2), transparent);
    transition: left 0.5s ease;
    z-index: -1;
    display: none;
  }
  
  &:hover::before {
    left: 100%;
  }
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(255, 140, 0, 0.2);
  }
`;

const ServiceIcon = styled.div`
  font-size: 3rem;
  color: #ff8c00;
  margin-bottom: 1rem;
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #fff;
`;

const CardDescription = styled.p`
  color: #ddd;
`;

const Card = ({ icon, title, description, children, ...props }) => {
  return (
    <StyledCard {...props}>
      {icon && <ServiceIcon>{icon}</ServiceIcon>}
      {title && <CardTitle>{title}</CardTitle>}
      {description && <CardDescription>{description}</CardDescription>}
      {children}
    </StyledCard>
  );
};

export default Card;