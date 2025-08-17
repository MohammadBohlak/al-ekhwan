import React, { useState, useEffect, useRef, useContext } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { motion, AnimatePresence } from "motion/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { url } from "../../App";
// import { projects } from "../../assets/data/projects";

const HeroSection = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  overflow: hidden;
  margin-bottom: var(--p-section);
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
  direction: ltr;
`;

const HeroSlider = ({ projects }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [exitDirection, setExitDirection] = useState("right");
  const swiperRef = useRef(null);
  // دالة لاختيار اتجاه عشوائي
  const getRandomDirection = () => {
    const directions = ["up", "down", "left", "right"];
    const randomIndex = Math.floor(Math.random() * directions.length);
    return directions[randomIndex];
  };

  // إعداد متغيرات الحركة بناءً على الاتجاه
  const getVariants = (direction) => {
    switch (direction) {
      case "up":
        return {
          initial: { y: 0, opacity: 1 },
          exit: { y: "-100%", opacity: 0 },
          animate: { y: 0, opacity: 1 },
        };
      case "down":
        return {
          initial: { y: 0, opacity: 1 },
          exit: { y: "100%", opacity: 0 },
          animate: { y: 0, opacity: 1 },
        };
      case "left":
        return {
          initial: { x: 0, opacity: 1 },
          exit: { x: "-100%", opacity: 0 },
          animate: { x: 0, opacity: 1 },
        };
      case "right":
        return {
          initial: { x: 0, opacity: 1 },
          exit: { x: "100%", opacity: 0 },
          animate: { x: 0, opacity: 1 },
        };
      default:
        return {
          initial: { x: 0, opacity: 1 },
          exit: { x: "100%", opacity: 0 },
          animate: { x: 0, opacity: 1 },
        };
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") {
        setExitDirection(getRandomDirection());
        swiperRef.current?.slideNext();
      } else if (e.key === "ArrowRight") {
        setExitDirection(getRandomDirection());
        swiperRef.current?.slidePrev();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleSlideChange = (swiper) => {
    setExitDirection(getRandomDirection());
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
          // direction={"vertical"}
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
              <AnimatePresence mode="wait">
                <BackgroundSlide
                  key={currentSlide}
                  style={{
                    backgroundImage: `url(${url}${project.image})`,
                  }}
                  variants={getVariants(exitDirection)}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                />
              </AnimatePresence>
            </SwiperSlide>
          ))}
        </StyledSwiper>
      </HeroBackground>
      <ProjectIndicator>
        <ProjectName>{projects[currentSlide]?.title}</ProjectName>
      </ProjectIndicator>
    </HeroSection>
  );
};

export default HeroSlider;
