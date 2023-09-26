import { useState } from "react";
import PropTypes from "prop-types";

export default function Testimonial(props) {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  return (
    <div className="flex sm:flex-row flex-col sm:items-center rounded-md overflow-hidden transition-all duration-500  justify-center gap-5 mb-10 hover:shadow-2xl ">
      <img className="sm:w-1/2 " src={props.image} alt="" />
      <div className="sm:w-1/2 sm:py-10 p-5">
        <h1 className="text-gold font-semibold text-xl">{props.title}</h1>
        <p className="text-sm text-slate-700 my-2">{props.date}</p>
        <p className="text-slate-700 my-2">{props.desc}</p>
        <p>
          {showFullDescription
            ? props.fullDesc
            : props.fullDesc.slice(0, 100) + (props.fullDesc.length > 100 ? "..." : "")}
        </p>
        {props.fullDesc.length > 100 && (
          <button
            className="text-gold font-semibold cursor-pointer my-5"
            onClick={toggleDescription}
          >
            {showFullDescription ? "See Less" : "See More"}
          </button>
        )}
      </div>
    </div>
  );
}

Testimonial.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  fullDesc: PropTypes.string.isRequired,
};
