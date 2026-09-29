
"use client";

import { useState } from "react";
import styles from "./FAQ.module.css";

export default function FAQ({ commons }) {
  const [open, setOpen] = useState(0);

  if (!commons.faqs?.length) return null;

  return (
    <section className={styles.section} id="faq">
      <div className={styles.container}>
        <div className={styles.intro}>
          <span className={styles.eyebrow}>Questions, answered</span>

          <h2>
            What homeowners
            <br />
            <em>usually ask.</em>
          </h2>

          <p>
            Have a question before booking? Here are some of the things
            homeowners commonly want to know about our services.
          </p>

          <a href="#quote" className={styles.cta}>
            Still have questions?
            <span>Request a quote →</span>
          </a>
        </div>

        <div className={styles.list}>
          {commons.faqs.map((faq, i) => {
            const active = open === i;

            return (
              <div
                className={`${styles.item} ${active ? styles.active : ""}`}
                key={faq.question}
              >
                <button
                  type="button"
                  onClick={() => setOpen(active ? -1 : i)}
                  aria-expanded={active}
                  aria-controls={`faq-${i}`}
                >
                  <span className={styles.question}>
                    <small>{String(i + 1).padStart(2, "0")}</small>
                    {faq.question}
                  </span>

                  <span className={styles.icon} aria-hidden="true">
                    {active ? "−" : "+"}
                  </span>
                </button>

                <div
                  id={`faq-${i}`}
                  className={styles.answerWrapper}
                  aria-hidden={!active}
                >
                  <div className={styles.answer}>
                    <p>{faq.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
