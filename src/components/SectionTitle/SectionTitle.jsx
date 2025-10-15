import React from "react";
import styles from "./SectionTitle.module.scss";

export default function SectionTitle() {
  return (
    <header className={styles.cvHeader}>
      <div className={styles.identity}>
        <div className={styles.avatar}>CJ</div>
        <h1 className={styles.name}>
          Chandra Josephus
          <span className={`${styles.bigDot} ${styles.isTealColor}`}>.</span>
        </h1>
        <div className={styles.role}>
          Web designer • Formateur • Entrepreneur outdoor
        </div>
      </div>

      <section className={styles.teaser}>
        <h2 className={styles.sectionTitle}>
          Passionné par le design et l’intégration web,
        </h2>
        <p className={`${styles.summary} ${styles.muted}`}>
          je conçois des sites et interfaces numériques dans une volonté
          d’esthétisme, d’originalité, et la recherche d’une expérience
          utilisateur optimale. Attiré par les aspects créatifs tout autant que
          techniques, je suis à la recherche de nouveaux défis pour contribuer à
          des projets numériques ambitieux et performants.
        </p>
      </section>
    </header>
  );
}
