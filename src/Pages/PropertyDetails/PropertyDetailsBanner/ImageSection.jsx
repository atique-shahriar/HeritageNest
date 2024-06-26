import img1 from "../../../../public/Images/Property/Property (1).jpeg";
import img2 from "../../../../public/Images/Property/Property (2).jpeg";
import img3 from "../../../../public/Images/Property/Property (3).jpeg";
import img4 from "../../../../public/Images/Property/Property (4).jpeg";

const ImageSection = () => {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <img
          src={img1}
          alt=""
        />
      </div>
      <div className="grid grid-cols-11 gap-4">
        <div className="col-span-4">
          <img
            src={img3}
            alt=""
          />
        </div>
        <div className="col-span-4">
          <img
            src={img4}
            alt=""
          />
        </div>
        <div className="col-span-3 relative">
          <img
            className="h-full"
            src={img2}
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
