import "../styles/Footer.css";
import { FaTelegram, FaDiscord } from "react-icons/fa";
import { AiTwotoneMail, AiFillInstagram } from "react-icons/ai";

function Footer() {
  return (
    <footer>
      <div className="footer--section">
        <h3>Contact Us</h3>
        <ul>
          <li>
            <AiTwotoneMail />
            <a href="mailto:jolshylar@gmail.com">Email</a>
          </li>
          <li>
            <FaTelegram />
            <a href="https://t.me/+nk4YJtv9z702MjIy">Telegram</a>
          </li>
        </ul>
      </div>
      <div className="footer--section">
        <h3>We on Social Media</h3>
        <ul>
          <li>
            <FaDiscord />
            <a href="https://discord.gg/6dSpCGtJuB">Discord</a>
          </li>
          <li>
            <AiFillInstagram />
            <a href="https://instagram.com/jolshylar">Instagram</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
