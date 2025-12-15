import content from "../../data/content.json";
  

export default function Hobbies () {

    const { hobbies } = content;

  return ( 
          <section className="hobbies">
            <h2 className="section-title">Hobbies</h2>
            <div className="is-muted is-light">{hobbies}</div>
          </section>
        );
    }