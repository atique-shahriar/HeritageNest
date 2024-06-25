import { PropTypes } from "prop-types";
import { IoIosSquare } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import { RiImage2Fill } from "react-icons/ri";

const PropertyCard = ({cardImage}) => {
  return (
    <div>
      <div className="relative">
        <img
          src={cardImage}
          alt=""
          className="h-[200px] w-full"
        />
        <div className="flex py-1 px-2 gap-2 items-center bg-white rounded-md absolute bottom-3 left-3">
          <RiImage2Fill className="text-[#ee6611] text-lg"></RiImage2Fill>
          <span className="font-semibold">20</span>
        </div>
      </div>
      <div className="p-2 bg-[#f9fafb]">
        <div className="mt-2 border-b-[1px] flex justify-between pb-1">
          <span className="text-[#00254a] bg-[#c5e2ff] px-2 py-1 rounded-sm">Apartment</span>
          <span className="flex items-center gap-2 font-medium">
            <IoIosSquare className="text-xs text-[#ee6611] "></IoIosSquare> Ready to Move
          </span>
        </div>
        <div>
          <h6 className="font-semibold text-xl text-[#111827]">SunnySlope Suites</h6>
          <p className="flex gap-1 items-center">
            <IoLocationOutline className="text-[#ee6611]"></IoLocationOutline>
            <span className="text-base text-[#6B7280]">Meadowshire Park, Greenfield, USA</span>
          </p>
          <h6 className="font-semibold text-2xl text-[#111827] mt-3">$ 250000</h6>
        </div>
      </div>
    </div>
  );
};

PropertyCard.propTypes = {
  cardImage: PropTypes.string,
};

export default PropertyCard;
