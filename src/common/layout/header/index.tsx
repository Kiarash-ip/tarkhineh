import Navigation from "./Navigation";
import Logo from "@/common/components/Logo";
import Search from "./Search";
import Cart from "./Cart";
import Profile from "./Profile";
import MenuButton from "@root/public/svg/menu.svg";
import { useRef } from "react";

type NavigationMenuRef = {
  openMenu(): void;
};

export default function Header() {
  const navigationMenu = useRef<NavigationMenuRef>();
  return (
    <header>
      <nav className="container mx-auto flex items-stretch gap-2 py-4 md:py-6 lg:py-8">
        <button
          className="md:hidden"
          onClick={() => {
            navigationMenu.current?.openMenu();
          }}
        >
          <MenuButton className="h-6 w-6 text-primary-400" />
        </button>
        <Logo className="mx-auto md:mx-0" />
        <Navigation ref={navigationMenu} />
        <div className="flex items-center gap-2">
          <Search />
          <Cart />
          <Profile />
        </div>
      </nav>
    </header>
  );
}
