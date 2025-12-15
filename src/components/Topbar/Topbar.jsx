import React from "react";
import styles from "./Topbar.module.scss";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";

export default function Topbar() {
  return (
    <div className={`${styles.topbar} padded`} role="navigation" aria-label="Actions CV">
      {/* Bloc d'actions caché sur mobile (facultatif) */}
      <div className="hidden">
        <button
          type="button"
          className="btn"
          onClick={() => window.print()}
          title="Imprimer ou télécharger en PDF"
          aria-label="Imprimer ou télécharger le CV en PDF"
        >
          <i className="fa-solid fa-print" aria-hidden="true"></i>
          <strong>Imprimer</strong>
        </button>
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