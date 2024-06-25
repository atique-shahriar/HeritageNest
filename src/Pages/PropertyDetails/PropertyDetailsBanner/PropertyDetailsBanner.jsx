import { MdBalcony, MdBathtub, MdOutlineBed, MdShelves } from "react-icons/md";

const PropertyDetailsBanner = () => {
  return (
    <div className="w-11/12 md:w-4/5 mx-auto">
      <div className="grid lg:grid-cols-12 gap-6">
        <div className="lg:col-span-8 w-full ">
          {/* Image */}
          <div className="flex flex-col gap-4">
            <div>
              <img
                src="../../../../public/Images/Property/Property (1).jpeg"
                alt=""
              />
            </div>
            <div className="grid grid-cols-11 gap-4">
              <div className="col-span-4">
                <img
                  src="../../../../public/Images/Property/Property (3).jpeg"
                  alt=""
                />
              </div>
              <div className="col-span-4">
                <img
                  src="../../../../public/Images/Property/Property (4).jpeg"
                  alt=""
                />
              </div>
              <div className="col-span-3 relative">
                <img
                  className="h-full"
                  src="../../../../public/Images/Property/Property (2).jpeg"
                  alt=""
                />
                <div className="bg-black absolute inset-0 h-full w-full bg-opacity-50 flex items-center justify-center">
                  <button className="text-white text-xl font-semibold">View More</button>
                </div>
              </div>
            </div>
          </div>
          {/* OverView */}
          <div>
            <div className="border mt-4 p-4 space-y-5 bg-[#e5e7eb]">
              <h4 className="text-2xl font-semibold">Overview</h4>
              <div className="grid grid-cols-2  md:grid-cols-4 gap-2 bg-white p-4 v shadow-gray-400 shadow-md">
                <p className="flex items-center gap-2">
                  <MdOutlineBed className="text-2xl"></MdOutlineBed>
                  <span className="font-bold">2 </span>Beds
                </p>
                <p className="flex items-center gap-2">
                  <MdBathtub className="text-2xl"></MdBathtub> <span className="font-bold">2 </span>Bath
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
              <div>
                <div>
                  <p>A</p>
                  <p>A</p>
                  <p>A</p>
                </div>
              </div>
              <div>
                <p>A</p>
                <p>A</p>
              </div>
              <div>
                <p>A</p>
                <p>A</p>
              </div>
              <div>
                <p>A</p>
                <p>A</p>
              </div>
              <div>
                <p>A</p>
                <p>A</p>
              </div>
              <div>
                <p>A</p>
                <p>A</p>
              </div>
              <div>
                <p>A</p>
                <p>A</p>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-4 w-full h-80 bg-blue-400"></div>
      </div>
    </div>
  );
};

export default PropertyDetailsBanner;
