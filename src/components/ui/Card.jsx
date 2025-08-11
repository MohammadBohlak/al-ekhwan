import React from "react";
import styled from "styled-components";
import { SubTitle, Text } from "../common/texts";
import { motion } from "motion/react";

const ServiceIcon = styled(motion.div)`
  font-size: 2.5rem;
  width: 80px;
  height: 80px;
  /* color: #ff8c00; */

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
const StyledCard = styled(motion.div)`
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
      color: #fff !important;
    }
  }
`;
const Card = ({ icon, title, description, children, ...props }) => {
  return (
    <StyledCard
      {...props}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2, ease: "linear" }}
      viewport={{ once: true }}
    >
      {icon && (
        <ServiceIcon
          initial={{ opacity: 1, scale: 1, color: "#000" }}
          whileInView={{ opacity: 1, scale: 1, color: "#ff8c00" }}
          transition={{ duration: 0.5, delay: 0.3, ease: "linear" }}
          // viewport={{ once: true }}
        >
          {icon}
        </ServiceIcon>
      )}
      {title && <SubTitle>{title}</SubTitle>}
      {description && <Text>{description}</Text>}
      {children}
    </StyledCard>
  );
};

export default Card;
