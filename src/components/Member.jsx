import "../styles/Member.css";
import { IoMail, IoLogoInstagram } from "react-icons/io5";
import Interests from "./Interests";

function Member({ member }) {
  return (
    <div className="member-card" data-aos="flip-left" data-aos-duration="50000">
      <img className="photo" alt="member" src={`/images/members/${member.element}.png`} />
      <div className="content">
        <h2>{member.name}</h2>
        <h3>{member.role}</h3>
        <a href={`mailto:${member.email}`}>
          <button>
            <IoMail /> Email
          </button>
        </a>
        <a href={`https://instagram.com/${member.profile}`}>
          <button>
            <IoLogoInstagram /> Instagram
          </button>
        </a>
        <p>{member.quote}</p>
      </div>
      <Interests key={member.name} member={member} />
    </div>
  );
}

export default Member;
