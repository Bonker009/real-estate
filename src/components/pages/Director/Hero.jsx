export default function Hero() {
  const radialGradient =
    "radial-gradient(circle, rgba(0,0,0,0.6), rgba(0,0,0,0.9))";
  const bgImage =
    "https://www.strategicrealtyinvestment.com/assets/images/inner_page.png";
  return (
    <div
      style={{
        backgroundImage: `${radialGradient}, url(${bgImage})`, // Combine radial gradient and image

        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "50vh",
      }}
      className="flex flex-col items-center justify-center text-center"
    >
      <h1 className="text-gold font-semibold text-4xl mb-5">Message</h1>
      <p className="font-semibold text-white">FROM THE PROJECT DEVELOPMENT DIRECTOR.</p>
    </div>
  );
}
