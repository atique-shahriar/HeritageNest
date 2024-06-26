import { Bounce } from "react-awesome-reveal";
import OtherServicesCard from "../../Components/OtherServicesCard";

const OtherServices = () => {
  return (
    <Bounce>
      <div className="mt-16 mb-10 ">
        <div>
          <h3 className="text-center text-[#181818] font-semibold text-4xl mb-10">Other Services</h3>
        </div>
        <div className="grid  md:grid-cols-2 lg:grid-cols-3 gap-6">
          <OtherServicesCard
            title={"Advanced Property Search"}
            subtitle={"Effortlessly find your dream property with advanced search filters."}></OtherServicesCard>
          <OtherServicesCard
            title={"Virtual Tours and Multimedia"}
            subtitle={"Explore properties through immersive virtual tours and HD photos."}></OtherServicesCard>
          <OtherServicesCard
            title={"Secure Online Transactions"}
            subtitle={"Ensure secure transactions and e-sign documents seamlessly online."}></OtherServicesCard>
        </div>
      </div>
    </Bounce>
  );
};

export default OtherServices;
