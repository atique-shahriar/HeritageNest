import { IoSearchOutline } from "react-icons/io5";

const LandingBanner = () => {
  return (
    <div className="relative">
      <video
        className="videoTag w-full"
        autoPlay
        loop
        muted>
        <source
          src="../../../../public/Images/Landing/Banner.mp4"
          type="video/mp4"
        />
      </video>
      <div className="max-w-screen-md text-center mx-auto flex flex-col items-center text-white absolute  inset-0 justify-center">
        <h2 className="text-6xl font-bold leading-[96px]">Your Portal to India&apos;s Exquisite Real Estate</h2>
        <p>Seamlessly connecting you to the heartbeat of India&apos;s prime properties.</p>
        <button className="flex justify-center h-10 mt-6 rounded-md items-center px-4 bg-[#0059b1] text-white font-medium gap-4">
          <span>
            <IoSearchOutline className="text-white text-xl"></IoSearchOutline>
          </span>
          <span>Find Property</span>
        </button>
      </div>
    </div>
  );
};

export default LandingBanner;
