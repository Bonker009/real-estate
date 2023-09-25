import PropTypes from "prop-types";

Item.propTypes = {
  item: PropTypes.shape({
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
  }).isRequired,
  alt: PropTypes.string.isRequired,
};

export default function Item(props) {
  return (
    <div className="w-1/2 text-center flex flex-col items-center gap-2 hover:shadow-2xl transition-all duration-500 rounded-lg">
      <img src={props.item.img} alt={props.alt} />
      <h1 className="font-semibold text-slate-800 hover:text-gold transition-colors duration-300 text-lg">
        {props.item.title}
      </h1>
      <p className="w-4/5 text-md text-slate-600">{props.item.desc}</p>
    </div>
  );
}
