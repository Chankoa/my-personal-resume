import content from "../../data/content.json";
  

export default function SkillsResume () {

    const { skills } = content;

  return ( 
          <section className="skills-resume">
            <h2 className="section-title">Skills</h2>
            {skills.map((skill) => (
              <span className="pill" key={skill}>{skill}</span>
            ))}
          </section>
        );
    }