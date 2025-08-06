import React from "react";
import styled from "styled-components";
import { SubTitle, Text } from "../common/texts";

const ServiceIcon = styled.div`
  font-size: 2.5rem;
  color: #ff8c00;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin: auto;
  background-color: #f5f5f5;
  margin-bottom: 10px;
  transition: all 0.3s;
  /* text-align: center; */
  display: flex;
  justify-content: center;
  align-items: center;
  /* margin-left: auto;
  margin-right: auto; */
`;
const StyledCard = styled.div`
  text-align: center;
  background-color: #fff;
  padding: 2rem;
  border-radius: 20px;
  border: 1px solid rgba(255, 140, 0, 0.3);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  row-gap: 15px;
  box-shadow: var(--card-shadow);
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 140, 0, 0.2),
      transparent
    );
    transition: left 0.5s ease;
    z-index: -1;
    display: none;
  }

  &:hover {
    ${ServiceIcon} {
      background-color: var(--primary);
      color: #fff;
    }
  }
`;
const Card = ({ icon, title, description, children, ...props }) => {
  return (
    <StyledCard {...props}>
      {icon && <ServiceIcon>{icon}</ServiceIcon>}
      {title && <SubTitle>{title}</SubTitle>}
      {description && <Text>{description}</Text>}
      {children}
    </StyledCard>
  );
};

export default Card;
