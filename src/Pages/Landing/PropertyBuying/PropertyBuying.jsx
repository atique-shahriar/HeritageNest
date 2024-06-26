import { Fade } from "react-awesome-reveal";
import img1 from "../../../../public/Images/Landing/BuyingCardImage (1).jpeg";
import img2 from "../../../../public/Images/Landing/BuyingCardImage (2).jpeg";
import img3 from "../../../../public/Images/Landing/BuyingCardImage (3).jpeg";
import img5 from "../../../../public/Images/Landing/BuyingCardImage (5).jpeg";
import ProperTyBuyingCard from "../../../Components/PropertyBuyingCard";
import BuyingCardMiddle from "./BuyingCardMiddle";
import BuyingCardTop from "./BuyingCardTop";

const PropertyBuying = () => {
  return (
    <div className="mt-16 mb-16 lg:mb-40">
      <div className="flex flex-col lg:flex-row  justify-between gap-24 md:gap-32 lg:gap-52 xl:gap-64 mb-16 lg:mb-40">
        <Fade>
          <BuyingCardTop
            firstImage={img3}
            secondImage={img2}></BuyingCardTop>
          <ProperTyBuyingCard></ProperTyBuyingCard>
        </Fade>
      </div>

      <div className="flex flex-col-reverse lg:flex-row justify-between gap-6 lg:gap-24 xl:gap-44 mb-16">
        <Fade>
          <ProperTyBuyingCard></ProperTyBuyingCard>
          <BuyingCardMiddle></BuyingCardMiddle>
        </Fade>
      </div>

      <div className="flex flex-col lg:flex-row  md:items-center lg:items-start lg:justify-between gap-24 md:gap-32 lg:gap-52 xl:gap-64">
        <Fade>
          <BuyingCardTop
            firstImage={img1}
            secondImage={img5}></BuyingCardTop>
          <ProperTyBuyingCard></ProperTyBuyingCard>
        </Fade>
      </div>
    </div>
  );
};

export default PropertyBuying;
