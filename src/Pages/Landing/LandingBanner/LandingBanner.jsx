import { IoSearchOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import videoBanner from "../../../../public/Images/Landing/Banner.mp4";

const LandingBanner = () => {
  return (
    <div className="relative">
      <video
        className="videoTag w-full"
        autoPlay
        loop
        muted>
        <source
          src={videoBanner}
          type="video/mp4"
        />
      </video>
      <div className="max-w-screen-md text-center mx-auto flex flex-col items-center text-white absolute  inset-0 justify-center">
        <h2 className="text-2xl md:text-6xl font-bold md:leading-[60px] mb-4">Your Portal to India&apos;s Exquisite Real Estate</h2>
        <p>Seamlessly connecting you to the heartbeat of India&apos;s prime properties.</p>

        <Link to="/buyerScreen">
          <button className="flex justify-center h-10 mt-4 md:mt-6 rounded-md items-center px-4 bg-[#0059b1] text-white font-medium gap-4">
            <span>
              <IoSearchOutline className="text-white text-xl"></IoSearchOutline>
            </span>
            <span>Find Property</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default LandingBanner;
