import React, { useEffect, useState } from "react";
import styled from "styled-components";

const StyledScrollCircle = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 60px;
  height: 60px;
  z-index: 1000;

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
    stroke: #00acc1;
    stroke-width: 3.8;
    stroke-linecap: round;
    transition: stroke-dasharray 0.2s ease-out;
  }
`;

const ScrollCircle = () => {
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    let ticking = false;

    const updateScrollPercent = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const percent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollPercent(percent);
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollPercent);
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <StyledScrollCircle>
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
  );
};

export default ScrollCircle;
