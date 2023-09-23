
export default function Hero() {
  return (
    <section id="home"
      className="min-h-screen h-96 bg-cover text-white bg-center bg-no-repeat relative bottom-0 left-0 right-0 z-0 flex flex-col justify-center items-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.6)), url("https://www.strategicrealtyinvestment.com/assets/images/sldie-main-2.png")`,
      }}
    >
        
      <div className=" w-2/4 text-center">
        <h5 className="mb-5 text-5xl">
          <span className="text-gold">The Number 1</span> in Real Estate Investment Opportunities
        </h5>
        <button className=" uppercase  border-0 p-3 bg-gold  font-semibold">our Projects</button>
      </div>
    </section>
  );
}
