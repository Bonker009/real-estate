import { useState, useEffect } from "react";
import plot from "../../assets/images/plot.svg";
import cafe from "../../assets/images/coffee-shop.svg";
import school from "../../assets/images/school.svg";
import soccer from "../../assets/images/field.svg";
import villa from "../../assets/images/apartment.svg";
import home from "../../assets/images/homeh.svg";
import shophouse from "../../assets/images/shophouse.svg";
import university from "../../assets/images/university.svg";

export default function Number() {
  const [numbers, setNumbers] = useState({
    projectSize: 0,
    businesses: 0,
    schools: 0,
    soccerStadium: 0,
    villas: 0,
    homes: 0,
    shophouses: 0,
    university: 0,
  });

  useEffect(() => {
    // Define the final numbers
    const finalNumbers = {
      projectSize: 300,
      businesses: 120,
      schools: 2,
      soccerStadium: 25000,
      villas: 410,
      homes: 300,
      shophouses: 160,
      university: 1,
    };

    const interval = setInterval(() => {
      setNumbers((prevNumbers) => {
        // Check if any number has reached its final value
        const updatedNumbers = { ...prevNumbers };
        let allNumbersReachedFinal = true;

        for (const key in finalNumbers) {
          if (prevNumbers[key] < finalNumbers[key]) {
            updatedNumbers[key] = prevNumbers[key] + 1;
            allNumbersReachedFinal = false;
          }
        }

     
        if (allNumbersReachedFinal) {
          clearInterval(interval);
        }

        return updatedNumbers;
      });
    }, 20); 
  }, []);

  return (
    <div className="grid sm:grid-cols-4 grid-cols-2 place-items-center mt-10 gap-20">
      <div className="flex flex-row items-center gap-4 ">
        <img
          src={plot}
          className=" w-16"
          alt="Strategic Realty Investment in Numbers"
        />
        <div className="flex flex-col text-left">
          <p>{numbers.projectSize}</p>
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
          <p>{numbers.businesses}</p>
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
          <p>{numbers.schools}</p>
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
          <p>{numbers.soccerStadium}</p>
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
          <p>{numbers.villas}</p>
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
          <p>{numbers.homes}</p>
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
          <p>{numbers.shophouses}</p>
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
          <p>{numbers.university}</p>
          <label>UNIVERSITY</label>
        </div>
      </div>
    </div>
  );
}
