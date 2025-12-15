import content from "../../data/content.json";
  

export default function Languages () {

    const { languages } = content;

  return ( 
          <section className="langues">
            <h2 className="section-title">Langues</h2>
            <div className="is-muted is-light">{languages}</div>
          </section>
        );
    }