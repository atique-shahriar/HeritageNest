import { Fade } from "react-awesome-reveal";
import photo1 from "../../../../public/Images/About/Team (1).jpeg";
import photo2 from "../../../../public/Images/About/Team (2).jpeg";
import photo3 from "../../../../public/Images/About/Team (3).jpeg";

const OurTeam = () => {
  return (
    <div>
      <div className="flex items-center text-[#f06711]">
        <div className="border-t-4 border-[#f06711] w-10 mr-3"></div>
        <p className="text-lg font-medium">Our Team</p>
      </div>
      <h3 className="text-[#111827] font-bold text-2xl md:text-3xl lg:text-4xl mb-10">Discover the Faces Behind Our Success</h3>
      <Fade>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="max-h-[400px] md:max-h-[550px] ">
            <img
              className="h-full w-full object-cover object-top"
              src={photo1}
              alt=""
            />
          </div>

          <div className="max-h-[400px] md:max-h-[550px]">
            <img
              className="h-full w-full object-cover object-top"
              src={photo2}
              alt=""
            />
          </div>
          <div className="max-h-[400px] md:max-h-[550px]">
            <img
              className="h-full w-full object-cover object-top"
              src={photo3}
              alt=""
            />
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default OurTeam;
