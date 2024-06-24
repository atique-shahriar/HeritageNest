import { PropTypes } from "prop-types";
import { RiHome6Line } from "react-icons/ri";

const OtherServicesCard = ({title, subtitle}) => {
  return (
    <div className="bg-[#ecf5ff] p-4 lg:p-6 flex gap-4 rounded-md">
      <div>
        <div className="h-8 w-8 lg:h-12 lg:w-12  bg-[#ee6611] flex items-center justify-center text-lg lg:text-2xl text-white rounded-md">
          <RiHome6Line></RiHome6Line>
        </div>
      </div>
      <div>
        <h5 className="text-[#111827] font-semibold text-lg lg:text-xl">{title}</h5>
        <p className="text-[#818181] font-medium text-base mt-1">{subtitle}</p>
      </div>
    </div>
  );
};
OtherServicesCard.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

export default OtherServicesCard;
