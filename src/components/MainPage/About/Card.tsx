import React from "react";

interface IconObj {
  src: string;
  width: number;
  height: number;
}

interface CardProps {
  icon: IconObj;
  title: string;
}

export default function Card({ icon, title }: CardProps) {
  return (
    <div className="flex flex-col items-center gap-1 px-3 py-4 text-white">
      <img src={icon.src} className="w-[48px] h-[48px] object-contain" />
      <p className="body-lg">{title}</p>
    </div>
  );
}
