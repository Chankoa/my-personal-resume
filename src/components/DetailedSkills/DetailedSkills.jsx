import content from "../../data/content.json";

export default function DetailedSkills() {
  const { detailedSkills } = content;

  return ( 
          <section className="skills">
            <h2 className="section-title">Compétences détaillées</h2>

            {detailedSkills.map((skill) => (
              <article className="skill" key={skill.title}>
                <h3 className="skill-title">{skill.title}</h3>
                <p className="skill-meta">{skill.description}</p>
              </article>
            ))}
          </section>
        );
    }