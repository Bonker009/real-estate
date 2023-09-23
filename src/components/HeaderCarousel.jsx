import logo from "../assets/images/f_logo.png";
import phone from "../assets/images/phone-call1.png";
// import slide1 from "../assets/images/slider.jpg";

export default function HeaderCarousel() {
  return (
    <header
      className="flex flex-row items-center justify-between px-10 py-5 font-semibold sticky top-0 z-50 text-white bg-black bg-opacity-50"
    >
      <img src={logo} alt="logo" className=" w-40" />
      <ul className="flex flex-row gap-6">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About Us</a>
        </li>
        <li>
          <a href="#project">Projects</a>
        </li>
        <li>
          <a href="#news">News</a>
        </li>
        <li>
          <a href="#direct">Director`s message</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="flex flex-row gap-3 ">
        <img src={phone} alt="phone" className=" w-6" />
        <a href="tel:+97714855855">+855(0)14 855 855</a>
      </div>
    </header>
  );
}
