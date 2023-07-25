export default function Cart() {
  return (
    <div className="flex items-center justify-center p-2 rounded bg-primary-50 cursor-pointer text-primary-400">
      <svg width="24" height="24" viewBox="0 0 24 24">
        <use
          xlinkHref="/svg/shopping-cart.svg#shopping-cart"
          href="/svg/shopping-cart.svg#shopping-cart"
        ></use>
      </svg>
    </div>
  );
}
