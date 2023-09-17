import {
  FaFacebookSquare,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="socials flex flex-footer">
        <FaFacebookSquare />
        <FaInstagram />
        <FaTwitter />
        <FaYoutube />
      </div>

      <div className="useful-links flex flex-footer">
        <a href="/">
          <p>Condition of Use</p>
        </a>
        <a href="/">
          <p>Privacy & use</p>
        </a>
        <a href="/">
          <p>Press room</p>
        </a>
      </div>

      <div className="attribution-designer flex flex-footer">
        &copy; 2021 MovieBox By Adriana Eka Prayudha
      </div>
    </footer>
  );
};

export default Footer;
