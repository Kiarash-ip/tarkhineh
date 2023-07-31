import React from "react";
import SearchIcon from "@root/public/svg/search-normal.svg";
import clsx from "clsx";

interface SearchInputProps {
  className?: string;
}

export default function SearchInput({ className = "" }: SearchInputProps) {
  return (
    <div
      className={clsx(
        "mx-auto flex w-full items-center justify-between rounded-lg border border-neutral-500 px-4 py-2 text-neutral-900 transition-colors [&:has(input:focus)]:border-primary-400",
        className,
      )}
    >
      <input
        type="search"
        placeholder="جستجو"
        className="sm:caption-md caption-sm w-full max-w-[276px] bg-transparent leading-[18px] focus:outline-none"
      />
      <button>
        <SearchIcon className="h-4 w-4 sm:h-6 sm:w-6" />
      </button>
    </div>
  );
}
