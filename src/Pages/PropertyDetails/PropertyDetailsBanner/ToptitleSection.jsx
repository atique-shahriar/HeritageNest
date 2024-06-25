import { IoLocationOutline } from "react-icons/io5";

const ToptitleSection = () => {
  return (
    <div className="grid lg:grid-cols-12">
      <div className="lg:col-span-8 w-full">
        <div className="flex justify-between gap-4 border-b pb-4 mb-4">
          <div>
            <h4 className="text-[#010101] font-semibold text-lg md:text-xl">3 BHK Builder Floor for Sale in Site Ram Bazar Hyderabad</h4>
            <p className="text-[#606060] mt-2 text-lg flex items-center gap-2">
              <IoLocationOutline className="text-2xl text-[#ee6611] "></IoLocationOutline>Meadowshire Park. Greenfield, USA
            </p>
          </div>
          <div>
            <p className="text-[#010101] font-extrabold text-2xl lg:text-3xl lg:mr-16">$300K</p>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default ToptitleSection;
