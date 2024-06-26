import { Fade, Zoom } from "react-awesome-reveal";
import img1 from "../../../../public/Images/Property/Property (1).jpeg";
import img2 from "../../../../public/Images/Property/Property (2).jpeg";
import img3 from "../../../../public/Images/Property/Property (3).jpeg";
import img4 from "../../../../public/Images/Property/Property (4).jpeg";

const ImageSection = () => {
  return (
    <div className="flex flex-col gap-4">
      <Zoom>
        <div>
          <img
            src={img1}
            alt=""
          />
        </div>
      </Zoom>
      <div className="grid grid-cols-11 gap-4">
        <div className="col-span-4">
          <Fade>
            <img
              src={img3}
              alt=""
            />
          </Fade>
        </div>
        <div className="col-span-4">
          <Fade>
            <img
              src={img4}
              alt=""
            />
          </Fade>
        </div>
        <div className="col-span-3 relative">
          <Fade>
            <img
              className="h-full"
              src={img2}
              alt=""
            />
            <div className="bg-black absolute inset-0 h-full w-full bg-opacity-50 flex items-center justify-center">
              <button className="text-white text-xl font-semibold">View More</button>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default ImageSection;
