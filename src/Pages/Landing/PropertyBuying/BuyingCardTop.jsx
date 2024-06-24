import { PropTypes } from "prop-types";
import { IoPlaySharp } from "react-icons/io5";

const BuyingCardTop = ({firstImage, secondImage}) => {
  return (
    <div className="w-[250px] md:w-[450px] ">
      <div className="relative w-full">
        <div className="relative">
          <img
            className="rounded-lg "
            src={firstImage}
            alt=""
          />
          <button className="w-10 h-10 z-10 bg-[#0059B1] rounded-[100%] absolute top-[52%] md:top-[65%] -right-5 flex items-center justify-center">
            <IoPlaySharp className="text-2xl ml-1 text-white"></IoPlaySharp>
          </button>
        </div>
        <img
          className="w-[250px] md:w-[450px] max-h-[240px] rounded-lg absolute top-[60%] md:top-[70%] left-[80px]  md:left-[110px] shadow-xl"
          src={secondImage}
          alt=""
        />
      </div>
    </div>
  );
};
BuyingCardTop.propTypes = {
  firstImage: PropTypes.string,
  secondImage: PropTypes.string,
};

export default BuyingCardTop;
