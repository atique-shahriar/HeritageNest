import { Fade } from "react-awesome-reveal";
import BidPropertyection from "./BidPropertyection";
import ImageSection from "./ImageSection";
import MapSection from "./MapSection";
import OvervieSection from "./OvervieSection";
import ToptitleSection from "./ToptitleSection";

const PropertyDetailsBanner = () => {
  return (
    <div className=" mt-10 mb-10">
      <ToptitleSection></ToptitleSection>
      <div className="grid lg:grid-cols-12 gap-6">
        {/* Left Side */}
        <div className="lg:col-span-8 w-full">
          <ImageSection></ImageSection>
          <Fade>
            <OvervieSection></OvervieSection>
          </Fade>
        </div>
        {/* Right Side */}
        <div className="lg:col-span-4 w-full">
          <Fade>
            <BidPropertyection></BidPropertyection>
          </Fade>
          <Fade>
            <MapSection></MapSection>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetailsBanner;
