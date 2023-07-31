import Link from "next/link";
import NavigationItem from "./NavigationItem";
import HomeIcon from "@public/svg/home-1.svg";
import MenuBoardIcon from "@public/svg/menu-board.svg";
import HomeHashtagIcon from "@public/svg/home-hashtag.svg";
import TwoUserIcon from "@public/svg/profile-2user.svg";
import callingIcon from "@public/svg/call-calling.svg";
import { useState, forwardRef, useImperativeHandle } from "react";
import XMarkIcon from "@public/svg/close-icon.svg";
import clsx from "clsx";

export interface Menu {
  title: string;
  id: number;
  href: string;
}

interface menuListProp {
  id: number;
  title: string;
  href: string;
  Icon?: any;
  popup: boolean;
  menu?: Menu[];
}

const menuList: menuListProp[] = [
  {
    id: 0,
    title: "صفحه اصلی",
    popup: false,
    Icon: HomeIcon,
    href: "/",
  },
  {
    id: 1,
    title: "شعبه",
    Icon: HomeHashtagIcon,
    popup: false,
    href: "",
    menu: [
      {
        id: 0,
        title: "اکباتان",
        href: "",
      },
      {
        id: 1,
        title: "چالوس",
        href: "",
      },
      {
        id: 2,
        title: "اقدسیه",
        href: "",
      },
      {
        id: 3,
        title: "ونک",
        href: "",
      },
    ],
  },
  {
    id: 2,
    title: "منو",
    Icon: MenuBoardIcon,
    href: "",
    popup: true,
    menu: [
      {
        id: 0,
        title: "غذای اصلی",
        href: "",
      },
      {
        id: 1,
        title: "پیش غذا",
        href: "",
      },
      {
        id: 2,
        title: "دسر",
        href: "",
      },
      {
        id: 3,
        title: "نوشیدنی",
        href: "",
      },
    ],
  },
  {
    id: 3,
    title: "اعطای نمایندگی",
    popup: false,
    href: "",
  },
  {
    id: 4,
    title: "درباره ما",
    Icon: TwoUserIcon,
    popup: false,
    href: "",
  },
  {
    id: 5,
    title: "تماس با ما",
    Icon: callingIcon,
    popup: false,
    href: "",
  },
];

const Navigation = forwardRef(function Navigation(props, ref) {
  const [open, setOpen] = useState(false);

  useImperativeHandle(
    ref,
    () => {
      return {
        openMenu,
      };
    },
    [],
  );

  function openMenu() {
    setOpen(true);
  }

  function closeMenu() {
    setOpen(false);
  }

  `translateX(${open ? "0" : "100%"})`;

  return (
    <div
      className={clsx(
        "fixed bottom-0 right-0 top-0 z-50 flex w-[256px] transform-gpu flex-col items-start bg-white transition-transform md:relative md:inset-auto md:mx-auto md:w-auto md:flex-row md:items-center",
        open ? "translate-x-0" : "translate-x-full md:translate-x-0",
      )}
    >
      <div className="mb-2 flex h-24 w-full items-center bg-navigation-menu bg-cover bg-center bg-no-repeat px-[18px] md:hidden">
        <img src="/svg/logo-white.svg" alt="tarkhineh logo" />
        <XMarkIcon
          className="absolute left-4 top-4 h-6 w-6 text-white"
          onClick={closeMenu}
        />
      </div>
      <ul className="flex w-full flex-col items-stretch divide-y-2 divide-neutral-500 px-4 md:w-auto md:flex-row md:gap-3 md:divide-y-0 md:p-0 lg:gap-6">
        {menuList.map((item, index) => {
          return (
            <NavigationItem
              index={index}
              key={item.id}
              title={item.title}
              Icon={item.Icon}
              href={item.href}
              menu={item.menu}
              popup={item.popup}
            />
          );
        })}
      </ul>
    </div>
  );
});

export default Navigation;
