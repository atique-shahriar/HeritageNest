import { IoSearchOutline } from "react-icons/io5";

const PropertyBuyingCard = () => {
  return (
    <div>
      <div className="flex items-center text-[#f06711]">
        <div className="border-t-4 border-[#f06711] w-10 mr-3"></div>
        <p className="text-lg font-medium">Property buying</p>
      </div>
      <h3 className="text-[#111827] font-bold text-2xl md:text-3xl lg:text-4xl my-4">Efficient and Transparent Home Buying Solutions</h3>
      <p className="text-[#667085] font-medium mt-4 pb-4">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
      <button className="flex justify-center h-10 mt-6 rounded-md items-center px-4 bg-[#e6eff7] text-[#0059b1] font-medium gap-4">
        <span>
          <IoSearchOutline className=" text-xl"></IoSearchOutline>
        </span>
        <span>Find Property</span>
      </button>
    </div>
  );
};

export default PropertyBuyingCard;
