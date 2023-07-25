import React from "react";
import Link from "next/link";
import UserWhite from "@@/public/svg/user-white.svg";
import Diagram from "@@/public/svg/diagram.svg";
import HomeWifi from "@@/public/svg/home-wifi.svg";
import MenuBoard from "@@/public/svg/menu-board.svg";
import Card from "./Card";

const cardsList = [
  {
    id: 0,
    icon: UserWhite,
    title: "پرسنلی مجرب و حرفه‌ای",
  },
  {
    id: 1,
    icon: Diagram,
    title: "کیفیت بالای غذاها",
  },
  {
    id: 2,
    icon: HomeWifi,
    title: "محیطی دلنشین و آرام",
  },
  {
    id: 3,
    icon: MenuBoard,
    title: "منوی متنوع",
  },
];

export default function About() {
  return (
    <section className="py-12 bg-about-background bg-no-repeat bg-cover bg-center">
      <div className="container mx-auto flex">
        <div className="text-white w-1/2">
          <h4 className="mb-6">رستوران‌های زنجیره‌ای ترخینه</h4>
          <p className="body-xl mb-4">
            مهمان‌نوازی یکی از مهم‌ترین مشخصه‌های ایرانیان است و باعث افتخار
            ماست که بیش از 20 سال است خدمت‌گزار مردم شریف ایران هستیم. ما در
            رستوران‌های زنجیره‌ای ترخینه همواره تلاش کردیم که در محیطی اصیل بر
            پایه معماری و طراحی مدرن در کنار طبیعتی دلنواز، غذایی سالم و درخور
            شان شما عزیزان ارائه دهیم.
          </p>
          <Link
            href="#"
            className="button-lg flex justify-center items-center gap-2 mr-auto px-4 py-2 w-[184px] rounded border border-white text-white"
          >
            <span>اطلاعات بیشتر</span>
            <img
              src="/svg/arrow-right.svg"
              className="rotate-180 w-[24px] h-[24px]"
            />
          </Link>
        </div>
        <div className="grid grid-cols-2 mr-auto gap-x-6 gap-y-2 [&>div:last-child]:gap-4 [&>div:first-child]:gap-4">
          {cardsList.map((card) => {
            return <Card key={card.id} icon={card.icon} title={card.title} />;
          })}
        </div>
      </div>
    </section>
  );
}
