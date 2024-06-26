import { Link, NavLink } from "react-router-dom";
import logo from "../../../public/Images/BuyerScreen/Logo.png";

const LandingNav = () => {
  const navItems = (
    <>
      <li>
        <NavLink
          to="/buyerScreen"
          className="hover:bg-transparent py-2 px-2 active:bg-transparent"
          style={({isActive}) => {
            return isActive
              ? {
                  color: "#0059b1",
                  borderBottom: "2px solid #0059b1",
                  borderRadius: "0px",
                  fontWeight: "500",
                  backgroundColor: "transparent",
                }
              : {};
          }}>
          Buy
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/sell"
          className="hover:bg-transparent py-2 px-2 active:bg-transparent"
          style={({isActive}) => {
            return isActive
              ? {
                  color: "#0059b1",
                  borderBottom: "2px solid #0059b1",
                  borderRadius: "0px",
                  fontWeight: "500",
                  backgroundColor: "transparent",
                }
              : {};
          }}>
          Sell
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/aboutUs"
          className="hover:bg-transparent py-2 px-2 active:bg-transparent"
          style={({isActive}) => {
            return isActive
              ? {
                  color: "#0059b1",
                  borderBottom: "2px solid #0059b1",
                  borderRadius: "0px",
                  fontWeight: "500",
                  backgroundColor: "transparent",
                }
              : {};
          }}>
          Services
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="bg-[#ecf5ff] font-inter">
      <div className="w-11/12 md:w-4/5 mx-auto py-2 ">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn-ghost lg:hidden p-1 rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-base">
                {navItems}
              </ul>
            </div>
            <div className="flex flex-col items-center lg:hidden">
              <Link to="/">
                <img
                  src={logo}
                  alt=""
                  className="w-8 lg:w-12 ml-2"
                />
              </Link>
            </div>
            <div className="hidden lg:flex">
              <ul className="flex gap-6 text-base">{navItems}</ul>
            </div>
          </div>

          <div className="lg:flex flex-col items-center hidden ">
            <Link to="/">
              <img
                src={logo}
                alt=""
                className="w-8 lg:w-12"
              />
            </Link>
          </div>

          <div className="text-base">
            <Link className="font-medium rounded-lg text-[#0059b1] bg-[#c5e2ff] px-8 py-2">Sign In</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingNav;
