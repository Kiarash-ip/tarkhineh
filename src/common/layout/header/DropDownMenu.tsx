import React from "react";
import clsx from "clsx";
import type { Menu } from "./Navigation";

interface DropDownProps {
  open: boolean;
  index: number;
  list: Menu[];
  clickHandler(): void;
}

export default function DropDownMenu({
  open,
  index,
  list,
  clickHandler,
}: DropDownProps) {
  return (
    <div
      className={clsx(
        "absolute top-full z-10 min-w-[144px]  navigation-dropdown-menu ",
        open ? "open" : "",
        index % 2 === 0 ? "right-0" : "left-0"
      )}
    >
      <ul className="flex flex-col overflow-hidden rounded bg-white shadow-[0px_0px_6px_0px_#00000026]">
        {list.map((item) => {
          return (
            <li
              key={item.id}
              className="relative body-sm cursor-pointer group text-neutral-900 hover:bg-neutral-400 transition-colors px-2"
              onClick={clickHandler}
            >
              {item.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
