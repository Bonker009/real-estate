/* eslint-disable react-hooks/exhaustive-deps */
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { useState, useEffect } from "react";

export default function Hero() {
  const slides = [
    {
      url: "https://www.strategicrealtyinvestment.com/assets/images/sldie-main-2.png",
    },
    {
      url: "https://www.strategicrealtyinvestment.com/assets/images/slider.jpg",
    },
    {
      url: "https://www.strategicrealtyinvestment.com/assets/images/slider-3.jpg",
    },
  ];
  const [curIndex, setCurIndex] = useState(0);

  const prevSlide = () => {
    const resetIndex = curIndex === 0 ? slides.length - 1 : curIndex - 1;
    setCurIndex(resetIndex);
  };

  const nextSlide = () => {
    const resetIndex = curIndex === slides.length - 1 ? 0 : curIndex + 1;
    setCurIndex(resetIndex);
  };

  const transitionDuration = 1000;
  const autoSlideInterval = 3000;

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, autoSlideInterval);
    return () => clearInterval(intervalId);
  }, [curIndex]);

  return (
    <section
      id="home"
      className="  h-[780px]  bg-cover text-white bg-center bg-no-repeat  top-0  left-0 right-0 flex flex-col justify-center items-center group  p-10"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.6)),url(${slides[curIndex].url})`,
        transition: `opacity ${transitionDuration}ms ease-in-out`, // Apply fade transition to opacity
      }}
    >
      <div className="flex justify-between w-full px-5">
        {/* left arrow */}
        <div className="hidden sm:group-hover:block rounded-full p-2 cursor-pointer">
          <BsChevronLeft onClick={prevSlide} className="text-7xl text-white" />
        </div>

        {/* right arrow */}
        <div className="hidden sm:group-hover:block rounded-full p-2 cursor-pointer">
          <BsChevronRight onClick={nextSlide} className="text-7xl text-white" />
        </div>
      </div>

      <div className="w-2/4 text-center">
        <h5 className="mb-5 text-5xl">
          <span className="text-gold font-semibold">The Number 1</span> in Real
          Estate Investment Opportunities
        </h5>
        <button className="uppercase rounded-sm border-0 p-3 bg-gold font-semibold">
          our Projects
        </button>
      </div>
    </section>
  );
}
