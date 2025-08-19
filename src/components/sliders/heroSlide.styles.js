import { motion } from "motion/react";
import styled from "styled-components";
import { Swiper } from "swiper/react";

export const HeroSection = styled.section`
  height: calc(100vh - var(--h-navbar));
  /* min-height: 50vh; */
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  overflow: hidden;
  /* margin-bottom: var(--p-section); */
  margin-bottom: var(--p-section);
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.2);
    z-index: -1;
  }
  @media (max-width: 768px) {
    /* margin-bottom: 0; */
    height: 50vh;
  }
`;

export const StyledSwiper = styled(Swiper)`
  width: 100%;
  height: 100%;
  direction: ltr;
  .swiper-wrapper {
    position: relative;
    &::after {
      position: absolute;
      content: "";
      width: 100%;
      height: 100%;
      z-index: 10;
      background-color: rgba(0, 0, 0, 0.4);
    }
  }
`;

export const HeroBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -2;
`;
export const HeroForeground = styled(motion.div)`
  @keyframes dropOverlay {
    0% {
      transform: translateY(-100%);
    }
    20% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(100%);
    }
    100% {
      transform: translateY(100%);
    }
  }
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
`;

export const BackgroundSlide = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
`;

export const ProjectIndicator = styled(motion.div)`
  position: absolute;
  top: 30%;
  right: 20%;
  overflow: hidden;
  /* transform: translateX(50%); */
  text-align: start;
  z-index: 3;
  /* background: rgba(0, 0, 0, 0.5); */
  padding: 1rem 10px;
  /* border-radius: 10px; */
  /* max-width: 90%; */
  width: 300px;
  height: 60px;
  border-right: 5px solid var(--primary);
  box-sizing: border-box;
`;

export const ProjectName = styled(motion.div)`
  font-size: var(--normal-text);
  color: rgba(255, 255, 255, 0.95);
  text-shadow: 2px 2px 15px rgba(0, 0, 0, 0.8);
`;
