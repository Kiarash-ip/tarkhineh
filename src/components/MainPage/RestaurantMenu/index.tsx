import React from "react";
import FoodCart from "./FoodCart";

interface MenuList {
  id: number;
  title: string;
  src: string;
}

const menuList: MenuList[] = [
  { id: 0, title: "غذای اصلی", src: "/images/image-1.png" },
  { id: 1, title: "پیش غذا", src: "/images/image-2.png" },
  { id: 2, title: "دسر", src: "/images/image-3.png" },
  { id: 3, title: "نوشیدنی", src: "/images/image-4.png" },
];

export default function RestaurantMenu() {
  return (
    <div className="container mx-auto mt-12 mb-[72px] flex flex-col gap-8 items-center">
      <h4 className="text-neutral-900">منوی رستوران</h4>
      <div className="w-full flex flex-wrap justify-center items-end gap-6">
        {menuList.map((item) => {
          return <FoodCart key={item.id} src={item.src} title={item.title} />;
        })}
      </div>
    </div>
  );
}
