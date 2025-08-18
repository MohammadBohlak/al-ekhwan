// src/components/ui/ProjectCard.jsx
import React, { useState } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Modal from "./Modal";
import { SubTitle, Text } from "../../common/texts";

const Card = styled.div`
  background: #fafafa;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
`;

const Cover = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const Info = styled.div`
  padding: 15px;
  flex-grow: 1;
`;

const Title = styled.h3`
  margin: 0 0 8px;
  font-size: 1.25rem;
`;

const Meta = styled.div`
  font-size: 0.9rem;
  color: #555;
  margin-bottom: 12px;

  span {
    display: block;
  }
`;

const Button = styled.button`
  background: #ff8c00;
  color: #fff;
  border: none;
  padding: 10px 16px;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background: #e07b00;
  }
`;

export default function ProjectCard({ project }) {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Card>
        <Cover
          src={`https://jaberissa.pythonanywhere.com${project.cover_image}`}
          alt={project.title}
        />
        <Info>
          <Text>{project.title}</Text>
          <Meta>
            <span>الموقع: {project.location}</span>
            <span>المساحة: {project.area} م²</span>
            <span>النوع: {project.project_type}</span>
          </Meta>
          <Button onClick={() => setModalOpen(true)}>عرض التفاصيل</Button>
        </Info>
      </Card>

      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
        <h2>{project.title}</h2>
        <p>{project.short_description}</p>
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          pagination={{ clickable: true }}
        >
          {project.images.map((img, idx) => (
            <SwiperSlide key={idx}>
              <img
                src={`https://jaberissa.pythonanywhere.com${img.image}`}
                alt={`${project.title} - صورة ${idx + 1}`}
                style={{ width: "100%", borderRadius: "4px" }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Modal>
    </>
  );
}
