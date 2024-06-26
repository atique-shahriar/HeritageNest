import { Zoom } from "react-awesome-reveal";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "../../../public/Images/BuyerScreen/Testimonials (1).jpeg";
import img2 from "../../../public/Images/BuyerScreen/Testimonials (2).jpeg";
import TestimonialsCard from "../../Components/TestimonialsCard";

const Testimonials = () => {
  return (
    <Zoom>
      <div className=" mt-12">
        <h3 className="text-center font-bold text-4xl mb-8">Testimonials</h3>
        <div className="relative ">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode, Pagination]}
            breakpoints={{
              768: {
                slidesPerView: 1,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
            }}
            className="mySwiper pb-10">
            <SwiperSlide>
              <TestimonialsCard testiImage={img2}></TestimonialsCard>
            </SwiperSlide>
            <SwiperSlide>
              <TestimonialsCard testiImage={img1}></TestimonialsCard>
            </SwiperSlide>
            <SwiperSlide>
              <TestimonialsCard testiImage={img2}></TestimonialsCard>
            </SwiperSlide>
            <SwiperSlide>
              <TestimonialsCard testiImage={img1}></TestimonialsCard>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </Zoom>
  );
};

export default Testimonials;
