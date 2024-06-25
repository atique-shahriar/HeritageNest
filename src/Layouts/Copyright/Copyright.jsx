import { FaAngellist, FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

const Copyright = () => {
  return (
    <div className="bg-[#ecf5ff]">
      <div className="flex justify-between items-center  w-11/12 md:w-4/5 mx-auto py-8 border-t border-t-[#c5e2ff]">
        <div className="text-[#667085]">© 2024 Heritage- Nest . All rights reserved.</div>
        <div className="flex gap-6">
          <FaTwitter className="text-2xl text-[#0059b1]"></FaTwitter>
          <FaLinkedin className="text-2xl text-[#0059b1]"></FaLinkedin>
          <FaFacebook className="text-2xl text-[#0059b1]"></FaFacebook>
          <FaAngellist className="text-2xl text-[#0059b1]"></FaAngellist>
        </div>
      </div>
    </div>
  );
};

export default Copyright;
