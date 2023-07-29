import ShoppingCartIcon from "@@/public/svg/shopping-cart.svg";

export default function Cart() {
  return (
    <div className="flex items-center justify-center p-2 rounded bg-primary-50 cursor-pointer text-primary-400">
      <ShoppingCartIcon className="w-6 h-6" />
    </div>
  );
}
