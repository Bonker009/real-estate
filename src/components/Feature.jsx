import logo from "../assets/images/f_logo.png";
import Number from "./Number";
export default function Feature() {
  return (
    <section className=" bg-white grid place-items-center text-center py-12 px-10">
      <img src={logo} className=" w-52  mb-10" />
      <h1 className="text-gold text-5xl font-semibold">
        Strategic Realty Investment Co., Ltd
      </h1>
      <p className="mt-10 text-slate-800">
        Strategic Realty Investment Co., Ltd was founded in February 2022 and is
        today one of the most innovative, creative, and unique property
        Investment development companies. With our global expertise in the
        market, strong growth ambition, and a hungry drive for innovation,
        Strategic Realty Investment Co., Ltd is focussing on growth, strategic
        development, and contribution to innovative development in Cambodia.
      </p>
      <p className=" text-stone-800 mt-5">Strategic Realty Investment in Numbers</p>
      <Number/>
    </section>
  );
}
