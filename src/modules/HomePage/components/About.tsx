import React from "react";
import Link from "next/link";
import UserIcon from "@@/public/svg/user.svg";
import Diagram from "@@/public/svg/diagram.svg";
import HomeWifi from "@@/public/svg/home-wifi.svg";
import MenuBoard from "@@/public/svg/menu-board.svg";

const cardsList = [
  {
    id: 0,
    Icon: UserIcon,
    title: "پرسنلی مجرب و حرفه‌ای",
  },
  {
    id: 1,
    Icon: Diagram,
    title: "کیفیت بالای غذاها",
  },
  {
    id: 2,
    Icon: HomeWifi,
    title: "محیطی دلنشین و آرام",
  },
  {
    id: 3,
    Icon: MenuBoard,
    title: "منوی متنوع",
  },
];

export default function About() {
  return (
    <section className="py-12 bg-about-background bg-no-repeat bg-cover bg-center">
      <div className="container mx-auto flex gap-4">
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
            className="lg:button-lg button-md flex justify-center items-center gap-2 mr-auto px-4 py-2 lg:w-[184px] w-[170px] rounded border border-white text-white"
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
            const { Icon, title } = card;
            return (
              <div
                key={card.id}
                className="flex flex-col items-center gap-1 px-3 py-4 text-white"
              >
                <Icon className="w-12 h-12" />
                <p className="body-lg text-center">{title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
