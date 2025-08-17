import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCreative, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import { projects } from '../../assets/data/projects';
import { projects } from "../../assets/data/projects";
// استيراد الأنماط
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/effect-cube";
import "swiper/css/effect-coverflow";
import "swiper/css/effect-creative";
import { AnimatePresence, motion } from "motion/react";
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

const OldProjectIndicator = styled(motion.div)`
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

const ProjectIndicator = styled(motion.div)`
  position: absolute;
  top: 30%;
  right: 20%;
  overflow: hidden;
  /* transform: translateX(50%); */
  text-align: start;
  z-index: 3;
  /* background: rgba(0, 0, 0, 0.5); */
  padding: 1rem 10px;
  /* border-radius: 10px; */
  /* max-width: 90%; */
  width: 300px;
  height: 60px;
  border-right: 5px solid var(--primary);
  box-sizing: border-box;
`;

const ProjectName = styled(motion.div)`
  font-size: var(--normal-text);
  color: rgba(255, 255, 255, 0.95);
  text-shadow: 2px 2px 15px rgba(0, 0, 0, 0.8);
`;

const StyledSwiper = styled(Swiper)`
  width: 100%;
  height: 100%;
  direction: ltr;
  .swiper-wrapper {
    position: relative;
    &::after {
      position: absolute;
      content: "";
      width: 100%;
      height: 100%;
      z-index: 10;
      background-color: rgba(0, 0, 0, 0.4);
    }
  }
`;
const OldHeroForeground = styled(motion.div)`
  @keyframes dropOverlay {
    0% {
      transform: translateY(-100%);
    }
    20% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(100%);
    }
    100% {
      transform: translateY(100%);
    }
  }
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  transform: translateY(-100%);
  animation-name: dropOverlay;
  animation-duration: 6s;
  animation-iteration-count: infinite;
  animation-delay: 4000ms;
`;
const HeroForeground = styled(motion.div)`
  @keyframes dropOverlay {
    0% {
      transform: translateY(-100%);
    }
    20% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(100%);
    }
    100% {
      transform: translateY(100%);
    }
  }
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  /* transform: translateY(-100%); */
  /* animation-name: dropOverlay; */
  /* animation-duration: 6s; */
  /* animation-iteration-count: infinite; */
  /* animation-delay: 4000ms; */
`;
const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const swiperRef = useRef(null);
  const [animateKey, setAnimateKey] = useState(0);
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  useEffect(() => {
    setIsFirstLoad(false);
  }, []);
  const handleSlideChange = (swiper, delay) => {
    // setCurrentSlide(swiper.activeIndex);
    console.log(currentSlide);
    setTimeout(() => {
      // console.log("📢 بعد ثانية سيتم الانتقال من السلايد:", swiper.realIndex);
      setAnimateKey((prev) => prev + 1); // تغيير المفتاح لإعادة تشغيل الأنيميشن
    }, delay - 500);
    // setCurrentSlide((prev) => (prev + 1) % projects.length);
    setCurrentSlide(swiper.realIndex);
  };
  const delay = 5000;
  return (
    <HeroSection id="home">
      <HeroBackground>
        <StyledSwiper
          ref={swiperRef}
          speed={1000}
          // direction={"vertical"}
          modules={[Autoplay, EffectCreative]}
          effect={"creative"}
          creativeEffect={{
            prev: {
              translate: [0, "100%", 0],
              opacity: 0,
            },
            next: {
              translate: [0, "-100%", 0],
              opacity: 0,
            },
          }}
          spaceBetween={0}
          slidesPerView={1}
          autoplay={{
            delay: delay,
            disableOnInteraction: false,
          }}
          loop={true}
          onSlideChange={(swiper) => {
            handleSlideChange(swiper, delay);
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
      <ProjectIndicator
        initial={{ height: 0, padding: 0, opacity: 0 }}
        animate={{ height: "65px", padding: "1rem 10px", opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <AnimatePresence mode="wait">
          {projects.map(
            (project, index) =>
              currentSlide === index && (
                <ProjectName
                  key={projects[currentSlide].id} // مفتاح فريد لكل مشروع
                  initial={{ x: "100%" }}
                  animate={{ x: "0%" }}
                  exit={{ opacity: 0, x: "100%" }}
                  transition={
                    isFirstLoad
                      ? { duration: 1, delay: 2 }
                      : { duration: 1, ease: "easeIn" }
                  }
                >
                  {projects[currentSlide].name}
                </ProjectName>
              )
          )}
        </AnimatePresence>
      </ProjectIndicator>

      <HeroForeground
        key={animateKey} // إعادة رسم العنصر عند تغير القيمة
        initial={isFirstLoad ? false : { transform: "translateY(-100%)" }}
        animate={{ transform: "translateY(100%)" }}
        transition={{ duration: 2, ease: "easeIn" }}
      />
    </HeroSection>
  );
};

export default HeroSlider;
