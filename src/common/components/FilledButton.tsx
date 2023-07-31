import React from "react";
import clsx from "clsx";

interface FilledButtonProps {
  LeftIcon?(): React.JSX.Element;
  RightIcon?(): React.JSX.Element;
  children: React.ReactNode;
  className?: string;
  clickHandler(): void;
  type?: "submit" | "reset" | "button";
}

export default function FilledButton({
  children,
  className = "",
  type = "button",
  clickHandler,
  RightIcon,
  LeftIcon,
}: FilledButtonProps) {
  return (
    <button
      type={type}
      onClick={clickHandler}
      className={clsx(
        "button-lg flex w-auto items-center justify-center rounded-lg px-2 py-2 md:w-[184px] md:px-4",
        className,
      )}
    >
      {RightIcon && <RightIcon />}
      {children}
      {LeftIcon && <LeftIcon />}
    </button>
  );
}
