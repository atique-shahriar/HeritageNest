const OurTeam = () => {
  return (
    <div className="w-11/12 md:w-4/5 mx-auto">
      <div className="flex items-center text-[#f06711]">
        <div className="border-t-4 border-[#f06711] w-10 mr-3"></div>
        <p className="text-lg font-medium">Our Team</p>
      </div>
      <h3 className="text-[#111827] font-bold text-2xl md:text-3xl lg:text-4xl mb-10">Discover the Faces Behind Our Success</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="max-h-[400px] md:max-h-[550px] ">
          <img
            className="h-full w-full object-cover object-top"
            src="../../../../public/Images/About/Team (1).jpeg"
            alt=""
          />
        </div>
        <div className="max-h-[400px] md:max-h-[550px]">
          <img
            className="h-full w-full object-cover object-top"
            src="../../../../public/Images/About/Team (2).jpeg"
            alt=""
          />
        </div>
        <div className="max-h-[400px] md:max-h-[550px]">
          <img
            className="h-full w-full object-cover object-top"
            src="../../../../public/Images/About/Team (3).jpeg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
