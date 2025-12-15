import Topbar from "./components/Topbar/Topbar";
import HeroSection from "./components/HeroSection/HeroSection";
import Contact from "./components/Contact/Contact";
import SkillsResume from "./components/SkillsResume/SkillsResume";
import Languages from "./components/Languages/Languages";
import Hobbies from "./components/Hobbies/Hobbies";
import Education from "./components/Education/Education";
import Experiences from "./components/Experiences/Experiences";
import DetailedSkills from "./components/DetailedSkills/DetailedSkills";
import Footer from "./components/Footer/Footer";

import content from "./data/content.json";

function App() {
  const { footer } = content;

  return (
    <>
      <Topbar />

      <main className="container cv-layout padded" role="main">
        <HeroSection />

        <aside className="sidebar" aria-labelledby="infos-persos">
          <Contact />
          <SkillsResume />
          <Languages />
          <Hobbies />
          <Education />
        </aside>

        <article className="main-content">
          <Experiences />
          <DetailedSkills />
        </article>
      </main>

      <Footer footer={footer} />
    </>
  );
}

export default App;