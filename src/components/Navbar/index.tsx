import Logo from "../globals/Logo";
import Navigation from "./Navigation";
import Search from "./Search";
import Cart from "./Cart";
import Profile from "./Profile";

export default function Navbar() {
  return (
    <header>
      <nav className="container mx-auto flex items-stretch py-8">
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
