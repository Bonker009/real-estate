export default function Value() {
  const image = [
    "https://www.strategicrealtyinvestment.com/assets/images/core-1.png",
    "https://www.strategicrealtyinvestment.com/assets/images/core-2.png",
    "https://www.strategicrealtyinvestment.com/assets/images/core-3.png",
  ];
  return (
    <div className="p-10 pb-24">
      <div className="text-center flex flex-col p-4 items-center">
        <h1 className="text-5xl">
          Our <span className="text-gold font-bold">Value</span>
        </h1>
        <p className="text-2xl mt-4 sm:w-1/2 w-95 ">
          We uphold our investments and development projects with the highest
          level of sustainability, respect, and integrity.
        </p>
      </div>
      <div className="flex sm:flex-row flex-col gap-5 items-center justify-center sm:gap-10 mt-10">
        <img
          className="hover:opacity-80 hover:scale-105 hover:shadow-2xl transition-all duration-500 rounded-md"
          src={image[0]}
        />
        <img
          className="hover:opacity-80 hover:scale-105 hover:shadow-2xl transition-all duration-500 rounded-md"
          src={image[1]}
        />
        <img
          className="hover:opacity-80 hover:scale-105 hover:shadow-2xl transition-all duration-500 rounded-md"
          src={image[2]}
        />
      </div>
    </div>
  );
}
