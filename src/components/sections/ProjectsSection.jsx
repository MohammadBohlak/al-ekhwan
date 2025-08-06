import React from "react";
import styled from "styled-components";
import ProjectCard from "../ui/ProjectCard";
import { featuredProjects } from "../../assets/data/projects";
import { Container } from "../ui/container.styles";
import { MainTitle } from "../common/texts";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

// استيراد ملفات CSS الخاصة بـ Swiper
import "swiper/css";
import "swiper/css/pagination";

const StlyedSwiper = styled(Swiper)`
  .swiper-pagination-bullet {
    background-color: #ff8c00;
  }
  padding: 50px 0;
  direction: ltr;
  .swiper-slide {
    /* width: 100% !important; */
    /* margin: 0 !important; */
  }
`;

const ProjectsSection = () => {
  return (
    <Container id="projects" className="fade-in">
      <MainTitle>مشاريعنا المختارة</MainTitle>

      {/* إعداد Swiper */}
      <StlyedSwiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: true, // تعطيل التنقل التلقائي عند تفاعل المستخدم
        }}
        breakpoints={{
          992: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
        }}
      >
        {featuredProjects.map((project, index) => (
          <SwiperSlide key={index}>
            <ProjectCard
              icon={project.icon}
              title={project.title}
              description={project.description}
              details={project.details}
            />
          </SwiperSlide>
        ))}
      </StlyedSwiper>
    </Container>
  );
};

export default ProjectsSection;
