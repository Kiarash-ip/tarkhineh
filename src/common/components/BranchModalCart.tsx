import React from "react";

interface BranchModalCartProps {
  src: string[];
  branch_name: string;
  branch_address: string;
  href: string;
}

export default function BranchModalCart({
  src,
  branch_name,
  branch_address,
  href,
}: BranchModalCartProps) {
  return (
    <div className="max-w-[177px] group branch__cart transition-transform relative  flex flex-col items-center border border-neutral-500 rounded-lg overflow-hidden hover:-translate-y-4 cursor-pointer">
      <div className="w-full h-[179px] aspect-square mb-2">
        <img src={src[0]} className="w-full h-full object-cover " />
      </div>
      <h6 className="button-lg mb-1 text-neutral-900">{branch_name}</h6>
      <div className="grow flex items-center mx-2">
        <p className="caption-md text-neutral-800 text-center leading-[25.2px]">
          {branch_address}
        </p>
      </div>
    </div>
  );
}
