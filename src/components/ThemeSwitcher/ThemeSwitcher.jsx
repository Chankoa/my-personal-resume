import React, { useEffect, useState } from "react";
import styles from "./ThemeSwitcher.module.scss";

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    // 1. check localStorage
    const saved = localStorage.getItem("theme");
    if (saved) {
      setTheme(saved);
      document.documentElement.setAttribute("data-theme", saved);
      return;
    }
    // 2. fallback to system preference
    const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initial = prefersDark ? "dark" : "light";
    setTheme(initial);
    document.documentElement.setAttribute("data-theme", initial);
  }, []);

  const toggle = () => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  };

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      className={`${styles.switch} ${isDark ? styles.switchDark : ""}`}
      onClick={toggle}
      aria-pressed={isDark}
      aria-label={`Activer le mode ${isDark ? "clair" : "sombre"}`}
    >
      <i className={`fa-solid ${isDark ? "fa-sun" : "fa-moon"} ${styles.icon}`}></i>
      <div className={`${styles.switchCircle} ${isDark ? styles.circleMove : ""}`}></div>
    </button>
  );
}
