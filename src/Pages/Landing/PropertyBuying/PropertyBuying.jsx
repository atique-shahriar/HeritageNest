import ProperTyBuyingCard from "../../../Components/PropertyBuyingCard";
import BuyingCardMiddle from "./BuyingCardMiddle";
import BuyingCardTop from "./BuyingCardTop";
const PropertyBuying = () => {
  return (
    <div className="w-11/12 md:w-4/5 mx-auto mt-16 mb-16 lg:mb-40">
      <div className="flex flex-col lg:flex-row  justify-between gap-24 md:gap-32 lg:gap-52 xl:gap-64 mb-16 lg:mb-40">
        <BuyingCardTop></BuyingCardTop>
        <ProperTyBuyingCard></ProperTyBuyingCard>
      </div>

      <div className="flex flex-col-reverse lg:flex-row justify-between gap-6 lg:gap-24 xl:gap-44 mb-16">
        <ProperTyBuyingCard></ProperTyBuyingCard>
        <BuyingCardMiddle></BuyingCardMiddle>
      </div>

      <div className="flex flex-col lg:flex-row  md:items-center lg:items-start lg:justify-between gap-24 md:gap-32 lg:gap-52 xl:gap-64">
        <BuyingCardTop></BuyingCardTop>
        <ProperTyBuyingCard></ProperTyBuyingCard>
      </div>
    </div>
  );
};

export default PropertyBuying;
