export default function Search() {
  return (
    <div className="flex items-center justify-center p-2 rounded bg-primary-50 cursor-pointer text-primary-400">
      <svg width="24" height="24" viewBox="0 0 24 24">
        <use
          xlinkHref="/svg/search-normal.svg#search-normal"
          href="/svg/search-normal.svg#search-normal"
        ></use>
      </svg>
    </div>
  );
}
