import content from "../../data/content.json";
  

export default function Education () {

    const { education } = content;

  return ( 
          <section className="formation">
            <h2 className="section-title">Formation</h2>
            <div className="is-muted is-light">
              {education.map((item) => (
                <div key={`${item.year}-${item.text}`}>
                  <strong>{item.year}</strong> — {item.text}
                </div>
              ))}
            </div>
          </section>
        );
    }