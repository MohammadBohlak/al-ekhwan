import { AiOutlineArrowUp } from "react-icons/ai";
import { useEffect, useState } from "react";
import styled from "styled-components";
import logo from "../../assets/images/logo_without_background2.png";
const StyledLoader = styled.div`
  position: fixed;
  right: 50%;
  top: 50%;
  transform: translate(50%, -50%);
  width: 200px;
  height: 200px;
  z-index: 1000;
  /* background-color: #00000088; */
  /* background-color: #ffffff88; */
  border-radius: 50%;
  img {
    width: 50%;
    height: 50%;
    position: absolute;
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
    stroke-width: 1.5;
  }

  .circle {
    fill: none;
    stroke: var(--primary);
    stroke-width: 1.5;
    stroke-linecap: round;
    transition: stroke-dasharray 0.2s ease-out;
  }
`;

const Loader = ({ loading, setShow }) => {
  const [scrollPercent, setScrollPercent] = useState(0);
  useEffect(() => {
    setInterval(() => {
      setScrollPercent((prev) => {
        if (prev < 100) {
          return prev + 1;
        } else if (prev == 100 && loading) {
          setTimeout(() => {
            setScrollPercent(0);
          }, 500);
        } else if (prev == 100 && !loading) {
          setShow(true);
        }
        return prev;
      });
    }, 5);
  }, []);
  return (
    <StyledLoader>
      <img src={logo} alt="logo" className="arrow" />
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
    </StyledLoader>
  );
};

export default Loader;
