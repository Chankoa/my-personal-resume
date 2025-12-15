import content from "../../data/content.json";
  

export default function Contact () {

    const { contacts } = content;

  return ( 
          <section className="contact">
            <div id="contact">
              <ul className="unpadded undotted-li">
                {contacts.map((contact) => (
                  <li key={contact.href}>
                    <a href={contact.href}>
                      {contact.text} <i className={contact.icon} aria-hidden="true"></i>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        );
    }