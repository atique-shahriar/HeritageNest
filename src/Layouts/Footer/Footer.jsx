import { Link } from "react-router-dom";
import logo from "../../../public/Images/BuyerScreen/Logo.png";

const Footer = () => {
  const footerData = [
    ["Product", "Overview", "Features", "Solutions", "Tutorials", "Pricing", "Releases"],
    ["Company", "About Us", "Careers", "Press", "News", "Media Kit", "Contact"],
    ["Resources", "Blog", "Newsletter", "Events", "Help Centre", "Tutorials", "Support"],
    ["Social", "Twitter", "LinkedIn", "Facebook", "Github", "AngelList", "Dribble"],
    ["Legal", "Terms", "Privacy", "Cookies", "Licenses", "Settings", "Contacts"],
  ];
  return (
    <div className="bg-[#ecf5ff] font-inter">
      <div className="w-11/12 md:w-4/5 mx-auto py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-20">
          <div className="lg:col-span-4 flex flex-col items-center lg:items-start">
            <Link to="/">
              <img
                className="w-14"
                src={logo}
                alt=""
              />
            </Link>
            <p className="text-[#475467] font-medium mt-4 text-center lg:text-justify">Design amazing digital experiences that create more happy in the world.</p>
          </div>
          <div className="lg:col-span-8 grid grid-cols-1 ">
            <div className="hidden md:grid md:grid-cols-5">
              {footerData.map((list, indx) => (
                <ul
                  key={indx}
                  className="space-y-2">
                  {list.map((item, indx) => (
                    <li
                      key={indx}
                      className={indx == 0 ? "font-semibold text-[#667085] text-sm" : "text-[#475467] font-semibold text-base"}>
                      {item === "About Us" ? (
                        <Link to="/aboutUs">{item}</Link>
                      ) : (
                        <a
                          href="#"
                          onClick={(e) => e.preventDefault()}>
                          {item}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              ))}
            </div>

            <div className="flex items-center justify-between md:hidden">
              {footerData.slice(0, 3).map((list, indx) => (
                <ul
                  key={indx}
                  className="space-y-2">
                  {list.map((item, indx) => (
                    <li
                      key={indx}
                      className={indx == 0 ? "font-semibold text-[#667085] text-sm" : "text-[#475467] font-semibold text-base"}>
                      {item === "About Us" ? (
                        <Link to="/aboutUs">{item}</Link>
                      ) : (
                        <a
                          href="#"
                          onClick={(e) => e.preventDefault()}>
                          {item}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              ))}
            </div>

            <div className="flex items-center justify-around md:hidden mt-8">
              {footerData.slice(3).map((list, indx) => (
                <ul
                  key={indx}
                  className="space-y-2">
                  {list.map((item, indx) => (
                    <li
                      key={indx}
                      className={indx == 0 ? "font-semibold text-[#667085] text-sm" : "text-[#475467] font-semibold text-base"}>
                      <a
                        href="#"
                        onClick={(e) => e.preventDefault()}>
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
