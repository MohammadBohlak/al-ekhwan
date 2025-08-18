// src/components/ui/Modal.jsx
import React from "react";
import styled from "styled-components";
import { motion } from "motion/react";

// ستايلات نافذة العرض المنبثقة
const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

const ModalContent = styled(motion.div)`
  background: #fff;
  width: 90%;
  max-width: 800px;
  border-radius: 8px;
  overflow: hidden;
  padding: 20px;
`;

const CloseButton = styled.button`
  background: transparent;
  border: none;
  font-size: 1.5rem;
  position: absolute;
  top: 15px;
  right: 20px;
  cursor: pointer;
`;

export default function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <Overlay onClick={onClose}>
      <ModalContent
        onClick={(e) => e.stopPropagation()}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <CloseButton onClick={onClose}>&times;</CloseButton>
        {children}
      </ModalContent>
    </Overlay>
  );
}
