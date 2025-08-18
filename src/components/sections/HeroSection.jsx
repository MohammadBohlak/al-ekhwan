import React, { useContext } from "react";
import HeroSlider from "../sliders/HeroSlider";
import { DataContext } from "../../App";

function HeroSection() {
  const data = useContext(DataContext);
  // console.log(data);
  const projects = { images: data.hero, url: data.base_url };
  // console.log("pojects", projects);
  return (
    <>
      <HeroSlider projects={projects}></HeroSlider>
    </>
  );
}

export default HeroSection;
