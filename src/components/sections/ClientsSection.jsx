import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { clients } from "../../assets/data/projects";
import { Container } from "../ui/container.styles";
import { MainTitle, Text } from "../common/texts";
import { sectionAnimation, titleAnimation } from "../../animations/animations";
import { motion } from "motion/react";
import Marquee from "react-fast-marquee";

const ClientsSectionContainer = styled(motion.section)`
  padding: var(--p-section) 2rem;
  padding-bottom: 0px;
  /* max-width: 1200px; */
  margin: 0 auto;
  direction: ltr !important;
  position: relative;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
  color: #ed9245;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 3px;
    background: linear-gradient(45deg, #ff8c00, #ff6600);
  }
`;
const Speed = styled.div`
  position: absolute;
  top: -50px;
  right: 20px;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const BtnSpeed = styled.button`
  background-color: #ff8c00;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  margin: 0 10px;
  font-size: 16px;
`;

const ClientsSection = () => {
  const [repeatCount, setRepeatCount] = useState(3);
  const [speed, setSpeed] = useState(200);
  useEffect(() => {
    const updateRepeatCount = () => {
      const screenWidth = window.innerWidth;
      const logoWidth = 130 + 30; // image width + margin
      const visibleCount = Math.ceil(screenWidth / logoWidth);
      setRepeatCount(visibleCount * 2); // مضاعفة العدد لتفادي الفراغ
    };

    updateRepeatCount();
    window.addEventListener("resize", updateRepeatCount);
    return () => window.removeEventListener("resize", updateRepeatCount);
  }, []);

  const repeatedClients = Array(repeatCount).fill(clients).flat();

  return (
    <Container id="clients">
      <MainTitle {...titleAnimation}>عملاؤنا المميزون</MainTitle>

      <ClientsSectionContainer {...sectionAnimation}>
        <Speed>
          <Text>{speed}</Text>
          <div>
            <BtnSpeed right="0" onClick={() => setSpeed(speed + 25)}>
              +
            </BtnSpeed>
            <BtnSpeed right="50px" onClick={() => setSpeed(speed - 25)}>
              -
            </BtnSpeed>
          </div>
        </Speed>
        <Marquee speed={speed} gradient={false} pauseOnHover={true}>
          {repeatedClients.map((client, index) => (
            <img
              key={index}
              style={{ width: "130px", margin: "0 15px" }}
              src={client.logo}
              alt={`Client ${index + 1}`}
            />
          ))}
        </Marquee>
      </ClientsSectionContainer>
    </Container>
  );
};

export default ClientsSection;
