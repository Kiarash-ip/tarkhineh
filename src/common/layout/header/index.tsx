import Navigation from "./Navigation";
import Logo from "@/common/components/Logo";
import Search from "./Search";
import Cart from "./Cart";
import Profile from "./Profile";

export default function Header() {
  return (
    <header>
      <nav className="container mx-auto flex items-stretch py-8 gap-2">
        <Logo />
        <Navigation />
        <div className="flex items-center gap-2">
          <Search />
          <Cart />
          <Profile />
        </div>
      </nav>
    </header>
  );
}
