import { AiOutlineArrowUp } from "react-icons/ai";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { AnimatePresence, motion } from "motion/react";

const StyledScrollCircle = styled(motion.div)`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 60px;
  height: 60px;
  z-index: 1000;
  /* background-color: #00000088; */
  background-color: #ffffff88;
  border-radius: 50%;
  svg.arrow {
    position: absolute;
    color: var(--primary);
    font-size: 40px;
    right: 50%;
    top: 50%;
    transform: translate(50%, -50%);
    z-index: 1001;
    /* width: 90%; */
    /* height: 90%; */
  }
  .circular-chart {
    width: 100%;
    height: 100%;
    transform: rotate(-90deg);
  }

  .circle-bg {
    fill: none;
    stroke: #eee;
    stroke-width: 3.8;
  }

  .circle {
    fill: none;
    stroke: var(--primary);
    stroke-width: 3.8;
    stroke-linecap: round;
    transition: stroke-dasharray 0.2s ease-out;
  }
`;

const ScrollCircle = () => {
  const [scrollPercent, setScrollPercent] = useState(0);
  const [show, setShow] = useState(false);
  useEffect(() => {
    let ticking = false;

    const updateScrollPercent = () => {
      // console.log(document.documentElement.scrollHeight);
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const percent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

      setScrollPercent(percent);
      ticking = false;
    };

    const handleScroll = () => {
      const shouldShow = window.scrollY > window.innerHeight;
      setShow((prev) => {
        if (prev !== shouldShow) {
          return shouldShow;
        }
        return prev;
      });
      if (!ticking) {
        window.requestAnimationFrame(updateScrollPercent);
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <StyledScrollCircle
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          exit={{ scale: 0 }}
          initial={{ scale: 0 }}
        >
          <a href="#home">
            <AiOutlineArrowUp className="arrow" />
          </a>
          <svg viewBox="0 0 36 36" className="circular-chart">
            <path
              className="circle-bg"
              d="M18 2.0845
             a 15.9155 15.9155 0 0 1 0 31.831
             a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <path
              className="circle"
              strokeDasharray={`${scrollPercent}, 100`}
              d="M18 2.0845
             a 15.9155 15.9155 0 0 1 0 31.831
             a 15.9155 15.9155 0 0 1 0 -31.831"
            />
          </svg>
        </StyledScrollCircle>
      )}
    </AnimatePresence>
  );
};

export default ScrollCircle;
