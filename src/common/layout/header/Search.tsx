import SearchIcon from "@@/public/svg/search-normal.svg";

export default function Search() {
  return (
    <div className="flex items-center justify-center p-2 rounded bg-primary-50 cursor-pointer text-primary-400">
      <SearchIcon className="w-6 h-6" />
    </div>
  );
}
