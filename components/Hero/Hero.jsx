"use client";

import Image from "next/image";
import styles from "./Hero.module.css";

export default function Hero({ business }) {
  return (
    <section className={styles.hero} id="top">
      <div className={styles.imageWrap}>
        <Image
          src={business.heroImage}
          alt={`${business.name} ${business.category} services`}
          fill
          priority
          sizes="100vw"
          className={styles.image}
        />
      </div>

      <div className={styles.overlay} />

      <div className={styles.container}>
        <div className={styles.copy}>
          <span className={styles.eyebrow}>{business.eyebrow}</span>

          <h1>{business.headline}</h1>

          <p>{business.subheadline}</p>

          <div className={styles.buttons}>
            <a className={styles.primary} href="#quote">
              {business.cta.primary}
            </a>

            {business.cta.secondary && business.contact?.phone && (
              <a
                className={styles.secondary}
                href={`tel:${business.contact.phone}`}
              >
                {business.cta.secondary}
              </a>
            )}
          </div>

          {business.rating && (
            <div className={styles.rating}>
              <span aria-hidden="true">★★★★★</span>

              <strong>{business.rating}</strong>

              <span>from {business.reviewCount}+ reviews</span>
            </div>
          )}
        </div>

        <form
          className={styles.form}
          id="quote"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className={styles.formHeading}>
            <span>Request a quote</span>

            <h2>Tell us about your project</h2>

            <p>
              Fill out the form and our team will get back to you shortly.
            </p>
          </div>

          <div className={styles.grid}>
            <label>
              Full name

              <input
                name="name"
                required
                placeholder="Your full name"
              />
            </label>

            <label>
              Phone

              <input
                name="phone"
                required
                placeholder="(512) 555-0123"
              />
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

            <label className={styles.fullWidth}>
              Service interested in

              <select name="service" defaultValue="">
                <option value="" disabled>
                  Select a service
                </option>

                {business.services?.map((service) => (
                  <option key={service.name} value={service.name}>
                    {service.name}
                  </option>
                ))}
              </select>
            </label>

            <label className={styles.fullWidth}>
              Details

              <textarea
                name="message"
                rows="4"
                placeholder="Tell us briefly what you need..."
              />
            </label>
          </div>

          <button className={styles.submit} type="submit">
            {business.cta.primary}

            <span aria-hidden="true">→</span>
          </button>
        </form>
      </div>
    </section>
  );
}