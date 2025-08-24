import React, { useState, useEffect, useRef } from "react";
import { SwiperSlide } from "swiper/react";
import { Autoplay, EffectCreative, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import { projects } from '../../assets/data/projects';
// استيراد الأنماط
import "swiper/css";
import "swiper/css/effect-creative";
import { AnimatePresence } from "motion/react";
import {
  BackgroundSlide,
  HeroBackground,
  HeroForeground,
  HeroSection,
  ProjectIndicator,
  ProjectName,
  StyledSwiper,
} from "./heroSlide.styles";

const HeroSlider = ({ projects }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const swiperRef = useRef(null);
  const [animateKey, setAnimateKey] = useState(0);
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  useEffect(() => {
    setIsFirstLoad(false);
  }, []);
  const handleSlideChange = (swiper, delay) => {
    // console.log(currentSlide);
    setTimeout(() => {
      // console.log("📢 بعد ثانية سيتم الانتقال من السلايد:", swiper.realIndex);
      setAnimateKey((prev) => prev + 1); // تغيير المفتاح لإعادة تشغيل الأنيميشن
    }, delay - 500);
    // setCurrentSlide((prev) => (prev + 1) % projects.length);
    setCurrentSlide(swiper.realIndex);
  };
  const delay = 5000;
  // console.log(projects);
  return (
    <HeroSection id="home">
      <HeroBackground>
        <StyledSwiper
          ref={swiperRef}
          speed={1000}
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
          {projects.images.map((project, index) => (
            <SwiperSlide key={index}>
              <BackgroundSlide
                style={{
                  backgroundImage: `url(${projects.url}${project.image})`,
                }}
              />
            </SwiperSlide>
          ))}
        </StyledSwiper>
      </HeroBackground>
      <ProjectIndicator
        initial={{ heigth: "0", padding: 0, opacity: 0 }}
        animate={{ heigth: "65px", padding: "1rem 10px", opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <AnimatePresence mode="wait">
          {projects.images.map(
            (project, index) =>
              currentSlide === index && (
                <ProjectName
                  key={projects.images[currentSlide].id} // مفتاح فريد لكل مشروع
                  initial={{ y: "200%" }}
                  animate={{ y: "0%" }}
                  exit={{ opacity: 0, y: "200%" }}
                  transition={
                    isFirstLoad
                      ? { duration: 1, delay: 2 }
                      : { duration: 1, ease: "easeIn" }
                  }
                >
                  {projects.images[currentSlide].title}
                </ProjectName>
              )
          )}
        </AnimatePresence>
      </ProjectIndicator>

      <HeroForeground
        key={animateKey} // إعادة رسم العنصر عند تغير القيمة
        initial={isFirstLoad ? false : { transform: "translateY(-120%)" }}
        animate={{ transform: "translateY(100%)" }}
        transition={{ duration: 2, ease: "easeIn" }}
      />
    </HeroSection>
  );
};

export default HeroSlider;
