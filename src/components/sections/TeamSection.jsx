import React from "react";
import styled from "styled-components";
import Card from "../ui/Card";
import { teamMembers } from "../../assets/data/projects";
import { Container } from "../ui/container.styles";
import { MainTitle, SubTitle, Text } from "../common/texts";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { sectionAnimation, titleAnimation } from "../../animations/animations";
import { motion } from "motion/react";

const StlyedSwiper = styled(Swiper)`
  .swiper-pagination-bullet {
    background-color: #ff8c00;
  }
  padding: 50px 0;
  direction: ltr;
  .swiper-slide {
    direction: rtl;
    /* width: 100% !important; */
    /* margin: 0 !important; */
    @media (max-width: 768px) {
      text-align: center;
    }
  }
`;

const TeamImage = styled.img`
  width: 100%;
  border-radius: 15px;
  margin-bottom: 1rem;
`;

const TeamSection = () => {
  return (
    <Container
      id="team"
      // className="fade-in section"
    >
      <MainTitle {...titleAnimation}>فريق العمل</MainTitle>
      <motion.div {...sectionAnimation}>
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
          {teamMembers.map((member, index) => (
            <SwiperSlide key={index}>
              <Card key={index}>
                <TeamImage
                  style={{ color: "#000" }}
                  src={member.image}
                  alt={member.name}
                />
                <SubTitle>{member.name}</SubTitle>
                <Text>{member.position}</Text>
              </Card>
            </SwiperSlide>
          ))}
        </StlyedSwiper>
      </motion.div>
    </Container>
  );
};

export default TeamSection;
