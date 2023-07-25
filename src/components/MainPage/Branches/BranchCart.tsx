import Link from "next/link";
import React from "react";

export interface BranchCartProps {
  branch_name: string;
  branch_address: string;
  href: string;
  src: string;
}

export default function BranchCart({
  branch_name,
  branch_address,
  href,
  src,
}: BranchCartProps) {
  return (
    <div className="group branch__cart transition-all relative pb-4 flex flex-col items-center border border-neutral-500 rounded-lg overflow-hidden">
      <div className="relative w-full h-[230px] group-hover:h-[190px]  transition-[height] mb-2">
        <img src={src} className="w-full h-full object-cover " />
      </div>
      <h6 className="mb-1 text-neutral-900">{branch_name}</h6>
      <div className="mx-2 mb-2">
        <p className="caption-lg text-neutral-800 text-center leading-[25.2px]">
          {branch_address}
        </p>
      </div>
      <div className="mt-auto h-0 group-hover:h-[42px] transition-[height] overflow-hidden">
        <Link
          href={href}
          className=" flex items-center w-[128px] gap-1 text-primary-500 p-2 rounded border border-primary-500"
        >
          <span>صفحه شعبه</span>
          <svg width="17" height="17" viewBox="0 0 17 17" className="rotate-90">
            <use
              xlinkHref="/svg/arrow-down.svg#arrow-down"
              href="/svg/arrow-down.svg#arrow-down"
            ></use>
          </svg>
        </Link>
      </div>
    </div>
  );
}
