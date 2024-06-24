import { IoPlaySharp } from "react-icons/io5";

const BuyingCardMiddle = () => {
  return (
    <div className="w-[250px] md:w-[450px] mt-20 mr-20 md:mt-28 md:mr-28">
      <div className="relative w-full">
        <div className="relative">
          <img
            className="rounded-lg"
            src="../../../../public/Images/Landing/BuyingCardImage (4).jpeg"
            alt=""
          />
          <button className="w-10 h-10 bg-[#0059B1] rounded-[100%] absolute left-[60px] md:left-[90px] -top-5 flex items-center justify-center z-30">
            <IoPlaySharp className="text-2xl ml-1 text-white"></IoPlaySharp>
          </button>
        </div>
        <img
          className="w-[250px] md:w-[452px] shadow-xl max-h-[240px] rounded-lg absolute -top-20 -right-20  md:-top-28 md:-right-28"
          src="../../../../public/Images/Landing/BuyingCardImage (6).jpeg"
          alt=""
        />
      </div>
    </div>
  );
};

export default BuyingCardMiddle;
