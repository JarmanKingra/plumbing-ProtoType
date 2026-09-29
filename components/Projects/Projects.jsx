import Image from "next/image";
import styles from "./Projects.module.css";
export default function Projects({ business }) {
  if (!business.projects?.length) return null;
  return (
    <section className={styles.section} id="projects">
      <div className={styles.container}>
        <div className="sectionIntro">
          <span>Recent work</span>
          <h2>Projects that show the standard we work to.</h2>
          <p>
            Use real project photography here when preparing a client-specific
            demo.
          </p>
        </div>
        <div className={styles.grid}>
          {business.projects.map((project) => (
            <article className={styles.card} key={project.title}>
              <div className={styles.image}>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 699px) 100vw, (max-width: 999px) 50vw, 33vw"
                />
              </div>
              <div className={styles.content}>
                <span>
                  {project.service} · {project.location}
                </span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
