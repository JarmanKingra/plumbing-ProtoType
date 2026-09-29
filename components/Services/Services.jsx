import Image from "next/image";
import styles from "./Services.module.css";

export default function Services({ commons }) {
  if (!commons.services?.length) return null;

  return (
    <section className={styles.section} id="services">
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.intro}>
            <span className={styles.eyebrow}>What we do</span>

            <h2>Services built around what your property needs.</h2>

            <p>
              Clear service options, practical recommendations, and a team
              that keeps the process straightforward from start to finish.
            </p>
          </div>
        </div>

        <div className={styles.grid}>
          {commons.services.map((service, i) => (
            <article className={styles.card} key={service.name}>
              <div className={styles.imageWrap}>
                <Image
                  src={service.image}
                  alt={service.name}
                  fill
                  sizes="(max-width: 699px) 100vw, (max-width: 999px) 50vw, 33vw"
                  className={styles.image}
                />

                <span className={styles.number}>
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              <div className={styles.content}>
                <h3>{service.name}</h3>

                <p>{service.description}</p>

                <a href="#quote" className={styles.link}>
                  Learn more
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
