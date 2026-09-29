
import styles from "./WhyChooseUs.module.css";

export default function WhyChooseUs({ commons }) {
  if (!commons.whyChooseUs?.length) return null;

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.heading}>
          <span className={styles.eyebrow}>Why customers choose us</span>

          <h2>
            The details
            <br />
            <em>matter.</em>
          </h2>

          <p>
            Strong local businesses earn trust by making the experience clear,
            responsive, and professional from the first conversation to the
            finished job.
          </p>

          <div className={styles.headingBottom}>
            <span className={styles.line} />
            <span className={styles.note}>Built around your experience</span>
          </div>
        </div>

        <div className={styles.features}>
          {commons.whyChooseUs.map((item, i) => (
            <article className={styles.card} key={item.title}>
              <div className={styles.cardTop}>
                <span className={styles.number}>
                  {String(i + 1).padStart(2, "0")}
                </span>

                <span className={styles.arrow}>↗</span>
              </div>

              <div className={styles.cardContent}>
                <h3>{item.title}</h3>

                <p>{item.description}</p>
              </div>

              <span className={styles.cardLine} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}