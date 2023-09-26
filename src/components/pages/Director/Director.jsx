import Contact from "../../Contact";
import Footer from "../../Footer";
import HeaderCarousel from "../../Header/HeaderCarousel";
import Partner from "../../Partner";
import Avatar from "./Avatar";
import Hero from "./Hero";

export default function Director() {
  return (
    <div>
      <HeaderCarousel />
      <Hero/>
      <Avatar />
      <Partner />
      <Contact />
      <Footer />
    </div>
  );
}
