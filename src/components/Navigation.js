import tvIcon from "../assets/tv.png";
import { FaSearch } from "react-icons/fa";
import "./Navigation.css";
import { useEffect, useState } from "react";

const Navigation = () => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolling(true); // Add the scrolling class
      } else {
        setScrolling(false); // Remove the scrolling class
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav className={scrolling ? "scrolling" : ""}>
      <div className="appLogo">
        <img className="icon-tv" src={tvIcon} alt="" />
        <h1>MovieBox</h1>
      </div>

      <div className="search-container">
        <input
          type="text"
          name="movie-search"
          placeholder="What do you want to watch?"
        />
        <FaSearch className="searchIcon" />
      </div>

      <div className="sign-in-box">
        <h1>
          <a href="/movie">Sign in</a>
        </h1>

        <div className="Hamburger">
          <div className="strokes"></div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
