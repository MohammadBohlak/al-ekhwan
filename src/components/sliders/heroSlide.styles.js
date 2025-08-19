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
  bottom: 30px;
  /* right: 20px; */
  right: 50%;
  overflow: hidden;
  transform: translateX(50%);
  text-align: start;
  z-index: 3;
  background: rgba(255, 255, 255, 0.1);

  padding: 1rem 10px;
  border-radius: 10px;
  max-width: 400px;
  width: 400px;
  /* max-width: 500px; */
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-right: 5px solid var(--primary);
  border-left: 5px solid var(--primary);
  box-sizing: border-box;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 550px) {
    width: 300px;
  }
`;

export const ProjectName = styled(motion.div)`
  font-size: var(--small-text);
  color: rgba(255, 255, 255, 0.95);
  text-shadow: 2px 2px 15px rgba(0, 0, 0, 0.8);
  @media (max-width: 550px) {
    font-size: 15px;
  }
`;
