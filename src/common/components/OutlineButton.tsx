import React from "react";
import clsx from "clsx";

interface OutlineButtonProps {
  Icon?(): React.JSX.Element;
  children: React.ReactNode;
  className?: string;
  clickHandler(): void;
  type?: "submit" | "reset" | "button";
}

export default function OutlineButton({
  Icon,
  children,
  clickHandler,
  className = "",
  type = "button",
}: OutlineButtonProps) {
  return (
    <button
      type={type}
      className={clsx(
        "lg:button-lg button-md mr-auto flex w-[170px] items-center justify-center gap-2 rounded border border-white px-4 py-2 text-white lg:w-[184px]",
        className,
      )}
      onClick={clickHandler}
    >
      {children}
      {Icon && <Icon />}
    </button>
  );
}
