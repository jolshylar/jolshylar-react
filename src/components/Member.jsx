import "../styles/Member.css";

function Member({ member }) {
  const photo = require(`../images/members/${member.element}.jpeg`);

  return (
    <div className="member-card">
      <img className="photo" alt="member" src={photo} />
      <div className="content">
        <h2>{member.name}</h2>
        <h3>{member.role}</h3>
        {member.portfolio && (
          <a href={`https://${member.portfolio}`}>
            <button>Portfolio</button>
          </a>
        )}
        <a href={`mailto:${member.email}`}>
          <button className="emailButton">Email</button>
        </a>
        <p>{member.quote}</p>
      </div>
      <div className="contacts"></div>
    </div>
  );
}

export default Member;
