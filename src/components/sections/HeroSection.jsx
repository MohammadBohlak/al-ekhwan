import { useContext } from "react";
import HeroSlider from "../sliders/HeroSlider";
import { DataContext } from "../../App";

function HeroSection() {
  const data = useContext(DataContext);
  const projects = { images: data.hero, url: data.base_url };
  return (
    <>
      <HeroSlider projects={projects}></HeroSlider>
    </>
  );
}

export default HeroSection;
