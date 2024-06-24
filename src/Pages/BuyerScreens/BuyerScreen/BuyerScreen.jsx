import backgroundImage from "../../../../public/Images/BuyerScreen/Banner.jpeg";
import Banner from "../../../Layouts/Banner/Banner";
import FindProperty from "../FindProperty/FindProperty";
import FlatListedCount from "../FlatListedCount/FlatListedCount";
import PopularProperties from "../PopularProperties/PopularProperties";

const BuyerScreen = () => {
  return (
    <div>
      <Banner backgroundImage={backgroundImage}></Banner>
      <FindProperty></FindProperty>
      <div className="mt-[350px] md:mt-48">
        <FlatListedCount></FlatListedCount>
        <PopularProperties></PopularProperties>
      </div>
    </div>
  );
};

export default BuyerScreen;
