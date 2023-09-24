export default function Place() {
  return (
    <div
      className="min-h-screen h-96 bg-cover text-white bg-center bg-no-repeat relative bottom-0 left-0 right-0 z-0 flex flex-col justify-start items-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url("https://www.strategicrealtyinvestment.com/assets/images/eco-city-gate.jpg")`,
        objectFit: "cover",

        backgroundSize: "cover",

        backgroundPosition: "center",

      }}
    >
      <h1 className="sm:text-7xl text-6xl mt-40">Banteay Srei Eco City</h1>
      <p className=" w-1/2 text-center mt-4 text-3xl sm:text-2xl">
        Banteay Srei Eco City Home & Business Opportunities. Fantastic Inovative
        Development, great investment opportunities & High Return on Investment
        (ROI)
      </p>
    </div>
  );
}
