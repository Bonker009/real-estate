import plot from "../assets/images/plot.svg";
import cafe from "../assets/images/coffee-shop.svg";
import school from "../assets/images/school.svg";
import soccer from "../assets/images/field.svg";
import villa from "../assets/images/apartment.svg";
import home from "../assets/images/homeh.svg";
import shophouse from "../assets/images/shophouse.svg";
import university from "../assets/images/university.svg";
export default function Number() {
  return (
    <div className="grid sm:grid-cols-4 grid-cols-2 place-items-center mt-10 gap-20">
      <div className="flex flex-row items-center gap-4 ">
        <img
          src={plot}
          className=" w-16"
          alt="Strategic Realty Investment in Numbers"
        />
        <div className="flex flex-col text-left">
          <p>300HA</p>
          <label>PROJECT SIZE</label>
        </div>
      </div>
      <div className="flex flex-row items-center gap-4 ">
        <img
          src={cafe}
          className=" w-16"
          alt="Strategic Realty Investment in Numbers"
        />
        <div className="flex flex-col text-left">
          <p>120</p>
          <label>BUSINESSES</label>
        </div>
      </div>
      <div className="flex flex-row items-center gap-4 ">
        <img
          src={school}
          className=" w-16"
          alt="Strategic Realty Investment in Numbers"
        />
        <div className="flex flex-col text-left">
          <p>2</p>
          <label>SCHOOLS</label>
        </div>
      </div>
      <div className="flex flex-row items-center gap-4 ">
        <img
          src={soccer}
          className=" w-16"
          alt="Strategic Realty Investment in Numbers"
        />
        <div className="flex flex-col text-left">
          <p>25000People</p>
          <label>SOCCER STADIUM</label>
        </div>
      </div>
      <div className="flex flex-row items-center gap-4 ">
        <img
          src={villa}
          className=" w-16"
          alt="Strategic Realty Investment in Numbers"
        />
        <div className="flex flex-col text-left">
          <p>410</p>
          <label>VILLAS</label>
        </div>
      </div>
      <div className="flex flex-row items-center gap-4 ">
        <img
          src={home}
          className=" w-16"
          alt="Strategic Realty Investment in Numbers"
        />
        <div className="flex flex-col text-left">
          <p>300</p>
          <label>HOMES</label>
        </div>
      </div>
      <div className="flex flex-row items-center gap-4 ">
        <img
          src={shophouse}
          className=" w-16"
          alt="Strategic Realty Investment in Numbers"
        />
        <div className="flex flex-col text-left">
          <p>160</p>
          <label>SHOPHOUSES</label>
        </div>
      </div>
      <div className="flex flex-row items-center gap-4 ">
        <img
          src={university}
          className=" w-16"
          alt="Strategic Realty Investment in Numbers"
        />
        <div className="flex flex-col text-left">
          <p>1</p>
          <label>UNIVERSITY</label>
        </div>
      </div>
    </div>
  );
}
