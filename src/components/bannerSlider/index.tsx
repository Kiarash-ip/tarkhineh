"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import SwiperCore from "swiper";
import { Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SlideItem from "./SlideItem";

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

export default function BannerSlider() {
  const [swiperInstance, setSwiperInstance] = useState<SwiperCore>();
  return (
    <section className="h-[336px] relative">
      <Swiper
        className="h-full"
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
        modules={[Pagination, Autoplay]}
      >
        {sliderList.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <SlideItem src={item.src} title={item.title} />
            </SwiperSlide>
          );
        })}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-[5]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="154"
            height="33"
            viewBox="0 0 154 33"
            fill="none"
          >
            <path
              d="M13.1492 12.9957C15.3255 5.56588 21.9046 0 29.6466 0H125.118C132.571 0 138.998 5.16164 141.261 12.2634C144.25 21.6506 148.867 33 153.711 33C161.97 33 -9.49755 33 0.41389 33C6.07606 33 10.4444 22.2302 13.1492 12.9957Z"
              fill="white"
            />
          </svg>
        </div>
      </Swiper>
      <button
        className="absolute top-1/2 -translate-y-1/2 right-6 w-[32px] h-[32px] z-50"
        onClick={() => swiperInstance?.slidePrev()}
      >
        <svg width="32" height="32" viewBox="0 0 32 32">
          <use
            xlinkHref="/svg/arrow-right.svg#arrow-right"
            href="/svg/arrow-right.svg#arrow-right"
          ></use>
        </svg>
      </button>
      <button
        className="absolute top-1/2 -translate-y-1/2 left-6 w-[32px] h-[32px] z-50 rotate-180"
        onClick={() => swiperInstance?.slideNext()}
      >
        <svg width="32" height="32" viewBox="0 0 32 32">
          <use
            xlinkHref="/svg/arrow-right.svg#arrow-right"
            href="/svg/arrow-right.svg#arrow-right"
          ></use>
        </svg>
      </button>
    </section>
  );
}
