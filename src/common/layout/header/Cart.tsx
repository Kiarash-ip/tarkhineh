import ShoppingCartIcon from "@public/svg/shopping-cart.svg";

export default function Cart() {
  return (
    <div className="flex cursor-pointer items-center justify-center rounded bg-primary-50 p-1 text-primary-400 sm:p-2">
      <ShoppingCartIcon className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6" />
    </div>
  );
}
