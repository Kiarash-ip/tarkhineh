import Image from "next/image";
import React from "react";
import FilledButton from "./FilledButton";

interface CarouselBannerSlideProps {
  src: string;
  title: string;
}

export default function CarouselBannerSlide({
  src,
  title,
}: CarouselBannerSlideProps) {
  return (
    <div
      className="slider-banner-gradient relative h-full w-full"
      style={{
        background: `url(${src}), lightgray`,
        backgroundPosition: "50%",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute left-[56px] right-[56px] top-1/2 z-10 flex -translate-y-[28px] flex-col items-center gap-[18px] sm:gap-6 lg:gap-10">
        <h2 className="text-base text-white sm:text-2xl md:text-3xl lg:text-[40px]">
          {title}
        </h2>
        <FilledButton
          clickHandler={() => {}}
          className="bg-primary-400 text-white"
        >
          سفارش آنلاین غذا
        </FilledButton>
      </div>
    </div>
  );
}
