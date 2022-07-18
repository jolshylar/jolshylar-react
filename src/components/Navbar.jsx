import "../styles/Navbar.css";
import { IoLogoGithub, IoLogoInstagram, IoLogoDiscord } from "react-icons/io5"

function Navbar() {
  const styles = { width: 36, height: 36 };

  return (
    <nav>
      <img className="logo" alt="logo" src="/images/logo.png" data-aos="fade-right" />
      <div className="links" data-aos="fade-left">
        <a href="https://github.com/jolshylar/">
          <IoLogoGithub style={styles} />
        </a>
        <a href="https://instagram.com/jolshylar/">
          <IoLogoInstagram style={styles} />
        </a>
        <a href="https://discord.gg/6dSpCGtJuB/">
          <IoLogoDiscord style={styles} />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
