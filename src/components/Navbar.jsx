import logo from "../images/logo.png";
import "../styles/Navbar.css";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaDiscord } from "react-icons/fa";

function Navbar() {
  const styles = { width: 36, height: 36 };

  return (
    <nav>
      <img className="logo" alt="logo" src={logo} data-aos="fade-right" />
      <div className="links" data-aos="fade-left">
        <a href="https://github.com/jolshylar/">
          <AiFillGithub style={styles} />
        </a>
        <a href="https://instagram.com/jolshylar/">
          <AiFillInstagram style={styles} />
        </a>
        <a href="https://discord.gg/6dSpCGtJuB/">
          <FaDiscord style={styles} />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
