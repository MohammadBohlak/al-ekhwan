import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
// import { clients } from "../../assets/data/projects";
import { Container } from "../../ui/container.styles";
import { MainTitle, Text } from "../../common/texts";
import {
  sectionAnimation,
  titleAnimation,
} from "../../../animations/animations";
import { motion } from "motion/react";
import Marquee from "react-fast-marquee";
import { DataContext, url } from "../../../App";

const ClientsSectionContainer = styled(motion.section)`
  padding-bottom: 0px;
  margin: 0 auto;
  direction: ltr !important;
  position: relative;
`;

const ClientsSection = () => {
  const [repeatCount, setRepeatCount] = useState(3);
  const { clients } = useContext(DataContext);
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
    <>
      <Container style={{ paddingBottom: "20px" }} id="clients">
        <MainTitle {...titleAnimation}>عملاؤنا المميزون</MainTitle>
      </Container>

      <ClientsSectionContainer {...sectionAnimation}>
        <Marquee
          style={{ overflow: "hidden" }}
          speed={70}
          gradient={false}
          pauseOnHover={true}
        >
          {/* {repeatedClients.map((client, index) => (
            <img
              key={index}
              style={{ width: "130px", margin: "0 15px" }}
              src={`${url}${client.logo}`}
              alt={`Client ${index + 1}`}
            />
          ))} */}

          {repeatedClients.map((client, index) => (
            <motion.img
              key={index}
              style={{ width: "130px", margin: "0 15px" }}
              src={`${url}${client.logo}`}
              alt={`Client ${index + 1}`}
              initial={{ transform: "translateY(50px)", opacity: 0 }} // يبدأ من الأسفل وبشفافية 0
              whileInView={{ transform: "translateY(0px)", opacity: 1 }} // يتحرك لمكانه ويظهر
              transition={{
                duration: 0.6,
                delay: index * 0.1, // التأخير حسب الترتيب
                ease: "easeOut",
              }}
              viewport={{ once: true }} // يظهر مرة واحدة فقط
            />
          ))}
        </Marquee>
      </ClientsSectionContainer>
    </>
  );
};

export default ClientsSection;
