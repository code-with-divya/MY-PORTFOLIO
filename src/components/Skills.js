import React from 'react';
import '../styles/Skills.css';
import { 
  FaReact, FaJs, FaHtml5, FaCss3Alt, FaNodeJs, 
  FaDatabase, FaGitAlt, FaJava, FaGithub
} from 'react-icons/fa';
import { SiMongodb, SiRedux, SiExpress, SiPostman } from 'react-icons/si';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", icon: <FaReact />, level: 90 },
        { name: "JavaScript", icon: <FaJs />, level: 90 },
        { name: "HTML5", icon: <FaHtml5 />, level: 95 },
        { name: "CSS3", icon: <FaCss3Alt />, level: 90 },
        { name: "Redux", icon: <SiRedux />, level: 85 },
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", icon: <FaNodeJs />, level: 85 },
        { name: "Express", icon: <SiExpress />, level: 85 },
        { name: "MongoDB", icon: <SiMongodb />, level: 80 },
        { name: "SQL", icon: <FaDatabase />, level: 85 },
        { name: "Java", icon: <FaJava />, level: 75 },
        { name: "RESTful APIs", icon: <FaNodeJs />, level: 90 },
      ]
    },
    {
      title: "Tools & Deployment",
      skills: [
        { name: "Git", icon: <FaGitAlt />, level: 90 },
        { name: "GitHub", icon: <FaGithub />, level: 90 },
        { name: "Postman", icon: <SiPostman />, level: 85 },
      ]
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="section-header">
        <h2>Skills</h2>
        <div className="underline"></div>
      </div>
      <div className="skills-container">
        {skillCategories.map((category, index) => (
          <div className="skill-category" key={index}>
            <h3>{category.title}</h3>
            <div className="skills-list">
              {category.skills.map((skill, skillIndex) => (
                <div className="skill-item" key={skillIndex}>
                  <div className="skill-icon">{skill.icon}</div>
                  <div className="skill-info">
                    <h4>{skill.name}</h4>
                    <div className="skill-progress-container">
                      <div 
                        className="skill-progress" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills; 