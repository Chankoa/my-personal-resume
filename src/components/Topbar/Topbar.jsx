import React from "react";
import styles from "./Topbar.module.scss";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";

export default function Topbar() {

  return (
    <div className={`${styles.topbar} padded`} role="navigation" aria-label="Actions CV">
      {/* Bloc d’actions caché sur mobile (facultatif) */}
      <div className="hidden">
        <a
          className="btn"
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.print();
          }}
          title="Imprimer / Télécharger en PDF"
        >
          <i className="fa-solid fa-print"></i>
          <strong>Imprimer</strong>
        </a>
      </div>

      {/* Titre CV */}
      <div className="is-muted">
        CV — <strong>Chandra Josephus</strong>
      </div>

      {/* Switcher Light/Dark */}
      <ThemeSwitcher />
    </div>
  );
}
