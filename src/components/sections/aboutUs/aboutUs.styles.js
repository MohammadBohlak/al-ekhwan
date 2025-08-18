import { motion } from "motion/react";
import styled from "styled-components";
import { Container } from "../../ui/container.styles";
import img1 from "../../../assets/images/aboutSection/1.jpg";
import img2 from "../../../assets/images/aboutSection/2.jpg";
import img3 from "../../../assets/images/aboutSection/3.jpg";
import img4 from "../../../assets/images/aboutSection/4.jpg";
export const Header = styled.header`
  text-align: center;
`;

export const CountersContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  margin: 50px 0;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Counter = styled(motion.div)`
  background-color: #ffffff;
  border: 1px solid var(--primary);
  padding: 30px;
  margin: 0 20px;
  text-align: center;
  width: 50%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 50px 0 50px 0;
`;

export const CounterNumber = styled.div`
  font-size: 60px;
  font-weight: 500;
  color: var(--primary);
  display: flex;
  /* align-items: baseline; */
  justify-content: center;
  align-items: center;
  font-family: sans-serif;
`;
export const StyledAboutUs = styled(Container)`
  /*  */
`;

export const AboutContenet = styled(motion.div)`
  display: grid;
  max-height: 1000px;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 500px;
    max-height: initial;
    justify-content: center;
    gap: 50px;
  }
  @media (max-width: 768px) {
    text-align-last: center;
  }
`;
export const AboutRight = styled(motion.div)`
  .description {
    text-align: justify;
  }
`;
export const AboutLeft = styled(motion.div)`
  display: flex;
  flex-direction: column;
  /* background-color: gray; */
  /* align-items: start; */
  width: 100%;
  position: relative;
  overflow: hidden;

  padding: 30px 0;
  /* padding-top: 20px; */
  scrollbar-width: none;
  @media (max-width: 768px) {
    /* left: 4%; */
  }
`;
export const Images = styled(motion.div)`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 50%;
  transform: scaleX(1.15);
`;

export const Image = styled(motion.div)`
  width: 50%;
  height: 100%;
  position: relative;
  /* background-color: black; */
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  &.i1 {
    clip-path: polygon(30% 0, 100% 0, 100% 100%, 0 100%);
    left: -7%;
    /* background-color: black; */
    background-image: url(${img1});
  }
  &.i2 {
    clip-path: polygon(0 0%, 100% 0, 70% 100%, 0% 100%);
    left: 8%;
    /* background-color: blue; */
    background-image: url(${img2});
    top: -25px;
  }
  &.i3 {
    left: -7%;
    top: 35px;
    /* background-color: pink; */
    clip-path: polygon(30% 0, 100% 0, 100% 100%, 0 100%);
    background-image: url(${img3});
  }
  &.i4 {
    clip-path: polygon(0 0%, 100% 0, 70% 100%, 0% 100%);
    left: 8%;
    top: 10px;
    /* background-color: gray; */
    background-image: url(${img4});
  }
`;
