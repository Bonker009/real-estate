import Feature from "./components/Feature/Feature";
import HeaderCarousel from "./components/Header/HeaderCarousel";
import Hero from "./components/Header/Hero";
import Place from "./components/Place";
import Footer from "./components/Footer";
import Project from "./components/Project";
import News from "./components/News/News";
import Partner from "./components/Partner";
import Contact from "./components/Contact";
import Property from "./components/Propoty/Property";


function App() {
  return (
    <div className="" style={{width:"100%"}}>
      <HeaderCarousel />
      <Hero />
      <Feature />
      <Place />
      <Project />
      <News />
      <Property/>
      <Partner />
      <Contact />
      <Footer />
    </div>
  );
}
export default App;
