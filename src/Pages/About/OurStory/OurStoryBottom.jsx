import { Fade, Zoom } from "react-awesome-reveal";
import image1 from "../../../../public/Images/About/OurStory (1).jpeg";

const OurStoryBottom = () => {
  return (
    <div className="relative mb-10  lg:mb-40">
      <div className="relative mb-10 lg:mb-0 flex justify-end">
        <div className="relative max-h-[600px] lg:w-3/4">
          <div>
            <img
              src={image1}
              alt="Our Story"
              className="lg:max-h-[600px] w-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-60"></div>
          </div>
          <div className="absolute top-1/2 left-1/2  transform -translate-x-1/2  -translate-y-1/2">
            <Zoom>
              <img
                className="w-32 md:w-36 lg:w-44"
                src={image1}
                alt="Overlay Image"
              />
            </Zoom>
          </div>
        </div>
      </div>
      <Fade>
        <div className="bg-[#fdf0e7] p-6 lg:absolute lg:top-[100%] lg:transform lg:-translate-y-1/2 lg:w-1/2">
          <div className="flex items-center text-[#f06711]">
            <div className="border-t-4 border-[#f06711] w-10 mr-3"></div>
            <p className="text-lg font-medium">Mission Statement</p>
          </div>
          <h3 className="text-[#111827] font-bold text-2xl md:text-3xl lg:text-4xl my-4">Efficient and Transparent Home Buying Solutions</h3>
          <p className="text-[#667085] font-medium mt-4 pb-4">To bridge the miles with smiles, Heritage-Nest pledges to be the golden thread connecting NRIs to their homeland, through trust, transparency, and tailored real estate solutions.</p>
        </div>
      </Fade>
    </div>
  );
};

export default OurStoryBottom;
