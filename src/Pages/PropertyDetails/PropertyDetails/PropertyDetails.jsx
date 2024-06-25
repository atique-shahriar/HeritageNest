import OtherServices from "../../../Layouts/OtherServices/OtherServices";
import Amenities from "../Amenities/Amenities";
import NearbyProperty from "../NearbyProperty/NearbyProperty";
import PropertyDetailsBanner from "../PropertyDetailsBanner/PropertyDetailsBanner";

const PropertyDetails = () => {
  return (
    <div>
      <PropertyDetailsBanner></PropertyDetailsBanner>
      <Amenities></Amenities>
      <div>
        <OtherServices></OtherServices>
      </div>
      <NearbyProperty></NearbyProperty>
    </div>
  );
};

export default PropertyDetails;
