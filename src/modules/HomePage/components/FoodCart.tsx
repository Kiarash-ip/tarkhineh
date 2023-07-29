import React from "react";

interface FoodCartProps {
  src: string;
  title: string;
}

export default function FoodCart({ src, title }: FoodCartProps) {
  return (
    <div className="relative max-w-[350px] min-w-[152px] flex flex-col items-center grow">
      <div className="food__cart--shadow absolute bottom-0 h-[160px] rounded-lg border border-primary-400 bg-primary-400 w-full"></div>
      <div className="w-[83%] z-[2]">
        <img src={src} className="w-full" />
      </div>
      <div className="group food__cart--shadow translate-y-1/2 text-center w-full max-w-[155px] min-w-[96px] px-4 py-2 transition-colors bg-neutral-200 hover:bg-primary-400 rounded cursor-pointer">
        <span className="body-xl text-neutral-900 group-hover:text-white">
          {title}
        </span>
      </div>
    </div>
  );
}
