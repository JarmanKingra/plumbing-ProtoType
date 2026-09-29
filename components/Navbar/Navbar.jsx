"use client";

import { useState } from "react";
import styles from "./Navbar.module.css";

const links = [
  ["Services", "services"],
  // ["About", "about"],
  ["Projects", "projects"],
  ["Reviews", "reviews"],
  ["FAQ", "faq"],
  ["Contact", "contact"],
];

export default function Navbar({ business }) {
  const [open, setOpen] = useState(false);

  const logoLetter = business.name?.trim()?.charAt(0)?.toUpperCase() || "B";

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        {/* Brand */}
        <a
          href="#top"
          className={styles.brand}
          onClick={() => setOpen(false)}
          aria-label={`${business.name} home`}
        >
          <span className={styles.logo} aria-hidden="true">
            {logoLetter}
          </span>

          <span className={styles.brandText}>
            <strong>{business.name}</strong>
            <small>{business.category}</small>
          </span>
        </a>

        {/* Desktop / Mobile Navigation */}
        <nav
          id="mobile-navigation"
          className={`${styles.nav} ${open ? styles.navOpen : ""}`}
          aria-label="Primary navigation"
        >
          <a href="#top" onClick={() => setOpen(false)}>
            Home
          </a>

          {links.map(([label, id]) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={() => setOpen(false)}
            >
              {label}
            </a>
          ))}

          <a
            className={styles.mobileCta}
            href="#quote"
            onClick={() => setOpen(false)}
          >
            {business.cta.primary}
            <span>→</span>
          </a>
        </nav>

        {/* Right side */}
        <div className={styles.actions}>
          <a className={styles.cta} href="#quote">
            <span>{business.cta.primary}</span>
            <span className={styles.ctaArrow}>→</span>
          </a>
          {business.contact?.phone && (
            <a
              className={styles.phone}
              href={`tel:${business.contact.phone}`}
            >
              <span className={styles.phoneLabel}>Call us</span>
              <strong>{business.contact.phone}</strong>
            </a>
          )}

          

          <button
            className={`${styles.menu} ${open ? styles.menuOpen : ""}`}
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}