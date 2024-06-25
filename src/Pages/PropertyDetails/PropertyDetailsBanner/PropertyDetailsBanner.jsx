import ImageSection from "./ImageSection";
import OvervieSection from "./OvervieSection";
import ToptitleSection from "./ToptitleSection";

const PropertyDetailsBanner = () => {
  return (
    <div className="w-11/12 md:w-4/5 mx-auto mt-10">
      {/* Top */}
      <ToptitleSection></ToptitleSection>
      <div className="grid lg:grid-cols-12 gap-6">
        {/* Left Side */}
        <div className="lg:col-span-8 w-full">
          <ImageSection></ImageSection>
          <OvervieSection></OvervieSection>
        </div>
        {/* Right Side */}
        <div className="lg:col-span-4 w-full h-80 bg-blue-400">
          <div>
            <p>Property Value</p>
            <h3>$ 300k -$ 310k</h3>
            <p>Your bid can not be than 10% of the property Minimum value.</p>
            <form></form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetailsBanner;
