import logo from "../../assets/images/f_logo.png";
import ham from "../../assets/images/icon/hamburger.png";
import { Link,  } from "react-router-dom";
import { useState } from "react";

function HeaderCarousel() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  const menuStyle = {
    width: isOpen ? "50%" : "0",
    height: isOpen ? "100%" : "0",
  };

  return (
    <div className="sticky top-0 z-50">
      <div className="relative">
        {/* Header */}
        <header className="flex flex-row items-center justify-between px-10 py-5 sticky top-0 z-50 text-gold bg-black">
          <img src={logo} alt="logo" className="w-40" />
          <button
            className="block bg-white p-2 rounded-md hover:opacity-60 transition-all duration-200"
            onClick={toggleMenu}
          >
            <img src={ham} />
          </button>
        </header>
        {/* Sidebar Menu */}
        <nav
          style={menuStyle}
          className={`fixed left-0 bg-black text-white z-50 opacity-95 p-6 transition-transform transform ${
            isOpen ? "translate-x-0" : "-translate-x-full opacity-0  "
          } block opacity-0  sm:bg-transparent sm:text-gold sm:p-0 transition-transform duration-300`}
        >
          <ul
            className={`flex flex-col  bg-black text-sm sm:text-2xl h-full ${
              !isOpen ? "opacity-0" : ""
            }`}
          >
            <li className=" p-2 px-10 hover:bg-gold hover:text-white transition-all duration-500">
              <Link to="/">Home</Link>
            </li>
            <li className="p-2 px-10 hover:bg-gold hover:text-white transition-all duration-500">
              <Link to="/about">About Us</Link>
            </li>
            <li className="p-2 px-10 hover:bg-gold hover:text-white transition-all duration-500">
              <Link to="/director">Director`s message</Link>
            </li>
            <li className="p-2 px-10 hover:bg-gold hover:text-white transition-all duration-500">
              <a href="/projects">Projects</a>
            </li>
            <li className="p-2 px-10 hover:bg-gold hover:text-white transition-all duration-500">
              <a href="/news">News</a>
            </li>
            <li className="p-2 px-10 hover:bg-gold hover:text-white transition-all duration-500">
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default HeaderCarousel;
