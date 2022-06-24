import "../styles/Interests.css";

function Interests({ member }) {
  return (
    <div className="interests">
      {member.interests &&
        member.interests.map((interest) => {
          return <small>{interest}</small>;
        })}
    </div>
  );
}

export default Interests;
