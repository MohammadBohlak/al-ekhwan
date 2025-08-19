import React, { useContext, useState } from "react";
import styled from "styled-components";
import ProjectCard from "./ProjectCard";
// import { featuredProjects } from "../../../assets/data/projects";
import { Container } from "../../ui/container.styles";
import { MainTitle, SubTitle, Text } from "../../common/texts";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

// استيراد ملفات CSS الخاصة بـ Swiper
import "swiper/css";
import "swiper/css/pagination";
import {
  sectionAnimation,
  titleAnimation,
} from "../../../animations/animations";
import { motion } from "motion/react";
import { DataContext } from "../../../App";
import Modal from "./Modal";

export const StlyedSwiper = styled(Swiper)`
  .swiper-pagination-bullet {
    background-color: #ff8c00;
  }
  padding: 50px 0;
  direction: ltr;
  .swiper-slide {
    direction: rtl;
    @media (max-width: 768px) {
      text-align: center;
    }
  }
`;

const ProjectsSection = () => {
  const data = useContext(DataContext);
  const { projects, base_url: url } = data;
  console.log(projects, url);
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const handleShowModal = (project) => {
    console.log(project);
    setModalOpen(true);
    setSelectedProject(project);
  };
  return (
    <Container
      id="projects"
      // className="fade-in"
    >
      <MainTitle {...titleAnimation}>مشاريعنا المختارة</MainTitle>

      {/* إعداد Swiper */}
      <motion.div {...sectionAnimation}>
        <StlyedSwiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: true, // تعطيل التنقل التلقائي عند تفاعل المستخدم
          }}
          breakpoints={{
            1100: {
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
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <ProjectCard
                title={project.title}
                description={project.short_description}
                image={url + project.cover_image}
                area={project.area}
                location={project.location}
                images={project.images}
                handleShowModal={handleShowModal}
                project={project}
              />
            </SwiperSlide>
          ))}
        </StlyedSwiper>
      </motion.div>
      {selectedProject && (
        <>
          <Modal
            selectedProject={selectedProject}
            isOpen={isModalOpen}
            onClose={() => setModalOpen(false)}
          >
            <SubTitle>{selectedProject.title}</SubTitle>
            <Text>{selectedProject.short_description}</Text>
            <StlyedSwiper
              modules={[Pagination]}
              pagination={{ clickable: true }}
              spaceBetween={10}
              slidesPerView={2}
            >
              {selectedProject.images.map((img, idx) => (
                <SwiperSlide key={idx}>
                  <img
                    src={`https://jaberissa.pythonanywhere.com/${img.image}`}
                    alt={`{title} - صورة ${idx + 1}`}
                    style={{ width: "100%", borderRadius: "4px" }}
                  />
                </SwiperSlide>
              ))}
            </StlyedSwiper>
          </Modal>
        </>
      )}
    </Container>
  );
};

export default ProjectsSection;
