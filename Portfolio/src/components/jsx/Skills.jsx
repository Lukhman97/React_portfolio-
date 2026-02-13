import "../css/Skills.css";

import {
  FaPython,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaDatabase,
  FaGitAlt,
  FaGithub,
  FaBootstrap,
  FaNetworkWired,
  FaCodeBranch,
  FaLaptopCode,
  FaTerminal,
  FaFileWord,
  FaFileExcel
} from "react-icons/fa";

function Skills() {

  const technicalSkills = [
    { icon: <FaPython />, name: "Python" },
    { icon: <FaNetworkWired />, name: "Django" },
    { icon: <FaReact />, name: "React" },
    { icon: <FaHtml5 />, name: "HTML5" },
    { icon: <FaCss3Alt />, name: "CSS3" },
    { icon: <FaJs />, name: "JavaScript" },
    { icon: <FaDatabase />, name: "SQL" },
    { icon: <FaCodeBranch />, name: "Pandas" },
    { icon: <FaNetworkWired />, name: "NumPy" },
    { icon: <FaBootstrap />, name: "Bootstrap" },
    { icon: <FaNetworkWired />, name: "REST APIs" },
    { icon: <FaCodeBranch />, name: "JSON" },
    { icon: <FaGitAlt />, name: "Git" },
    { icon: <FaGithub />, name: "GitHub" }
  ];

  const tools = [
    { icon: <FaLaptopCode />, name: "VS Code" },
    { icon: <FaTerminal />, name: "PowerShell" },
    { icon: <FaFileWord />, name: "MS Office" },
    { icon: <FaFileExcel />, name: "MS Excel" },
    { icon: <FaGithub />, name: "GitHub Desktop" },
    { icon: <FaDatabase />, name: "MySQL Workbench" }
  ];

  return (
    <section className="skills" id="skills">
      <h2 className="section-title">Skills</h2>

      <h3 className="subcategory-title">Technical Skills</h3>
      <div className="skills-grid">
        {technicalSkills.map((skill, index) => (
          <SkillCard key={index} icon={skill.icon} name={skill.name} />
        ))}
      </div>

      <h3 className="subcategory-title">Tools</h3>
      <div className="skills-grid">
        {tools.map((tool, index) => (
          <SkillCard key={index} icon={tool.icon} name={tool.name} />
        ))}
      </div>
    </section>
  );
}

function SkillCard({ icon, name }) {
  return (
    <div className="skill-item">
      <div className="skill-icon">{icon}</div>
      <h4>{name}</h4>
    </div>
  );
}

export default Skills;
