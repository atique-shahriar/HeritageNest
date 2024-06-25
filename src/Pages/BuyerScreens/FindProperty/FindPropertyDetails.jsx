import { BiHomeAlt, BiSolidDollarCircle } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";
import { IoLocationOutline, IoSearchOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const FindPropertyDetails = () => {
  return (
    <div className="pt-8">
      <form>
        <div className="relative pb-4">
          <label className=" flex items-center ">
            <input
              type="text"
              className="h-10 w-full border rounded-lg px-12"
              placeholder="Search Properties"
            />
            <IoSearchOutline className="text-gray-500 text-xl absolute left-4"></IoSearchOutline>
          </label>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4 lg:gap-8">
          <div>
            <p className="flex gap-2 items-center pb-2 font-semibold">
              <IoLocationOutline className="text-[#ee6611]"></IoLocationOutline>
              <span>Your Location</span>
            </p>
            <div className="relative w-full">
              <select className="custom-select border rounded-lg w-full h-10 px-4 bg-gray-200 text-gray-800 appearance-none">
                <option
                  disabled
                  selected></option>
                <option>Han Solo</option>
                <option>Greedo</option>
              </select>
              <IoIosArrowDown className="absolute top-1/2 right-3 h-4 w-4 text-[#ee6611] transform -translate-y-1/2 pointer-events-none"></IoIosArrowDown>
            </div>
          </div>
          <div>
            <p className="flex gap-2 items-center pb-2 font-semibold">
              <BiHomeAlt className="text-[#ee6611]"></BiHomeAlt>
              <span>Property Types</span>
            </p>
            <div className="relative w-full">
              <select className="custom-select border rounded-lg w-full h-10 px-4 bg-gray-200 text-gray-800 appearance-none">
                <option
                  disabled
                  selected></option>
                <option>Han Solo</option>
                <option>Greedo</option>
              </select>
              <IoIosArrowDown className="absolute top-1/2 right-3 h-4 w-4 text-[#ee6611] transform -translate-y-1/2 pointer-events-none"></IoIosArrowDown>
            </div>
          </div>
          <div>
            <p className="flex gap-2 items-center pb-2 font-semibold">
              <BiSolidDollarCircle className="text-[#ee6611]"></BiSolidDollarCircle>
              <span>Budget</span>
            </p>
            <div>
              <input
                type="text"
                className=" rounded-lg w-full  h-10 px-4 bg-gray-200 text-gray-800 "
              />
            </div>
          </div>
        </div>
        <Link to="/propertyDetails">
          <button className="flex justify-center h-10 mt-6 rounded-md items-center w-full bg-[#0059b1] text-white font-medium gap-4">
            <span>
              <IoSearchOutline className="text-white text-xl"></IoSearchOutline>
            </span>
            <span>Find Property</span>
          </button>
        </Link>
      </form>
    </div>
  );
};

export default FindPropertyDetails;
