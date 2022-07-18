import "../styles/Main.css";
import About from "./About";
import MemberList from "./Members/MemberList";
import ProjectList from "./Projects/ProjectList";

function Main() {
  return (
    <main>
      <About />
      <ProjectList />
      <MemberList />
    </main>
  );
}

export default Main;
