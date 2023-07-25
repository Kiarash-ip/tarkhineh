import Image from "next/image";
import React from "react";

interface SlideItemProps {
  src: string;
  title: string;
}

export default function SlideItem({ src, title }: SlideItemProps) {
  return (
    <div
      className="w-full h-full relative slider-banner-gradient"
      style={{
        background: `url(${src}), lightgray`,
        backgroundPosition: "50%",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex flex-col items-center gap-10 absolute z-10 top-1/2 left-[56px] right-[56px] -translate-y-[28px]">
        <h2 className="text-white">{title}</h2>
        <button className="flex items-center justify-center button-lg text-white py-2 px-4 rounded-lg bg-primary-400 w-[184px]">
          سفارش آنلاین غذا
        </button>
      </div>
    </div>
  );
}
