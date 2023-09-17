import Navigation from "./Navigation";
import Banner from "./Banner";
import "./Header.css";

const Header = function ({ movie }) {
  return (
    <header className="header-container">
      <Navigation />
      <Banner data={movie} />
    </header>
  );
};

export default Header;
