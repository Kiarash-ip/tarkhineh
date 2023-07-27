import { clsx } from "clsx";
import { useRef, useState, useEffect } from "react";

interface MenuList {
  id: number;
  title: string;
  icon: string;
  href: string;
}

const menuList: MenuList[] = [
  {
    id: 0,
    title: "پروفایل",
    icon: "/svg/user.svg",
    href: "",
  },
  {
    id: 1,
    title: "پیگیری سفارش",
    icon: "/svg/wallet-2.svg",
    href: "",
  },
  {
    id: 2,
    title: "علاقه‌مندی‌ها",
    icon: "/svg/heart.svg",
    href: "",
  },
  {
    id: 3,
    title: "آدرس‌های من",
    icon: "/svg/location.svg",
    href: "",
  },
  {
    id: 4,
    title: "خروج از حساب",
    icon: "/svg/logout.svg",
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
        <svg width="24" height="24" viewBox="0 0 24 24">
          <use xlinkHref="/svg/user.svg#user" href="/svg/user.svg#user"></use>
        </svg>
        <div>
          <svg width="17" height="17" viewBox="0 0 17 17">
            <use
              xlinkHref="/svg/arrow-down.svg#arrow-down"
              href="/svg/arrow-down.svg#arrow-down"
            ></use>
          </svg>
        </div>
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
            return (
              <li
                key={item.id}
                className="relative flex items-center gap-1 body-sm cursor-pointer text-neutral-900 hover:bg-neutral-400 transition-colors px-2"
              >
                <img src={item.icon} className="w-4 h-4" />
                {item.title}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
