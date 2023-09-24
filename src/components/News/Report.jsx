import PropTypes from "prop-types";

export default function Report(props) {
  return (
    <figure className="relative group flex flex-col items-center gap-4 bg-white overflow-hidden transition-shadow duration-700 ease-in-out hover:shadow-[0_45px_60px_15px_rgba(0,0,0,0.3)] shadow-black rounded-md cursor-pointer">
      <img
        className="h-80 object-cover w-full transition-scale duration-300 ease-in-out hover:scale-105 rounded-md"
        src={props.image}
        alt={props.title}
        style={{
          filter: "brightness(0.9)",
          objectPosition:"top",

          backgroundSize: "cover",
        }}
      />

      <figcaption className="p-4 text-center">
        <h3 className="text-center text-2xl text-slate-700 transition-colors duration-300 font-semibold hover:text-gold">
          {props.title}
        </h3>
        <p className="text-gold text-lg my-2">{props.date}</p>
        <p>{props.description}</p>
      </figcaption>
    </figure>
  );
}

Report.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
