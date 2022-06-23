import logo from "../images/logo.png";
import "../styles/Navbar.css";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaDiscord } from "react-icons/fa";

function Navbar() {
  const styles = {
    width: "36px",
    height: "36px",
  };

  return (
    <nav>
      <img className="logo" alt="logo" src={logo} />
      <div className="links">
        <a href="https://github.com/jolshylar/jolshylar">
          <AiFillGithub style={styles} />
        </a>
        <a href="https://instagram.com/jolshylar">
          <AiFillInstagram style={styles} />
        </a>
        <a href="https://discord.gg/6dSpCGtJuB">
          <FaDiscord style={styles} />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
