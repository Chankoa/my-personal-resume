
import Topbar from "./components/Topbar/Topbar"

function App() {
  return (
    <>
      {/* Top bar */}
      <Topbar />

      {/* CONTENU PRINCIPAL */}
      <main className="container cv-layout padded" role="main">

        {/* En-tête */}
        <header className="cv-header">
          <div className="header-title">
            <div className="avatar hidden">CJ</div>
            <h1 className="name">Chandra Josephus<span className="big-dot">.</span></h1>
            <div className="role is-muted">Web designer • Formateur • Entrepreneur outdoor</div>
          </div>

          {/* Présentation */}
          <section className="teaser">
            <h2 className="section-title">Passionné par le design et l’intégration web,</h2>
            <p className="teaser-summary muted">Je conçois des sites et interfaces numériques dans une volonté d’esthétisme, d’originalité, et la recherche d’une expérience utilisateur optimale. Attiré par les aspects créatifs tout autant que techniques, je suis à la recherche de nouveaux défis pour contribuer à des projets numériques ambitieux et performants.</p>
          </section>
        </header>

        {/* Présentation (SIDEBAR) */}
        <aside className="sidebar" aria-labelledby="infos-persos">
          {/* contact */}
          <div className="contact">
            {/* Contact */}
            <div id="contact">
              <ul className="unpadded undotted-li">
                {/* mail */}
                <li>
                  <a href="mailto:chandra.chandra@proton.me">
                    chandra.josephus@proton.me <i className="fa fa-arrow-up-right-from-square"></i>
                  </a>
                </li>
                {/* tél */}
                <li>
                  <a href="tel:+33682919856">
                    +336 82 91 98 56 <i className="fa fa-arrow-up-right-from-square"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Skills */}
          <section className="skills-resume">
            <h2 className="section-title">Compétences</h2>
            <span className="pill">HTML / CSS</span>
            <span className="pill">WordPress</span>
            <span className="pill">UX / UI</span>
            <span className="pill">SEO</span>
            <span className="pill">Gestion d'équipe</span>
            <span className="pill">Pédagogie</span>
          </section>

          {/* Langues */}
          <section className="langues">
            <h2 className="section-title">Langues</h2>
            <div className="is-muted is-light">Anglais courant · notions d'espagnol</div>
          </section>

          {/* Hobbies */}
          <section className="hobbies">
            <h2 className="section-title">Hobbies</h2>
            <div className="is-muted is-light">Guitare • Audiovisuel & storytelling • Voyages</div>
          </section>

          {/* Formation */}
          <section className="formation">
            <h2 className="section-title">Formation</h2>
            <div className="is-muted is-light">
              <strong>2013</strong> — Certification Webdesigner, ADF Manosque<br />
              <strong>1998</strong> — Diplôme d'Etat éducateur sportif (Escalade & canyoning)<br />
              <strong>1990</strong> — Baccalauréat, SES
            </div>
          </section>
        </aside>
        <div className="main-content">
          {/* Expériences */}
          <section className="experiences">
            <h2 className="section-title">Expériences</h2>

            {/* Expérience 1 */}
            <article className="experience">
              {/* En-tête */}
              <header className="exp-header is-muted">
                <h3 className="exp-title">Gestion d'entreprise & Activités Pleine Nature</h3>
                <p className="exp-meta">Depuis 2019</p>
                <p className="exp-meta">Création et direction de l'enseigne <strong>Rocksiders</strong></p>
                <p className="exp-meta">Organisation • Commercialisation • Encadrement</p>
              </header>

              {/* Descriptif */}
              <aside>
                <ul className="exp-list">
                  <li>Organisation, planification et gestion opérationnelle</li>
                  <li>Commercialisation, communication et marketing</li>
                  <li>Partenariats et relation clientèle</li>
                  <li>Encadrement de groupes et gestion d'équipe</li>
                </ul>
              </aside>
            </article>

            {/* Expérience 2 */}
            <article className="experience">
              {/* En-tête */}
              <header className="exp-header is-muted">
                <h3 className="exp-title">Formateur Web (AKSIS, ADF, freelance)</h3>
                <p className="exp-meta">Depuis 2016</p>
                <p className="exp-meta">Conception et animation de formations certifiantes</p>
                <p className="exp-meta">Pédagogie • Création de contenus</p>
              </header>

              {/* Descriptif */}
              <aside>
                <ul className="exp-list">
                  <li>Création de contenus pédagogiques et supports</li>
                  <li>Accompagnement des apprenants dans leurs projets professionnels</li>
                </ul>
              </aside>
            </article>

            {/* Expérience 3 */}
            <article className="experience">
              {/* En-tête */}
              <header className="exp-header is-muted">
                <h3 className="exp-title">Web designer / Intégrateur front-end (Freelance)</h3>
                <p className="exp-meta">Depuis 2011</p>
                <p className="exp-meta">HTML, CSS, UX/UI, SEO, WordPress</p>
                <p className="exp-meta">Projets : rocksiders.com, lafabrique-moustiers.com</p>
              </header>

              {/* Descriptif */}
              <aside>
                <ul className="exp-list">
                  <li>Conception d'interfaces et intégration front-end</li>
                  <li>Rédaction de contenus optimisés pour le web</li>
                  <li>Maintenance et accompagnement clients</li>
                </ul>
              </aside>
            </article>

            {/* Expérience 4 */}
            <article className="experience">
              {/* En-tête */}
              <header className="exp-header is-muted">
                <h3 className="exp-title">Éducateur sportif, moniteur escalade & canyoning</h3>
                <p className="exp-meta">Depuis 1998</p>
                <p className="exp-meta">Encadrement, enseignement et tutorat</p>
                <p className="exp-meta">Pratique & formation de professionnels</p>
              </header>

              {/* Descriptif */}
              <aside>
                <ul className="exp-list">
                  <li>Encadrement et entraînement de groupes</li>
                  <li>Tutorat et formation de moniteurs</li>
                </ul>
              </aside>
            </article>
          </section>

          {/* Compétences détaillées */}
          <section className="skills">
            <h2 className="section-title">Compétences détaillées</h2>

            {/* Skill 1 */}
            <article className="skill">
              <h3 className="skill-title">Collaboration & dynamique collective</h3>
              <p className="skill-meta">Animation et coordination d’équipes, partage des savoirs et valorisation des contributions individuelles.</p>
            </article>

            {/* Skill 2 */}
            <article className="skill">
              <h3 className="skill-title">Organisation & communication</h3>
              <p className="skill-meta">Création et adaptation de supports print/digitaux, coordination de projets, anticipation et réactivité.</p>
            </article>

            {/* Skill 3 */}
            <article className="skill">
              <h3 className="skill-title">Expertise & polyvalence</h3>
              <p className="skill-meta">Polyvalence (encadrement, digital, gestion), transversalité pédagogique et créativité.</p>
            </article>
          </section>
        </div>
      </main>
    </>
  )
}

export default App
