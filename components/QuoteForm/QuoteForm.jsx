"use client";
import { useState } from "react";
import styles from "./QuoteForm.module.css";
export default function QuoteForm({ business }) {
  const [submitted, setSubmitted] = useState(false);
  function submit(e) {
    e.preventDefault();
    setSubmitted(true);
  }
  return (
    <section className={styles.section} id="quote">
      <div className={styles.shell}>
        <div className={styles.intro}>
          <span>Start with a conversation</span>
          <h2>{business.cta.primary}</h2>
          <p>
            Tell us a little about the property and what you need. This demo
            form is front-end only; connect it to your preferred lead system
            when you are ready.
          </p>
          <div className={styles.reassurance}>
            🔒 Your details are only used to respond to your request.
          </div>
        </div>
        <form className={styles.form} onSubmit={submit}>
          {submitted ? (
            <div className={styles.success}>
              <span>✓</span>
              <h3>Request received</h3>
              <p>
                This demo submission was handled on the client. Connect the form
                to your backend or CRM before launch.
              </p>
              <button type="button" onClick={() => setSubmitted(false)}>
                Send another request
              </button>
            </div>
          ) : (
            <>
              <div className={styles.grid}>
                <label>
                  Full name
                  <input name="name" required placeholder="Your full name" />
                </label>
                <label>
                  Phone
                  <input name="phone" required placeholder="(512) 555-0123" />
                </label>
                <label>
                  Email
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                  />
                </label>
                <label>
                  Property / service location
                  <input
                    name="location"
                    required
                    placeholder="City or ZIP code"
                  />
                </label>
                <label>
                  Service interested in
                  <select name="service" defaultValue="">
                    <option value="" disabled>
                      Select a service
                    </option>
                    {business.services?.map((s) => (
                      <option key={s.name}>{s.name}</option>
                    ))}
                  </select>
                </label>
                <label>
                  Details
                  <textarea
                    name="message"
                    rows="4"
                    placeholder="Tell us briefly what you need..."
                  />
                </label>
              </div>
              <button className={styles.submit} type="submit">
                {business.cta.primary} <span>→</span>
              </button>
            </>
          )}
        </form>
      </div>
    </section>
  );
}
