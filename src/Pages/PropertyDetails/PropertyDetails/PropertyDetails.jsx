import { Fade } from "react-awesome-reveal";
import { Helmet } from "react-helmet";
import Navbar from "../../../Layouts/Navbar/Navbar";
import OtherServices from "../../../Layouts/OtherServices/OtherServices";
import Amenities from "../Amenities/Amenities";
import NearbyProperty from "../NearbyProperty/NearbyProperty";
import PropertyDetailsBanner from "../PropertyDetailsBanner/PropertyDetailsBanner";

const PropertyDetails = () => {
  return (
    <div>
      <Helmet>
        <title>Heritage Nest | Property Details</title>
      </Helmet>
      <Navbar></Navbar>
      <div className="w-11/12 md:w-4/5 mx-auto">
        <PropertyDetailsBanner></PropertyDetailsBanner>
        <Fade>
          <Amenities></Amenities>
        </Fade>
        <OtherServices></OtherServices>
        <Fade>
          <NearbyProperty></NearbyProperty>
        </Fade>
      </div>
    </div>
  );
};

export default PropertyDetails;
