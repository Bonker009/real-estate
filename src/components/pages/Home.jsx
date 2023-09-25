import HeaderCarousel from "../Header/HeaderCarousel";
import Hero from "../Header/Hero";
import Feature from "../Feature/Feature";
import Place from "../Place";
import Project from "../Project";
import News from "../News/News";
import Property from "../Propoty/Property";
import Partner from "../Partner";
import Contact from "../Contact";
import Footer from "../Footer";
export default function Home() {
  console.log("Home");
  return (
    <div  >
      <HeaderCarousel />
      <Hero />
      <Feature />
      <Place />
      <Project />
      <News />
      <Property />
      <Partner />
      <Contact />
      <Footer />
    </div>
  );
}
