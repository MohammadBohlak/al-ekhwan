import React, { useState, useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { projects } from "../../assets/data/projects";
import { motion } from "motion/react";

// إضافة انميشن للنص
const textAnimation = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

// إضافة انميشن للخلفية
const backgroundAnimation = keyframes`
  0% {
    transform: scale(1.1);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

const HeroSection = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  overflow: hidden;
  /* margin-bottom: var(--p-section); */
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

const BackgroundSlide = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  animation: ${backgroundAnimation} 1.5s ease-out forwards;
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
  backdrop-filter: blur(5px);
  transition: all 0.3s ease;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
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
  animation: ${textAnimation} 0.8s ease-out forwards;
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
  direction: ltr;
  .swiper-slide {
    opacity: 0;
    transition: opacity 1s ease;
  }
  .swiper-slide-active {
    opacity: 1;
  }
`;

const ProgressIndicator = styled.div`
  position: absolute;
  bottom: 30px;
  left: 30px;
  z-index: 3;
  display: flex;
  gap: 10px;
`;

const ProgressDot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.3);
  cursor: pointer;
  transition: all 0.3s ease;
  &.active {
    background-color: rgba(255, 140, 0, 0.8);
    transform: scale(1.2);
  }
`;

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const swiperRef = useRef(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [swiperInstance, setSwiperInstance] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!swiperInstance) return;

      if (e.key === "ArrowLeft") {
        swiperInstance.slideNext();
      } else if (e.key === "ArrowRight") {
        swiperInstance.slidePrev();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [swiperInstance]);

  const handleSlideChange = (swiper) => {
    setIsAnimating(true);
    setCurrentSlide(swiper.activeIndex);
    setTimeout(() => setIsAnimating(false), 1000);
  };

  const goToSlide = (index) => {
    if (swiperInstance) {
      swiperInstance.slideTo(index);
    }
  };

  const handleSwiperInit = (swiper) => {
    setSwiperInstance(swiper);
  };

  return (
    <HeroSection id="home">
      <HeroBackground>
        <StyledSwiper
          ref={swiperRef}
          modules={[Autoplay, EffectFade]}
          spaceBetween={0}
          slidesPerView={1}
          effect="fade"
          fadeEffect={{ crossFade: true }}
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
          speed={1000}
          onSwiper={handleSwiperInit}
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
        <ProjectName key={currentSlide}>
          {projects[currentSlide]?.name}
        </ProjectName>
      </ProjectIndicator>

      <ProgressIndicator>
        {projects.map((_, index) => (
          <ProgressDot
            key={index}
            className={index === currentSlide ? "active" : ""}
            onClick={() => goToSlide(index)}
          />
        ))}
      </ProgressIndicator>
    </HeroSection>
  );
};

export default HeroSlider;
