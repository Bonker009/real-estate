import Number from "../../Feature/Number";

export default function Feature() {
  const logo =
    "https://www.strategicrealtyinvestment.com/assets/images/logo-city.png";
  return (
    <div className="flex flex-col items-center my-20">
      <img src={logo} alt="logo" className="w-1/4 mx-auto" />
      <h1 className="text-gold text-5xl font-semibold my-10 text-center   ">Welcome to Banteay Srei Eco City</h1>
      <p className="text-center w-[75%]">
        Welcome to our Banteay Srei Eco City project where we offer a variety of
        amazing opportunities in real estate, SMEs, Agriculture, education,
        healthcare, and much more. We offer the highest quality and very
        interesting investment opportunities for investors and the general
        public.
      </p>
      <p className="text-3xl font-semibold text-slate-600 my-5">Banteay Srei Eco City Project&apos; Features</p>
      <Number />
    </div>
  );
}
