import Image from "next/image";
import styles from "./Team.module.css";

export default function Team({ business }) {
  if (!business.team?.length) return null;

  const [featuredMember] = business.team;

  return (
    <section className={styles.section} id="team">
      <div className={styles.container}>
        <div className={styles.featuredCard}>
          <div className={styles.featuredImage}>
            <Image
              src={featuredMember.image}
              alt={`${featuredMember.name}, ${featuredMember.role}`}
              fill
              sizes="(max-width: 699px) 100vw, 320px"
            />
          </div>

          <div className={styles.featuredContent}>
            <span className={styles.eyebrow}>
              {featuredMember.eyebrow || "MEET YOUR LOCAL TEAM"}
            </span>

            <h2>
              {featuredMember.name}.
              <br />
              {featuredMember.headline || "People you can count on."}
            </h2>

            {featuredMember.bio && (
              <p className={styles.featuredBio}>{featuredMember.bio}</p>
            )}

            {featuredMember.role && (
              <span className={styles.role}>{featuredMember.role}</span>
            )}

            <a className={styles.teamLink} href="#contact">
              {featuredMember.cta || "Meet the team"}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}