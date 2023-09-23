import Feature from "./components/Feature";
import HeaderCarousel from "./components/HeaderCarousel";
import Hero from "./components/Hero";
import Place from "./components/Place";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="scroll-smooth">
      <HeaderCarousel />
      <Hero />
      <Feature />
      <Place />
      <Footer />
    </div>
  );
}

export default App;
