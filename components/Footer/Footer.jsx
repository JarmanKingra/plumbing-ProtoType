import styles from "./Footer.module.css";
import { FaInstagram, FaWhatsapp, FaLinkedinIn } from "react-icons/fa";

export default function Footer({ business, commons }) {
  const nav = [
    ["Services", "#services"],
    ["About", "#about"],
    ["Projects", "#projects"],
    ["Reviews", "#reviews"],
    ["FAQ", "#faq"],
    ["Contact", "#quote"],
  ];

  return (
    <footer className={styles.footer} id="contact">
      <div className={styles.container}>
        <div className={styles.brand}>
          <strong>{business.name}</strong>

          <p>{business.description}</p>

          <div className={styles.socials}>
            <a
              href={commons.socials?.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram color="#e1306c"/>
            </a>

            <a
              href={commons.socials?.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <FaWhatsapp color="#25D366"/>
            </a>

            <a
              href={commons.socials?.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn color="#0A66C2"/>
            </a>
          </div>
        </div>

        <div>
          <h3>Explore</h3>

          <nav>
            {nav.map(([label, href]) => (
              <a key={href} href={href}>
                {label}
              </a>
            ))}
          </nav>
        </div>

        <div>
          <h3>Services</h3>

          <nav>
            {(business.services || []).slice(0, 5).map((s) => (
              <a key={s.name} href="#services">
                {s.name}
              </a>
            ))}
          </nav>
        </div>

        <div>
          <h3>Contact</h3>

          <div className={styles.contact}>
            {business.contact?.phone && (
              <a href={`tel:${business.contact.phone}`}>
                {business.contact.phone}
              </a>
            )}

            {business.contact?.email && (
              <a href={`mailto:${business.contact.email}`}>
                {business.contact.email}
              </a>
            )}

            {business.contact?.address && (
              <span>{business.contact.address}</span>
            )}
          </div>

          {business.hours?.length > 0 && (
            <div className={styles.hours}>
              {business.hours.map((h) => (
                <span key={h}>{h}</span>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className={styles.bottom}>
        <span>
          © {new Date().getFullYear()} {business.name}. Demo site.
        </span>

        <span>Privacy · Terms</span>
      </div>
    </footer>
  );
}
