import Contact from "../../Contact";
import Footer from "../../Footer";
import HeaderCarousel from "../../Header/HeaderCarousel";
import FormSubmit from "./FormSubmit";
import Hero from "./Hero";

export default function ContactPage() {
  return (
    <div className="w-full sm:w-screen">
      <HeaderCarousel />
      <Hero />
      <FormSubmit />
      <Contact />
      <Footer />
    </div>
  );
}
