import "../styles/About.css";
import { AiFillInstagram } from "react-icons/ai";

function About() {
  const styles = {
    width: "16px",
    height: "16px",
  };

  return (
    <div className="about">
      <h1>About Us</h1>
      <p>
        Jolshylar is a group of people dedicated to beating closed-source
        software.
      </p>
      <p>As of today, we have 10 people, with different sets of skills.</p>
      <a href="https://www.instagram.com/stories/highlights/17916904040361247/">
        <button className="more-btn">
          <AiFillInstagram style={styles} /> More
        </button>
      </a>
    </div>
  );
}

export default About;
