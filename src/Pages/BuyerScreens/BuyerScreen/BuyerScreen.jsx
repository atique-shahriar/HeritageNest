import backgroundImage from "../../../../public/Images/BuyerScreen/Banner.jpeg";
import Banner from "../../../Layouts/Banner/Banner";
import FlatListed from "../../../Layouts/FlatListed/FlatListed";
import Testimonials from "../../../Layouts/Testimonials/Testimonials";
import FindProperty from "../FindProperty/FindProperty";
import NewListedProperty from "../NewListedPropperty/NewListedProperty";
import PopularProperties from "../PopularProperties/PopularProperties";

const BuyerScreen = () => {
  return (
    <div>
      <Banner backgroundImage={backgroundImage}></Banner>
      <FindProperty></FindProperty>
      <div className="w-11/12 md:w-4/5 mx-auto mt-[350px] md:mt-48">
        <FlatListed></FlatListed>
      </div>
      <div>
        <PopularProperties></PopularProperties>
      </div>
      <div>
        <NewListedProperty></NewListedProperty>
      </div>
      <div>
        <Testimonials></Testimonials>
      </div>
    </div>
  );
};

export default BuyerScreen;
