"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
// import PaginationContainer from "@public/svg/pagination-container.svg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import CarouselBannerSlide from "./CarouselBannerSlide";

interface SliderList {
  id: number;
  src: string;
  title: string;
}

const sliderList: SliderList[] = [
  {
    id: 0,
    src: "/images/food-picture.jpeg",
    title: "تجربه غذای سالم و گیاهی به سبک ترخینه",
  },
  {
    id: 1,
    src: "/images/food-picture.jpeg",
    title: "تجربه غذای سالم و گیاهی به سبک ترخینه",
  },
  {
    id: 2,
    src: "/images/food-picture.jpeg",
    title: "تجربه غذای سالم و گیاهی به سبک ترخینه",
  },
];

export default function CarouselBanner() {
  const [swiperInstance, setSwiperInstance] = useState<SwiperCore>();
  return (
    <section className="relative h-[176px] sm:h-[280px] lg:h-[336px]">
      <Swiper
        className="bannerSwiper h-full"
        navigation
        spaceBetween={0}
        autoplay={{
          delay: 5000,
        }}
        loop
        pagination={{
          clickable: true,
          bulletClass: "swiper__banner__pagination__bullet",
          dynamicBullets: true,
          dynamicMainBullets: 4,
        }}
        slidesPerView={1}
        onSwiper={setSwiperInstance}
        modules={[Pagination, Autoplay, Navigation]}
      >
        {sliderList.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <CarouselBannerSlide src={item.src} title={item.title} />
            </SwiperSlide>
          );
        })}
        <div className="absolute bottom-0 left-1/2 z-[5] h-[16px] w-[82px] -translate-x-1/2 translate-y-[1px] sm:h-[25px] sm:w-[130px] md:h-[33px] md:w-[154px]">
          <img src="/svg/pagination-container.svg" className="h-full w-full" />
          {/* <PaginationContainer /> */}
        </div>
      </Swiper>
    </section>
  );
}
