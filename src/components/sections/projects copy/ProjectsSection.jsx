// src/components/sections/ProjectsSection.jsx
import React from "react";
import styled from "styled-components";
import ProjectCard from "./ProjectCard";
import { featuredProjects } from "../../../assets/data/projects";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import {
  sectionAnimation,
  titleAnimation,
} from "../../../animations/animations";
import { motion } from "motion/react";
import { MainTitle } from "../../common/texts";
import { Container } from "../../ui/container.styles";

const StyledSwiper = styled(Swiper)`
  .swiper-pagination-bullet {
    background-color: #ff8c00;
  }
  padding: 50px 0;
  direction: ltr;
  .swiper-slide {
    direction: rtl;
  }
`;

export default function ProjectsSection() {
  return (
    <Container id="projects">
      <MainTitle {...titleAnimation}>مشاريعنا المختارة</MainTitle>

      <motion.div {...sectionAnimation}>
        <StyledSwiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: true }}
          breakpoints={{
            992: { slidesPerView: 3, spaceBetween: 15 },
            768: { slidesPerView: 2, spaceBetween: 15 },
            0: { slidesPerView: 1, spaceBetween: 10 },
          }}
        >
          {featuredProjects.map((project) => (
            <SwiperSlide key={project.id}>
              <ProjectCard project={project} />
            </SwiperSlide>
          ))}
        </StyledSwiper>
      </motion.div>
    </Container>
  );
}
