import Link from "next/link";
import NavigationItem from "./NavigationItem";

export interface Menu {
  title: string;
  id: number;
  href: string;
}

interface menuListProp {
  id: number;
  title: string;
  href: string;
  menu?: Menu[];
}

const menuList: menuListProp[] = [
  {
    id: 0,
    title: "صفحه اصلی",
    href: "/",
  },
  {
    id: 1,
    title: "شعبه",
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
    href: "",
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
    href: "",
  },
  {
    id: 4,
    title: "درباره ما",
    href: "",
  },
  {
    id: 5,
    title: "تماس با ما",
    href: "",
  },
];

export default function Navigation() {
  return (
    <ul className="mx-auto flex items-center gap-6">
      {menuList.map((item, index) => {
        return (
          <NavigationItem
            index={index}
            key={item.id}
            title={item.title}
            href={item.href}
            menu={item.menu}
          />
        );
      })}
    </ul>
  );
}
