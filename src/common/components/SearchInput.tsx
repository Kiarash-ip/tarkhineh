import React from "react";
import SearchIcon from "@root/public/svg/search-normal.svg";

export default function SearchInput() {
  return (
    <div className="w-full max-w-[409px] flex items-center justify-between px-4 py-2 mx-auto rounded-lg transition-colors border border-neutral-500 [&:has(input:focus)]:border-primary-400 text-neutral-900">
      <input
        type="search"
        placeholder="جستجو"
        className="caption-md bg-transparent w-full max-w-[276px] focus:outline-none"
      />
      <button>
        <SearchIcon className="w-6 h-6" />
      </button>
    </div>
  );
}
