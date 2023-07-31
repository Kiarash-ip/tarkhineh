import React from "react";

interface FoodCartProps {
  src: string;
  title: string;
}

export default function FoodCart({ src, title }: FoodCartProps) {
  return (
    <div className="relative flex min-w-[152px] max-w-[350px] grow flex-col items-center">
      <div className="food__cart--shadow absolute bottom-0 h-1/2 w-full rounded-lg border border-primary-400 bg-primary-400"></div>
      <div className="z-[2] w-[83%]">
        <img src={src} className="aspect-square w-full object-contain" />
      </div>
      <div className="food__cart--shadow group w-3/4 max-w-[155px] translate-y-1/2 cursor-pointer rounded bg-neutral-200 px-2 py-2 text-center transition-colors hover:bg-primary-400 lg:min-w-[96px] lg:px-4">
        <span className="lg:body-xl md:body-lg text-neutral-900 group-hover:text-white">
          {title}
        </span>
      </div>
    </div>
  );
}
