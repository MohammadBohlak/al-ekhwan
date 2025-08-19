// src/components/ui/Modal.jsx
import React, { useContext } from "react";
import styled from "styled-components";
import { motion } from "motion/react";
import { LightText, SubTitle, Text } from "../../common/texts";
import { StlyedSwiper } from "./ProjectsSection";
import { Pagination } from "swiper/modules";
import { SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { DataContext } from "../../../App";
// ستايلات نافذة العرض المنبثقة
const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1001;
`;

const ModalContent = styled(motion.div)`
  background: #fff;
  width: 90%;
  max-width: 800px;
  /* height: clamp(80vh, 80vh, 100vh); */
  border-radius: 8px;
  overflow: hidden;
  padding: 5px 10px;
  /* padding-bottom: 40px; */
  text-align: center;
  display: flex;
  flex-direction: column;
  /* > * :not(.no-margin) {
    margin-top: 10px;
  } */
`;

const CloseButton = styled.button`
  background: transparent;
  border: none;
  font-size: 1.5rem;
  display: block;
  text-align: start;
  /* position: absolute; */
  /* top: 15px; */
  /* right: 20px; */
  cursor: pointer;
`;
const ProjectImage = styled.img`
  width: 100%;
  max-height: 300px;
  height: 300px;
  @media screen {
  }
  object-fit: cover;
`;
const SwiperContainer = styled.div`
  /* background-color: red; */
  position: relative;
  &::after {
    position: absolute;
    content: "";
    width: 5px;
    /* height: 310px; */
    height: 100%;

    top: 50%;
    right: 50%;
    transform: translate(50%, -50%);
    background-color: white;
    z-index: 1;
    @media (max-width: 768px) {
      display: none;
    }
  }
  .swiper {
    padding-top: 15px;
  }
`;
export default function Modal({ isOpen, onClose, selectedProject, children }) {
  if (!isOpen) return null;

  const { url } = useContext(DataContext);

  return (
    <Overlay onClick={onClose}>
      <ModalContent
        onClick={(e) => e.stopPropagation()}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <CloseButton onClick={onClose}>&times;</CloseButton>
        {/* {children} */}
        <SubTitle style={{ padding: "7px 0" }}>
          {selectedProject.title}
        </SubTitle>
        <Text style={{ padding: "7px 0" }}>
          {selectedProject.short_description}
        </Text>
        <div
          style={{
            display: "flex",
            gap: "20px",
            justifyContent: "center",
            padding: "10px 0",
            flexWrap: "wrap",
          }}
        >
          <LightText>المساحة : {selectedProject.area}</LightText>
          <LightText>الموقع : {selectedProject.location}</LightText>
        </div>
        <SwiperContainer>
          <StlyedSwiper
            modules={[Pagination]}
            pagination={{ clickable: true }}
            breakpoints={{
              // 1100: {
              //   slidesPerView: 3,
              //   spaceBetween: 15,
              // },
              768: {
                slidesPerView: 2,
                spaceBetween: 1,
              },
              0: {
                slidesPerView: 1,
                spaceBetween: 0,
              },
            }}
          >
            {selectedProject.images.map((img, idx) => (
              <SwiperSlide key={idx}>
                <ProjectImage
                  src={`${url + img.image}`}
                  alt={`{title} - صورة ${idx + 1}`}
                  style={{ width: "100%", borderRadius: "4px" }}
                />
              </SwiperSlide>
            ))}
          </StlyedSwiper>
        </SwiperContainer>
      </ModalContent>
    </Overlay>
  );
}
