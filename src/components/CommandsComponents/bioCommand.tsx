import LinkedInLogo from "../../assets/icons/linkedin.svg";
import githubLogo from "../../assets/icons/github.svg";

function bioCommand() {
  return (
    <div className="text-xl mb-5 text-white flex flex-row items-center">
      <img
        src="https://avatars.githubusercontent.com/u/43711246?v=4"
        alt="Avatar"
        width={300}
        className="rounded-full"
      />
      <div className="flex flex-col p-5">
        <h2 className="text-center font-bold text-2xl">Yassed Matta</h2>
        <p className="mb-2">
          I'm a Systems Engineering student passionate about exploring new
          technologies and constantly learning. I'm proficient in Java, Flutter,
          Python, HTML, and CSS.
        </p>
        <p>
          I'm particularly excited about JavaScript, TypeScript, React, and
          Node.js. Always eager to enhance my skills and tackle challenges in
          the dynamic field of software development. Let's learn and grow
          together!
        </p>
        <div className="flex flex-row justify-around">
          <div className="flex flex-row">
            <img src={LinkedInLogo} alt="LinkedIn Logo" />
            <a
              href="https://www.linkedin.com/in/mattayassed/"
              className="text-cyan-600 underline"
              target="_blank"
            >
              LinkedIn
            </a>
          </div>
          <div className="flex flex-row">
            <img src={githubLogo} alt="Github Logo" />
            <a
              href="https://github.com/soymatta"
              className="text-cyan-600 underline"
              target="_blank"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default bioCommand;
