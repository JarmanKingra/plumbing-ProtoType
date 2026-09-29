
import styles from "./TrustBar.module.css";
export default function TrustBar({ business }) {
  const items = [
    business.rating && { value: business.rating, label: "Google rating" },
    business.reviewCount && {
      value: `${business.reviewCount}+`,
      label: "customer reviews",
    },
    business.yearsInBusiness && {
      value: business.yearsInBusiness,
      label: "years in business",
    },
    ...(business.trustBadges || [])
      .slice(0, 2)
      .map((label) => ({ value: "✓", label })),
  ].filter(Boolean);
  if (!items.length) return null;
  return (
    <section className={styles.bar} aria-label="Business trust signals">
      <div className={styles.inner}>
        {items.map((item, i) => (
          <div className={styles.item} key={`${item.label}-${i}`}>
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
