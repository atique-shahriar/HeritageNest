import { MdBalcony, MdOutlineBathtub, MdOutlineBed, MdShelves } from "react-icons/md";

const OvervieSection = () => {
  return (
    <div className="border border-[#e5e7eb] mt-4 p-6 space-y-5 bg-[#f9fafb] rounded-lg">
      <h4 className="text-2xl font-semibold">Overview</h4>
      <div className="grid grid-cols-2  md:grid-cols-4 gap-2 bg-white p-4 v shadow-gray-400 shadow-md">
        <p className="flex items-center gap-2">
          <MdOutlineBed className="text-2xl"></MdOutlineBed>
          <span className="font-bold">2 </span>Beds
        </p>
        <p className="flex items-center gap-2">
          <MdOutlineBathtub className="text-2xl"></MdOutlineBathtub> <span className="font-bold">2 </span>Bath
        </p>
        <p className="flex items-center gap-2">
          <MdBalcony className="text-2xl"></MdBalcony>
          <span className="font-bold">2 </span>Balcony
        </p>
        <p className="flex items-center gap-2">
          <MdShelves className="text-2xl"></MdShelves>
          <span>Fully Furnished</span>
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="space-y-1">
          <p className="text-[#5c5c5c]">Carpet Area</p>
          <p className="text-[#101010] font-medium">2000 sqft</p>
          <p className="text-[#535353] text-sm">$ 225/sqft</p>
        </div>
        <div className="space-y-1">
          <p className="text-[#5c5c5c]">Floor</p>
          <p className="text-[#101010] font-medium">Second (Out of the 6th floor)</p>
        </div>
        <div className="space-y-1">
          <p className="text-[#5c5c5c]">Transaction Type</p>
          <p className="text-[#101010] font-medium">Ready to move</p>
        </div>
        <div className="space-y-1">
          <p className="text-[#5c5c5c]">Lift</p>
          <p className="text-[#101010] font-medium">1</p>
        </div>
        <div className="space-y-1">
          <p className="text-[#5c5c5c]">Facing</p>
          <p className="text-[#101010] font-medium">North - East</p>
        </div>
        <div className="space-y-1">
          <p className="text-[#5c5c5c]">Additional Rooms</p>
          <p className="text-[#101010] font-medium">1 servant room & 1 guest room</p>
        </div>
        <div className="space-y-1">
          <p className="text-[#5c5c5c]">Age of construction</p>
          <p className="text-[#101010] font-medium">New Construction</p>
        </div>
      </div>
    </div>
  );
};

export default OvervieSection;
