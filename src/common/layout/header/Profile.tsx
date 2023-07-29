import { clsx } from "clsx";
import { useRef, useState, useEffect } from "react";
import ArrowDown from "@@/public/svg/arrow-down.svg";
import UserIcon from "@@/public/svg/user.svg";
import WalletIcon from "@@/public/svg/wallet-2.svg";
import HeartIcon from "@@/public/svg/heart.svg";
import LocationIcon from "@@/public/svg/location.svg";
import LogOutIcon from "@@/public/svg/logout.svg";

interface MenuList {
  id: number;
  title: string;
  Icon: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  href: string;
}

const menuList: MenuList[] = [
  {
    id: 0,
    title: "پروفایل",
    Icon: UserIcon,
    href: "",
  },
  {
    id: 1,
    title: "پیگیری سفارش",
    Icon: WalletIcon,
    href: "",
  },
  {
    id: 2,
    title: "علاقه‌مندی‌ها",
    Icon: HeartIcon,
    href: "",
  },
  {
    id: 3,
    title: "آدرس‌های من",
    Icon: LocationIcon,
    href: "",
  },
  {
    id: 4,
    title: "خروج از حساب",
    Icon: LogOutIcon,
    href: "",
  },
];

export default function Profile() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!menuRef?.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
  }, [menuRef]);

  return (
    <div
      className="relative flex items-center justify-center p-2 rounded bg-primary-50 cursor-pointer"
      onPointerEnter={() => setOpen(true)}
      onPointerLeave={() => setOpen(false)}
    >
      <button className={clsx("flex items-end text-primary-400")}>
        <UserIcon className="w-6 h-6" />
        <ArrowDown />
      </button>

      <div
        className={clsx(
          "absolute top-full left-0 bg-white z-10 min-w-[144px] rounded navigation-dropdown-menu translate-y-3 shadow-[0px_0px_6px_0px_#00000026]",
          open ? "open" : ""
        )}
        ref={menuRef}
      >
        <ul className="flex flex-col overflow-hidden">
          {menuList.map((item) => {
            const { Icon, id, title } = item;
            return (
              <li
                key={id}
                className="relative flex items-center gap-1 body-sm cursor-pointer text-neutral-900 hover:bg-neutral-400 transition-colors px-2"
              >
                <Icon className="w-4 h-4" />
                {title}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
