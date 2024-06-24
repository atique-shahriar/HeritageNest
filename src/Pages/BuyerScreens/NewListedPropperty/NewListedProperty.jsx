import img1 from "../../../../public/Images/BuyerScreen/Card (1).jpeg";
import img2 from "../../../../public/Images/BuyerScreen/Card (2).jpeg";
import img3 from "../../../../public/Images/BuyerScreen/Card (3).jpeg";
import PropertyCard from "../../../Components/PropertyCard";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";

import { FreeMode, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const NewListedProperty = () => {
  return (
    <div className="w-11/12 md:w-4/5 mx-auto mt-20">
      <div className="flex justify-between items-center mb-4">
        <h4 className="text-3xl font-semibold text-[#111827]">New Listed Properties</h4>
        <a
          href=""
          className="text-[#0059B1] font-semibold underline">
          See all Property
        </a>
      </div>
      <div className="relative">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          freeMode={true}
          modules={[FreeMode, Navigation]}
          navigation={{
            nextEl: ".swiper-button-next-new",
            prevEl: ".swiper-button-prev-new",
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
          className="mySwiper">
          <SwiperSlide>
            <PropertyCard cardImage={img2}></PropertyCard>
          </SwiperSlide>
          <SwiperSlide>
            <PropertyCard cardImage={img3}></PropertyCard>
          </SwiperSlide>
          <SwiperSlide>
            <PropertyCard cardImage={img1}></PropertyCard>
          </SwiperSlide>
          <SwiperSlide>
            <PropertyCard cardImage={img2}></PropertyCard>
          </SwiperSlide>
        </Swiper>
        <div className="swiper-button-prev swiper-button-prev-new"></div>
        <div className="swiper-button-next swiper-button-next-new"></div>
      </div>
    </div>
  );
};

export default NewListedProperty;