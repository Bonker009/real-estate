import Contact from "../../Contact";
import Footer from "../../Footer";
import HeaderCarousel from "../../Header/HeaderCarousel";
import Partner from "../../Partner";
import Hero from "./Hero";
import Service from "./Service";
import Value from "./Value";
import Who from "./Who";

export default function About() {
  return (
    <div>
      <HeaderCarousel />
      <Hero />
      <Who />
      <Value />
      <Service />
      <Partner />
      <Contact />
      <Footer />
    </div>
  );
}
