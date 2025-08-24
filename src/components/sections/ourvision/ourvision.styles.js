import { motion } from "motion/react";
import { Container } from "../../ui/container.styles";
import styled from "styled-components";

export const VisionSection = styled(Container)`
  background-color: #ff8c00;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: -50px;
    left: -50px;
    width: 200px;
    height: 200px;
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    z-index: 1;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -70px;
    right: -70px;
    width: 250px;
    height: 250px;
    background-color: rgba(255, 255, 255, 0.08);
    border-radius: 50%;
    z-index: 1;
  }
`;

export const VisionHeader = styled.div`
  text-align: center;
  margin-bottom: 60px;
`;

export const VisionContent = styled.div`
  display: flex;
  align-items: stretch;
  gap: 50px;
  width: 100%;
  justify-content: space-between;
  flex-wrap: wrap;
  flex-direction: row-reverse;
  @media (max-width: 1200px) {
    flex-direction: column;
  }
`;

export const VisionImage = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;

  position: relative;
  @media (max-width: 1200px) {
    width: 50%;
    margin: auto;
  }
  @media (max-width: 768px) {
    width: 90%;
  }
`;

export const ImageFrame = styled.div`
  @keyframes rot {
    0% {
      rotate: 0deg;
    }
    100% {
      rotate: 360deg;
    }
  }
  mix-blend-mode: lighten; /* أو screen */
  display: flex;
  justify-content: center;
  img {
    display: block;
    border-radius: 50%;
    max-width: 100%;
    max-height: 100%;
    mix-blend-mode: lighten; /* أو screen */
    animation: rot 60s linear infinite;
  }
`;

export const Shape1 = styled.div`
  position: absolute;
  background-color: rgba(255, 255, 255, 0.1);
  z-index: -1;
  width: 80px;
  height: 80px;
  top: -20px;
  left: -20px;
  transform: rotate(45deg);
`;

export const Shape2 = styled.div`
  position: absolute;
  background-color: rgba(255, 255, 255, 0.1);
  z-index: -1;
  width: 60px;
  height: 60px;
  bottom: 40px;
  right: -30px;
  border-radius: 50%;
`;

export const VisionText = styled.div`
  flex: 1;
  color: white;
  background-color: rgba(255, 255, 255, 0.1);
  padding: 40px;
  border-radius: 10px;
  position: relative;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  text-align: justify;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 5px;
    height: 100%;
    background-color: white;
    border-radius: 5px 0 0 5px;
  }

  @media (max-width: 1200px) {
    padding: 25px;
    text-align-last: center;
  }
`;

export const TextTitle = styled(motion.h3)`
  font-size: 1.8rem;
  margin-bottom: 25px;
  font-weight: 700;
  position: relative;
  padding-right: 15px;

  svg {
    position: absolute;
    right: -15px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 1.5rem;
    opacity: 0.8;
  }

  @media (max-width: 1200px) {
    font-size: 1.5rem;
    align-self: center;
  }
`;

export const Paragraph = styled(motion.div)`
  font-size: var(--normal-text);
  line-height: 1.9;
  margin-bottom: 20px;
  position: relative;
  padding-right: 25px;

  &::before {
    content: "";
    position: absolute;
    right: 0;
    top: 20px;
    /* font-size: 1.5rem; */
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background-color: white;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 10px;
  }
`;

export const Highlight = styled.span`
  font-weight: 700;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.2);
  padding: 2px 8px;
  border-radius: 4px;
  display: inline-block;
`;
