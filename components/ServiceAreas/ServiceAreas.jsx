import styles from "./ServiceAreas.module.css";
export default function ServiceAreas({ business }) {
  if (!business.serviceAreas?.length) return null;
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div>
          <span>Where we work</span>
          <h2>Serving local customers across {business.location}.</h2>
          <p>
            Service areas are data-driven, so each business can show only the
            communities it actually serves.
          </p>
        </div>
        <div className={styles.areas}>
          {business.serviceAreas.map((area) => (
            <span key={area}>{area}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
