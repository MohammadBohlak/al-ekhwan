import React, { useContext, useState } from "react";
import styled from "styled-components";
import { LightText, SubTitle, Text } from "../../common/texts";
import { TbListDetails } from "react-icons/tb";
import { Swiper, SwiperSlide } from "swiper/react";
import Modal from "./Modal";
import { DataContext } from "../../../App";

const StyledProjectCard = styled.div`
  /* background: rgba(255, 140, 0, 0.1); */
  /* padding: 15px; */
  box-shadow: var(--card-shadow);
  border-radius: 15px;
  overflow: hidden;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 140, 0, 0.3);
  /* position: relative; */
  display: flex;
  min-height: 580px;
  flex-direction: column;
  &:hover {
    /* transform: scale(1.05); */
    /* box-shadow: 0 20px 40px rgba(255, 140, 0, 0.1); */
  }
  .btn-detail {
    display: flex;
    justify-content: end;
    padding-left: 15px;
    padding-bottom: 15px;
  }
  @media (max-width: 768px) {
    min-height: 450px;
    .btn-detail {
      justify-content: center;
    }
  }
`;

const ProjectImage = styled.div`
  height: 250px;
  width: 100%;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center center;
  border-bottom: 2px solid var(--primary);
`;

const ProjectInfo = styled.div`
  padding: 15px;
  display: flex;
  flex-direction: column;
  row-gap: 7px;
  /* justify-content: space-between; */
  flex: 1;
  .desc {
    display: -webkit-box; /* تفعيل flexbox العمودي */
    -webkit-box-orient: vertical; /* تحديد الاتجاه عمودي */
    -webkit-line-clamp: 3; /* عدد الأسطر التي تريد عرضها */
    overflow: hidden; /* إخفاء النص الزائد */
    text-overflow: ellipsis; /* إظهار النقاط الثلاث */
  }
`;
const ButtonDetail = styled.button`
  width: 150px;
  display: flex;

  align-items: center;
  gap: 5px;
  justify-content: center;
  padding: 1rem;
  background-color: #ff8c00;
  color: #fff;
  border: 1px solid var(--primary);
  border-radius: 8px;
  cursor: pointer;
  font-size: var(--min-text);

  transition: all 0.3s ease;
  &:hover {
    background-color: #ffffff;
    color: var(--primary);
  }
`;
const ProjectCard = ({ handleShowModal, project, ...props }) => {
  const { url } = useContext(DataContext);
  return (
    <>
      <StyledProjectCard {...props}>
        <ProjectImage
          style={{ backgroundImage: `url(${url + project.cover_image})` }}
        ></ProjectImage>
        <ProjectInfo>
          <SubTitle>{project.title}</SubTitle>
          <Text className="desc">{project.short_description}</Text>
          <LightText>النوع : {project.project_type}</LightText>
          <LightText>المساحة : {project.area}</LightText>
          <LightText>الموقع : {project.location}</LightText>
        </ProjectInfo>
        <div className="btn-detail">
          <ButtonDetail onClick={() => handleShowModal(project)}>
            {" "}
            <TbListDetails />
            عرض التفاصيل
          </ButtonDetail>
        </div>
      </StyledProjectCard>
    </>
  );
};

export default ProjectCard;
