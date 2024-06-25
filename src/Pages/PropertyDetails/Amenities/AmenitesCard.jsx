import { PropTypes } from "prop-types";
const AmenitesCard = ({image, text}) => {
  return (
    <div className="flex items-center gap-2 ">
      <div className="min-h-10 min-w-10 rounded-sm bg-white flex items-center justify-center">
        <img
          src={image}
          className="  "
        />
      </div>
      <p className="text-[#101010] font-medium">{text}</p>
    </div>
  );
};

AmenitesCard.propTypes = {
  image: PropTypes.string,
  text: PropTypes.string,
};
export default AmenitesCard;
