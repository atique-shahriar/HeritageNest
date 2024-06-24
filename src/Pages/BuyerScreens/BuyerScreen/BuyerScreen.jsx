import backgroundImage from "../../../../public/Images/BuyerScreen/Banner.jpeg";
import Banner from "../../../Layouts/Banner/Banner";
import FindProperty from "../FindProperty/FindProperty";

const BuyerScreen = () => {
  return (
    <div>
      <Banner backgroundImage={backgroundImage}></Banner>
      <FindProperty></FindProperty>
    </div>
  );
};

export default BuyerScreen;
