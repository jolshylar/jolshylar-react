import Member from "./Member";
import data from "../data/members";
import '../styles/MemberList.css'

function MemberList() {
  return (
    <>
      <h1 className="members--title">Our Members</h1>
      <div className="members-container">
        <div className="members-list">
          {data.map((member) => (
            <Member member={member} />
          ))}
        </div>
      </div>
    </>
  );
}

export default MemberList;
