import PropTypes from "prop-types";

export default function Report(props) {
  return (
    <figure className="  flex flex-col items-center gap-4 hover:shadow-[0_45px_60px_15px_rgba(0,0,0,0.3)] transition-shadow duration-700 ease-in-out shadow-black rounded-md cursor-pointer overflow-hidden transform">
      <img
        className=" h-80 object-cover w-full  transition-transform duration-300 ease-in-out hover:scale-105 rounded-md"
        src={props.image}
        alt={props.title}
      />
      <figcaption className="p-4 text-center">
        <h3 className="text-center text-2xl transition-colors duration-300 hover:text-gold">
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
