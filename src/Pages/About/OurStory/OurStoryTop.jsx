import image2 from "../../../../public/Images/About/OurStory (2).jpeg";

const OurStoryTop = () => {
  return (
    <div className="relative mb-10  lg:mb-40">
      <div className="relative mb-10 lg:mb-0">
        <div className="relative max-h-[600px] lg:w-3/4">
          <img
            src={image2}
            alt="Our Story"
            className=" lg:max-h-[600px] w-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>
        <div className="absolute top-10 left-10">
          <img
            className="w-2/5 md:w-1/3"
            src={image2}
            alt="Overlay Image"
          />
        </div>
      </div>
      <div className="bg-[#ecf5ff] p-4 lg:absolute lg:top-[100%] lg:left-1/2 lg:transform lg:-translate-y-1/2 lg:w-1/2">
        <div className="flex items-center text-[#f06711]">
          <div className="border-t-4 border-[#f06711] w-10 mr-3"></div>
          <p className="text-lg font-medium">Our Story</p>
        </div>
        <h3 className="text-[#111827] font-bold text-2xl md:text-3xl lg:text-4xl my-4">Efficient and Transparent Home Buying Solutions</h3>
        <p className="text-[#667085] font-medium mt-4 pb-4">In the symphony of bustling markets and serene landscapes, Heritage-Nest was born—a vision to</p>
      </div>
    </div>
  );
};

export default OurStoryTop;
