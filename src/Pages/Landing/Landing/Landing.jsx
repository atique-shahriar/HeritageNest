import { Helmet } from "react-helmet";
import LandingNav from "../../../Layouts/LandingNav/LandingNav";
import OtherServices from "../../../Layouts/OtherServices/OtherServices";
import LandingBanner from "../LandingBanner/LandingBanner";
import PropertyBuying from "../PropertyBuying/PropertyBuying";

const Landing = () => {
  return (
    <div>
      <Helmet>
        <title>Heritage Nest</title>
      </Helmet>
      <LandingNav></LandingNav>
      <LandingBanner></LandingBanner>
      <div className="w-11/12 md:w-4/5 mx-auto">
        <PropertyBuying></PropertyBuying>

        <OtherServices></OtherServices>
      </div>
    </div>
  );
};

export default Landing;
