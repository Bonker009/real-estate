import logo from "../../assets/images/f_logo.png";
// import phone from "../../assets/images/phone-call1.png";
// import slide1 from "../assets/images/slider.jpg";

export default function HeaderCarousel() {
  return (
    <header className="flex flex-row items-center justify-between px-10 py-5  sticky top-0 z-50 text-gold bg-black  opacity-95">
      <img src={logo} alt="logo" className=" w-40" />
      <ul className="flex flex-row gap-6 text-sm sm:text-2xl">
        <li>
          <a className="hover:text-white" href="#home">
            Home
          </a>
        </li>
        <li>
          <a className="hover:text-white" href="#about">
            About Us
          </a>
        </li>
        <li>
          <a className="hover:text-white" href="#project">
            Projects
          </a>
        </li>
        <li>
          <a className="hover:text-white" href="#news">
            News
          </a>
        </li>
        <li>
          <a className="hover:text-white" href="#direct">
            Director`s message
          </a>
        </li>
        <li>
          <a className="hover:text-white" href="#contact">
            Contact
          </a>
        </li>
      </ul>
    </header>
  );
}
