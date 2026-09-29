import Image from "next/image";
import styles from "./About.module.css";
export default function About({ business }) {
  if (!business.about) return null;
  return (
    <section className={styles.section} id="about">
      <div className={styles.container}>
        {/* <div className={styles.image}>
          <Image
            src={business.about.image}
            alt={`${business.name} team and workmanship`}
            fill
            sizes="(max-width: 849px) 100vw, 50vw"
          />
        </div> */}
        <div className={styles.copy}>
          <span>About {business.name}</span>
          <h2>{business.about.title}</h2>
          <p>{business.about.body}</p>
          <div className={styles.points}>
            {business.trustBadges?.map((item) => (
              <div key={item}>
                <b>✓</b>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
