// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectFlip, Pagination, Navigation } from "swiper/modules";

export default function SliderImage() {
  return (
    <div className="w-[25rem] mx-auto ">
      <h1 className="text-gold text-5xl font-semibold text-center my-20">
        Images Gallery
      </h1>
      <Swiper
        effect={"flip"}
        grabCursor={true}
        pagination={true}
        navigation={true}
        modules={[EffectFlip, Pagination, Navigation]}
        className="mySwiper "
      >
        <SwiperSlide>
          <img
            className="w-fit"
            src="https://www.strategicrealtyinvestment.com/assets/images/garden-1-thumbnail.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://www.strategicrealtyinvestment.com/assets/images/gate-eco-thumbnail.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://www.strategicrealtyinvestment.com/assets/images/stadium-01-thumbnial.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://www.strategicrealtyinvestment.com/assets/images/university-1-thumbnail.jpg" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
