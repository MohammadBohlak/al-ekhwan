import { BsWhatsapp } from "react-icons/bs";
import React from "react";
import styled from "styled-components";
import { motion } from "motion/react";
const StyledWhatsappIcon = styled(motion.a)`
  position: fixed;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  bottom: 20px;
  right: 20px;
  border-radius: 50%;
  background-color: #25d366;
  color: white;
  z-index: 1010;
  svg {
    font-size: 30px;
  }
`;

const WhatsappIcon = () => {
  return (
    <StyledWhatsappIcon
      href="https://wa.me/963962447416"
      target="_blank"
      initial={{ x: 100 }}
      animate={{ x: 0 }}
      transition={{ delay: 1, duration: 1, type: "spring", stiffness: 100 }}
    >
      <BsWhatsapp />
    </StyledWhatsappIcon>
  );
};

export default WhatsappIcon;
