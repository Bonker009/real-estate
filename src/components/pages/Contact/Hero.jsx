export default function Hero() {
  const bgImage =
    "	https://www.strategicrealtyinvestment.com/assets/images/inner_page.png";

  const radialGradient =
    "radial-gradient(circle, rgba(0,0,0,0.6), rgba(0,0,0,0.9))";

  return (
    <div>
      <div
        className="hero-image w-full relative"
        style={{
          backgroundImage: `${radialGradient}, url(${bgImage})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          position: "relative",
          height: "50vh",
        }}
      >
        <div className="hero-text absolute inset-0 flex flex-col items-center justify-center text-center">
          <h1 className="text-5xl text-white font-semibold">Get In Touch</h1>
          <p className="text-gold mt-5 text-2xl">CONTACT US</p>
        </div>
      </div>
    </div>
  );
}
