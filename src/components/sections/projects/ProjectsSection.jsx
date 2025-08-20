import React, { useContext, useState, useRef, useEffect } from "react";
import styled from "styled-components";
import ProjectCard from "./ProjectCard";
import { Container } from "../../ui/container.styles";
import { MainTitle, SubTitle, Text } from "../../common/texts";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

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
  const { projects, base_url: url } = useContext(DataContext);

  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  // مراجع للتحكم في الـ Swiper ولمراقبة ظهور القسم
  const swiperRef = useRef(null);
  const sectionRef = useRef(null);

  // استخدم IntersectionObserver لبدء/إيقاف الـ autoplay
  useEffect(() => {
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const swiper = swiperRef.current;
        if (!swiper?.autoplay) return;

        if (entry.isIntersecting) {
          swiper.autoplay.start();
        } else {
          swiper.autoplay.stop();
        }
      },
      {
        root: null,
        threshold: 0.4,
      }
    );

    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleShowModal = (project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  return (
    <Container id="projects" ref={sectionRef}>
      <MainTitle {...titleAnimation}>مشاريعنا المختارة</MainTitle>

      <motion.div {...sectionAnimation}>
        <StlyedSwiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: true,
            // pauseOnMouseEnter: true,
          }}
          speed={1000}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
            // أوقف autoplay منذ البداية حتى يظهر القسم
            swiper.autoplay?.stop();
          }}
          breakpoints={{
            1200: {
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
          {projects.map((project, idx) => (
            <SwiperSlide key={idx}>
              <ProjectCard
                handleShowModal={handleShowModal}
                project={project}
              />
            </SwiperSlide>
          ))}
        </StlyedSwiper>
      </motion.div>

      {selectedProject && (
        <Modal
          isOpen={isModalOpen}
          onClose={() => setModalOpen(false)}
          selectedProject={selectedProject}
        >
          <SubTitle>{selectedProject.title}</SubTitle>
          <Text>{selectedProject.short_description}</Text>

          <StlyedSwiper
            modules={[Pagination]}
            pagination={{ clickable: true }}
            spaceBetween={10}
            slidesPerView={2}
          >
            {selectedProject.images.map((img, index) => (
              <SwiperSlide key={index}>
                <img
                  src={`https://jaberissa.pythonanywhere.com/${img.image}`}
                  alt={`${selectedProject.title} - صورة ${index + 1}`}
                  style={{ width: "100%", borderRadius: "4px" }}
                />
              </SwiperSlide>
            ))}
          </StlyedSwiper>
        </Modal>
      )}
    </Container>
  );
};

export default ProjectsSection;
