"use client";

import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import type { Menu } from "./Navigation";
import { useState, useEffect, useRef } from "react";
import BranchesModal from "@/common/components/BranchesModal";
import DropDownMenu from "./DropDownMenu";
import ArrowDown from "@public/svg/arrow-down.svg";
import type { ModalRef } from "@/common/types/modal";

interface NavItemProps {
  title: string;
  href: string;
  Icon: any;
  index: number;
  popup: boolean;
  menu?: Menu[];
}

export default function NavigationItem({
  title,
  href,
  menu,
  Icon,
  index,
  popup,
}: NavItemProps) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const modalRef = useRef<ModalRef>(null);

  function menuItemClickHandler() {
    if (popup && modalRef.current?.openModal) {
      modalRef.current?.openModal();
    }
  }

  return (
    <>
      <li
        className="relative flex cursor-pointer items-center gap-1 pb-1 pt-2 font-sans text-neutral-800 transition-colors hover:text-primary-400 md:p-0"
        onPointerEnter={() => setOpen(true)}
        onPointerLeave={() => setOpen(false)}
      >
        <div className="flex grow items-center gap-1">
          {Icon ? <Icon className="h-3 w-3 md:hidden" /> : <></>}
          <Link
            href={href}
            className={clsx(
              "navbar-link relative flex grow items-center justify-between gap-1 whitespace-nowrap md:justify-normal md:py-1",
              pathname === href ? "active" : "",
            )}
          >
            {title}
            {menu?.length && <ArrowDown />}
          </Link>
        </div>
        {menu?.length && (
          <DropDownMenu
            open={open}
            index={index}
            list={menu}
            clickHandler={menuItemClickHandler}
          />
        )}
        {popup ? <BranchesModal ref={modalRef} /> : <></>}
      </li>
    </>
  );
}
