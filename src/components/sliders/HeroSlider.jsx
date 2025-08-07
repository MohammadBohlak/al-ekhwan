import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import { projects } from '../../assets/data/projects';
import { projects } from "../../assets/data/projects";

const HeroSection = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.2);
    z-index: -1;
  }
`;

const HeroBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -2;
`;

const BackgroundSlide = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
`;

const ProjectIndicator = styled.div`
  position: absolute;
  bottom: 30px;
  right: 30px;
  text-align: start;
  z-index: 3;
  background: rgba(0, 0, 0, 0.5);
  padding: 1rem 1.5rem;
  border-radius: 10px;
  border: 1px solid rgba(255, 140, 0, 0.3);
  max-width: 90%;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 1rem 1.5rem;
  }
`;

const ProjectName = styled.div`
  font-size: var(--normal-text);
  color: rgba(255, 255, 255, 0.95);
  text-shadow: 2px 2px 15px rgba(0, 0, 0, 0.8);

  @media (max-width: 768px) {
    /* font-size: 1rem; */
  }

  @media (max-width: 480px) {
    /* font-size: 1.5rem; */
  }
`;

const StyledSwiper = styled(Swiper)`
  width: 100%;
  height: 100%;
`;

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const swiperRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") {
        swiperRef.current?.slideNext();
      } else if (e.key === "ArrowRight") {
        swiperRef.current?.slidePrev();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleSlideChange = (swiper) => {
    // setCurrentSlide(swiper.activeIndex);
    setCurrentSlide((prev) => (prev + 1) % projects.length);
  };
  return (
    <HeroSection id="home">
      <HeroBackground>
        <StyledSwiper
          ref={swiperRef}
          modules={[Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          loop={true}
          onSlideChange={handleSlideChange}
          pagination={{
            el: ".swiper-pagination",
            clickable: true,
          }}
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <BackgroundSlide
                style={{ backgroundImage: `url(${project.image})` }}
              />
            </SwiperSlide>
          ))}
        </StyledSwiper>
      </HeroBackground>

      <ProjectIndicator>
        <ProjectName>{projects[currentSlide]?.name}</ProjectName>
      </ProjectIndicator>
    </HeroSection>
  );
};

export default HeroSlider;
