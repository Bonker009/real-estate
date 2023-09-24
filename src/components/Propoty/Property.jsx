/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";

export default function Property() {
  const images = [
    {
      image:
        "https://www.strategicrealtyinvestment.com/assets/images/villa-1.jpg",
      title: "Paradise Villa",
    },
    {
      image:
        "https://www.strategicrealtyinvestment.com/assets/images/villa-2.jpg",
      title: "Heritage Villa",
    },
    {
      image:
        "https://www.strategicrealtyinvestment.com/assets/images/villa-3.jpg",
      title: "Sunshine Villa",
    },
    {
      image:
        "https://www.strategicrealtyinvestment.com/assets/images/villa-4.jpg",
      title: "Diamond Villa",
    },
    {
      image:
        "https://www.strategicrealtyinvestment.com/assets/images/villa-5.jpg",
      title: "Emerald Villa",
    },
  ];
  const [curIndex, setCurIndex] = useState(0);
  const prevSlide = () => {
    const resetIndex = curIndex === 0 ? images.length - 1 : curIndex - 1;
    setCurIndex(resetIndex);
  };
  const nextSlide = () => {
    const resetIndex = curIndex === images.length - 1 ? 0 : curIndex + 1;
    setCurIndex(resetIndex);
  };
  const autoSlideInterval = 3000;
  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, autoSlideInterval);
    return () => clearInterval(intervalId);
  }, [curIndex]);

  // Determine the indices for the two images to be displayed
  const firstImageIndex = curIndex;
  const secondImageIndex = (curIndex + 1) % images.length;

  return (
    <div className="text-center flex flex-col items-center justify-center p-10">
      <div>
        <h1 className="text-gold text-5xl font-semibold mb-10">
          Features Properties
        </h1>
        <p className="text-xl">
          The Best Properties Investment Opportunity Collections
        </p>
      </div>
      {/* Display Images */}
      <figure className="flex sm:flex-row flex-col sm:gap-4 gap-10 mt-10 justify-center">
        <div className="group relative w-[700px] h-[500px] overflow-hidden rounded-md">
          {/* First Image */}
          <div className="w-full h-full relative">
            <img
              src={images[firstImageIndex].image}
              alt="property"
              className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-500 ease-in-out"
            />
            <div className="z-40 absolute top-8 text-white right-[-9rem] rotate-45 bg-gold p-2 w-96 font-semibold">
              Coming Soon
            </div>
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-10 group-hover:opacity-50 transition-opacity duration-300 ease-in-out"></div>
            <figcaption className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-80 text-white p-10 transform translate-y-100 group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
              <h3 className="text-4xl font-semibold">
                {images[firstImageIndex].title}
              </h3>
              <p className="text-xl text-gold">Paradise Villa</p>
            </figcaption>
          </div>
        </div>
        <div className="group relative w-[700px] h-[500px] overflow-hidden rounded-md">
          {/* Second Image */}
          <div className="w-full h-full relative">
            <img
              src={images[secondImageIndex].image}
              alt="property"
              className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-500 ease-in-out"
            />
            <div className=" z-40 absolute top-8 text-white right-[-9rem] rotate-45 bg-gold p-2 w-96 font-semibold">
              Coming Soon
            </div>
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-10 group-hover:opacity-50 transition-opacity duration-300 ease-in-out"></div>
            <figcaption className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-80 text-white p-10 transform translate-y-100 group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
              <h3 className="text-4xl font-semibold">
                {images[secondImageIndex].title}
              </h3>
              <p className="text-xl text-gold">Paradise Villa</p>
            </figcaption>
          </div>
        </div>
      </figure>

      {/* left arrow */}
      <div className="flex flex-row gap-40 mt-10">
        <div className="rounded-full p-2 cursor-pointer">
          <BsChevronLeft onClick={prevSlide} className="text-7xl text-black" />
        </div>
        {/* right arrow */}
        <div className="rounded-full p-2 cursor-pointer">
          <BsChevronRight onClick={nextSlide} className="text-7xl text-black" />
        </div>
      </div>
    </div>
  );
}
