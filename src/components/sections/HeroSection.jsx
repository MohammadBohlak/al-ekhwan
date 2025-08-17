import React, { useContext } from "react";
import HeroSlider from "../sliders/HeroSlider";
import { DataContext } from "../../App";

function HeroSection() {
  const data = useContext(DataContext);
  const projects = data.hero;
  return (
    <>
      <HeroSlider projects={projects}></HeroSlider>
    </>
  );
}

export default HeroSection;
