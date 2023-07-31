import React from "react";
import clsx from "clsx";

interface LogoProps {
  className?: string;
}

export default function Logo({ className = "" }) {
  return (
    <div className={clsx("w-full max-w-[102px] md:max-w-[155px]", className)}>
      <img src="/svg/Logo.svg" className="w-full" alt="tarkhineh logo" />
    </div>
  );
}
