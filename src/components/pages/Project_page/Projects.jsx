
import Contact from "../../Contact";

import Footer from "../../Footer";
import HeaderCarousel from "../../Header/HeaderCarousel";
import Project from "../../Project";
import Feature from "./Feature";
import Future from "./Future";
import Hero from "./Hero";
import SliderImage from "./slider";

export default function Projects() {
  return (
    <div className=" w-full">
      <HeaderCarousel />
      <Hero />
      <Feature />
      <Future />
      <SliderImage />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}
