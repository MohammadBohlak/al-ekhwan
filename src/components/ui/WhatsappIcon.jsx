import { BsWhatsapp } from "react-icons/bs";
import React from "react";
import styled from "styled-components";
const StyledWhatsappIcon = styled.a`
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
    <StyledWhatsappIcon href="https://wa.me/963952347334">
      <BsWhatsapp />
    </StyledWhatsappIcon>
  );
};

export default WhatsappIcon;
