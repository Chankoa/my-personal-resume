import content from "../../data/content.json";
  

export default function HeroSection() {

    const { header } = content;

  return ( 
      
        <header className="cv-header">
          <div className="header-title">
            <div className="avatar hidden">{header.avatarInitials}</div>
            <h1 className="name">
              {header.name}
              <span className="big-dot">.</span>
            </h1>
            <div className="role is-muted">{header.role}</div>
          </div>

          <section className="teaser">
            <h2 className="section-title">{header.teaserTitle}</h2>
            <p className="teaser-summary muted">{header.teaserSummary}</p>
          </section>
        </header>
        );
    }