"use client";

import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import type { Menu } from "./Navigation";
import { useState, useEffect, useRef } from "react";
import BranchesModal from "../Modals/BranchesModal";

interface NavItemProps {
  title: string;
  href: string;
  index: number;
  popup: boolean;
  menu?: Menu[];
}

interface ModalRef {
  openModal?: () => void;
  closeModal?: () => void;
}

export default function NavigationItem({
  title,
  href,
  menu,
  index,
  popup,
}: NavItemProps) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<ModalRef>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!menuRef?.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
  }, [menuRef]);

  function menuItemClickHandler() {
    if (popup && modalRef.current?.openModal) {
      modalRef.current?.openModal();
    }
  }

  return (
    <>
      <li
        className={clsx(
          "relative navbar-link py-1 font-sans flex items-center gap-1 transition-colors text-neutral-800 hover:text-primary-400 cursor-pointer",
          pathname === href ? "active" : ""
        )}
      >
        <Link
          href={href}
          className={clsx(
            "flex items-center gap-1",
            open ? "pointer-events-none" : "pointer-events-auto"
          )}
          onClick={() => setOpen((prevState) => !prevState)}
        >
          {title}
          {menu?.length && (
            <div>
              <svg width="17" height="17" viewBox="0 0 17 17">
                <use
                  xlinkHref="/svg/arrow-down.svg#arrow-down"
                  href="/svg/arrow-down.svg#arrow-down"
                ></use>
              </svg>
            </div>
          )}
        </Link>
        {menu?.length && (
          <div
            className={clsx(
              "absolute top-full bg-white z-10 min-w-[144px] rounded navigation-dropdown-menu translate-y-3 shadow-[0px_0px_6px_0px_rgba(0, 0, 0, 0.15)]",
              open ? "open" : "",
              index % 2 === 0 ? "right-0" : "left-0"
            )}
            ref={menuRef}
          >
            <ul className="flex flex-col overflow-hidden">
              {menu.map((item) => {
                return (
                  <li
                    key={item.id}
                    className="relative body-sm cursor-pointer group text-neutral-900 hover:bg-neutral-400 transition-colors px-2"
                    onClick={menuItemClickHandler}
                  >
                    {item.title}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </li>
      {popup ? <BranchesModal ref={modalRef} /> : <></>}
    </>
  );
}
