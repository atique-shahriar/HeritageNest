import OtherServices from "../../../Layouts/OtherServices/OtherServices";
import LandingBanner from "../LandingBanner/LandingBanner";
import PropertyBuying from "../PropertyBuying/PropertyBuying";

const Landing = () => {
  return (
    <div>
      <LandingBanner></LandingBanner>
      <PropertyBuying></PropertyBuying>
      <OtherServices></OtherServices>
    </div>
  );
};

export default Landing;
