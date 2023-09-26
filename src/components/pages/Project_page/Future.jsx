export default function Future() {
  const image =
    "https://www.strategicrealtyinvestment.com/assets/images/eco-city-gate.jpg";
  return (
    <div
      style={{
        backgroundImage: `url(${image})`,
        height: "125vh",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }} className="flex flex-col items-center "
    >
      <h1 className="text-white text-center text-5xl font-semibold m-12">The Future of Smart Investments</h1>
      <p className="font-semibold text-slate-700 w-[65%] text-center">
        Banteay Srei Eco City Home & Business Opportunities. Fantastic Inovative
        Development, great investment opportunities & High Return on Investment
        (ROI)
      </p>
    </div>
  );
}
