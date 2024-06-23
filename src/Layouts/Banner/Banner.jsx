import { PropTypes } from "prop-types";
const Banner = ({backgroundImage}) => {
  return (
    <div className="">
      <div
        className="hero h-[300px] lg:h-[400px]"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}>
        <div className="hero-overlay bg-[#2f345f] bg-opacity-40"></div>
      </div>
    </div>
  );
};

Banner.propTypes = {
  backgroundImage: PropTypes.string,
};

export default Banner;
