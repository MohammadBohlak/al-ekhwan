// src/Ourvision.js
import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { FaEye } from "react-icons/fa";
import { MainTitle, SubTitle } from "../common/texts";
import { Container } from "../ui/container.styles";
// import img from "../../assets/images/ourvision/tech.png";
import img from "../../assets/images/ourvision/technology.png";
import { sectionAnimation, titleAnimation } from "../../animations/animations";
import { motion } from "motion/react";
const VisionSection = styled(Container)`
  background-color: #ff8c00;
  /* padding: 80px 0; */
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

const VisionHeader = styled.div`
  text-align: center;
  margin-bottom: 60px;
`;

const VisionContent = styled.div`
  display: flex;
  align-items: center;
  /* gap: 100px; */
  width: 100%;
  justify-content: space-between;
  flex-wrap: wrap;
  flex-direction: row-reverse;
  @media (max-width: 992px) {
    flex-direction: column;
  }
`;

const VisionImage = styled(motion.div)`
  flex: 1;
  /* min-width: 300px; */
  position: relative;
`;

const ImageFrame = styled.div`
  /* position: relative;
  border: 8px solid rgba(255, 255, 255, 0.2);
  border-radius: 5px;
  overflow: hidden;
  transform: rotate(-2deg);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;

  &:hover {
    transform: rotate(0deg) scale(1.03);
  } */

  img {
    max-width: 100%;
    display: block;
    width: 100%;
    /* max-height: 100%; */
    mix-blend-mode: lighten; /* أو screen */
  }
`;

const Shape1 = styled.div`
  position: absolute;
  background-color: rgba(255, 255, 255, 0.1);
  z-index: -1;
  width: 80px;
  height: 80px;
  top: -20px;
  left: -20px;
  transform: rotate(45deg);
`;

const Shape2 = styled.div`
  position: absolute;
  background-color: rgba(255, 255, 255, 0.1);
  z-index: -1;
  width: 60px;
  height: 60px;
  bottom: 40px;
  right: -30px;
  border-radius: 50%;
`;

const VisionText = styled.div`
  flex: 1;
  min-width: 300px;
  color: white;
  background-color: rgba(255, 255, 255, 0.1);
  padding: 40px;
  border-radius: 10px;
  position: relative;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  text-align: justify;
  display: flex;
  flex-direction: column;
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

  @media (max-width: 992px) {
    padding: 25px;
    /* text-align: center; */
    text-align-last: center;
  }
`;

const TextTitle = styled(motion.h3)`
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

  @media (max-width: 992px) {
    font-size: 1.5rem;
    /* text-align: center; */
    align-self: center;
  }
`;

const Paragraph = styled(motion.div)`
  font-size: var(--small-text);
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

const Highlight = styled.span`
  font-weight: 700;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.2);
  padding: 2px 8px;
  border-radius: 4px;
  display: inline-block;
`;

const Ourvision = () => (
  <>
    {/* <GlobalStyle /> */}
    <VisionSection
      initial={{ backgroundColor: "transparent" }}
      whileInView={{ backgroundColor: "#ff8c00" }}
      transition={{ duration: 1 }}
      // viewport={{ once: true, amount: 0.5 }}
    >
      {/* <Container> */}
      <VisionHeader>
        <MainTitle $color="#ffffff" {...titleAnimation}>
          رؤيتنا
        </MainTitle>
      </VisionHeader>

      <VisionContent>
        <VisionImage>
          <ImageFrame>
            <img
              // src="https://sfile.chatglm.cn/images-ppt/20b17a93db09.jpg"
              src={img}
              alt="موقع بناء احترافي"
            />
          </ImageFrame>
          <Shape1 />
          <Shape2 />
        </VisionImage>

        <VisionText>
          <TextTitle {...sectionAnimation}>
            <FaEye /> رؤيتنا المستقبلية
          </TextTitle>
          <Paragraph {...sectionAnimation}>
            نطمح لأن نكون <Highlight>الشركة الرائدة</Highlight> في مجال البناء
            والتشييد على مستوى المنطقة.
          </Paragraph>
          <Paragraph {...sectionAnimation}>
            نسعى لتحقيق التميز من خلال <Highlight>الابتكار المستمر</Highlight>{" "}
            وتطبيق أحدث التقنيات في جميع مشاريعنا.
          </Paragraph>
          <Paragraph {...sectionAnimation}>
            نلتزم بأعلى معايير <Highlight>الجودة والسلامة</Highlight> واستخدام
            مواد صديقة للبيئة لضمان استدامة مشاريعنا.
          </Paragraph>
          <Paragraph {...sectionAnimation}>
            رؤيتنا تتمثل في بناء مجتمعات أكثر تطوراً وتحسين جودة الحياة من خلال
            مشاريع عمرانية متميزة.
          </Paragraph>
        </VisionText>
      </VisionContent>
      {/* </Container> */}
    </VisionSection>
  </>
);

export default Ourvision;
