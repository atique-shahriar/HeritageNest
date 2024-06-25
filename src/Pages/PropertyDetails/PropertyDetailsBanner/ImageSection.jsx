const ImageSection = () => {
  return (
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
  );
};

export default ImageSection;
