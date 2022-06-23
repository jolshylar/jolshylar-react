import logo from "../images/logo.png";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav>
      <div className="logo">
        <img alt="logo" src={logo} />
        <h1>Jolshylar</h1>
      </div>
      <h3>we ❤️ open-source</h3>
    </nav>
  );
}

export default Navbar;
