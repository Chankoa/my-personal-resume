import content from "../../data/content.json";
  

export default function Experiences () {

    const { experiences } = content;

  return ( 
          <section className="experiences">
            <h2 className="section-title">Expériences</h2>

            {experiences.map((exp) => (
              <article className="experience" key={exp.title}>
                <header className="exp-header is-muted">
                  <h3 className="exp-title">{exp.title}</h3>
                  {exp.meta.map((line, idx) => (
                    <p className="exp-meta" key={`${exp.title}-meta-${idx}`}>
                      {line}
                    </p>
                  ))}
                </header>
                <aside>
                  <ul className="exp-list">
                    {exp.items.map((item, idx) => (
                      <li key={`${exp.title}-item-${idx}`}>{item}</li>
                    ))}
                  </ul>
                </aside>
              </article>
            ))}
          </section>
        );
    }