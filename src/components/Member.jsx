import "../styles/Member.css";
import { AiTwotoneMail, AiFillInstagram } from "react-icons/ai";
import Interests from "./Interests";

function Member({ member }) {
  const photo = require(`../images/members/${member.element}.png`);

  return (
    <div className="member-card" data-aos="flip-left" data-aos-duration="50000">
      <img className="photo" alt="member" src={photo} />
      <div className="content">
        <h2>{member.name}</h2>
        <h3>{member.role}</h3>
        <a href={`mailto:${member.email}`}>
          <button>
            <AiTwotoneMail /> Email
          </button>
        </a>
        <a href={`https://instagram.com/${member.profile}`}>
          <button>
            <AiFillInstagram /> Instagram
          </button>
        </a>
        <p>{member.quote}</p>
      </div>
      <Interests key={member.name} member={member} />
    </div>
  );
}

export default Member;
