export default function Project() {
  return (
    <section className="grid place-items-center p-20  " id="project">
      <div className=" text-center">
          <h1 className=" text-5xl font-semibold border-b-4 border-gold inline">
            Our <span className="text-gold">Projects</span>
          </h1>
          <p className="text-gray-600 mt-6">
            Explore our collection of magnificent projects, from completed to
            ongoing developments..
          </p>
      </div>
      <figure className=" rounded-md  bg-slate-900 mt-10  ">
        <img src="https://www.strategicrealtyinvestment.com/assets/images/featured.png" className=" rounded-t-md " />
        <figcaption className="p-4 px-10 rounded-b-md">
          <h3 className="uppercase font-semibold text-white text-4xl">Paradise Island</h3>
          <p className="text-gold my-4">Banteay Srei Eco City</p>
          <button className="text-gold border p-2">Veiws</button>
        </figcaption>
      </figure>
    </section>
  );
}
