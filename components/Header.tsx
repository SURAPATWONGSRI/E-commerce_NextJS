import CartIcon from "./CartIcon";
import Container from "./Container";
import FavortieIcon from "./FavortieIcon";
import HeaderMenu from "./HeaderMenu";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";
import SearchBar from "./SearchBar";
import SignIn from "./SignIn";

const Header = async () => {
  return (
    <header className="bg-white py-5 border-b border-b-muted sticky top-0 z-50">
      <Container className="flex items-center justify-between text-lightColor">
        {/* LOGO */}
        <div className="w-auto md:w-1/3 flex items-center gap-2.5 justify-start md:gap-0">
          <MobileMenu />
          <Logo />
        </div>
        {/* Menu */}
        <HeaderMenu />
        <div className="w-auto md:w-1/3 flex items-center justify-end gap-5">
          <SearchBar />
          <CartIcon />
          <FavortieIcon />
          <SignIn />
        </div>
        {/* Nav Button */}
        {/* Nav Admin */}
      </Container>
    </header>
  );
};

export default Header;
