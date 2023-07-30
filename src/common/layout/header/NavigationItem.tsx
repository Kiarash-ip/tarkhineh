"use client";

import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import type { Menu } from "./Navigation";
import { useState, useEffect, useRef } from "react";
import BranchesModal from "@/common/components/BranchesModal";
import DropDownMenu from "./DropDownMenu";
import ArrowDown from "@@/public/svg/arrow-down.svg";
import type { ModalRef } from "@/common/types/modal";

interface NavItemProps {
  title: string;
  href: string;
  index: number;
  popup: boolean;
  menu?: Menu[];
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
  const modalRef = useRef<ModalRef>(null);

  function menuItemClickHandler() {
    if (popup && modalRef.current?.openModal) {
      modalRef.current?.openModal();
    }
  }

  return (
    <>
      <li
        className="relative font-sans flex items-center gap-1 transition-colors text-neutral-800 hover:text-primary-400 cursor-pointer"
        onPointerEnter={() => setOpen(true)}
        onPointerLeave={() => setOpen(false)}
      >
        <Link
          href={href}
          className={clsx(
            "relative navbar-link  py-1 flex items-center gap-1 whitespace-nowrap",
            pathname === href ? "active" : ""
          )}
        >
          {title}
          {menu?.length && <ArrowDown />}
        </Link>
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
