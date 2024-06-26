import { Fade } from "react-awesome-reveal";
import consultImg from "../../../../public/Images/About/Consultation.jpeg";
const Consultation = () => {
  return (
    <div className="mt-8 mb-16">
      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <div className="flex items-center text-[#f06711]">
            <div className="border-t-4 border-[#f06711] w-10 mr-3"></div>
            <p className="text-lg font-medium">Meet the Team For Book Consultation</p>
          </div>
          <h3 className="text-[#111827] font-bold text-2xl md:text-3xl lg:text-4xl my-4">Meet the stewards of your heritage journey</h3>
          <p className="text-[#667085] font-medium mt-4 pb-4">each member an embodiment of expertise and warmth, dedicated to guiding you home, every step of the way.</p>
          <button className=" mt-6 rounded-sm  px-4 py-2 text-white bg-[#0059b1] font-medium gap-4">Book Consultation Now</button>
        </div>
        <div className="md:col-span-1 ">
          <Fade>
            <img
              className=""
              src={consultImg}
              alt=""
            />
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Consultation;
