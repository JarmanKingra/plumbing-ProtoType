"use client";
import styles from "./Reviews.module.css";

export default function Reviews({ business }) {
  if (!business.reviews?.length) return null;

  const reviews = business.reviews;
  const shouldAnimate = reviews.length > 5;

  return (
    <section className={styles.section} id="reviews">
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.heading}>
            <span className={styles.eyebrow}>Customer feedback</span>

            <h2>
              Real experiences.
              <br />
              Confidence in your next step.
            </h2>
          </div>

          {business.rating && (
            <div className={styles.summary}>
              <strong>{business.rating}</strong>

              <span className={styles.summaryStars}>★★★★★</span>

              <span className={styles.summaryReviews}>
                from {business.reviewCount}+ reviews
              </span>
            </div>
          )}
        </div>

        <div className={styles.slider}>
          <div
            className={`${styles.track} ${
              shouldAnimate ? styles.animated : ""
            }`}
          >
            {reviews.map((review, index) => (
              <article className={styles.card} key={`${review.name}-${index}`}>
                <div className={styles.cardTop}>
                  <span className={styles.google}>
                    <svg
                      className={styles.googleG}
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fill="#4285F4"
                        d="M21.35 12.27c0-.71-.06-1.39-.18-2.05H12v3.88h5.24a4.48 4.48 0 0 1-1.94 2.94v2.44h3.14c1.84-1.69 2.91-4.18 2.91-7.21z"
                      />
                      <path
                        fill="#34A853"
                        d="M12 21.75c2.63 0 4.84-.87 6.45-2.36l-3.14-2.44c-.87.58-1.98.92-3.31.92-2.54 0-4.69-1.72-5.46-4.03H3.29v2.52A9.75 9.75 0 0 0 12 21.75z"
                      />
                      <path
                        fill="#FBBC05"
                        d="M6.54 13.84A5.86 5.86 0 0 1 6.23 12c0-.64.11-1.26.31-1.84V7.64H3.29A9.75 9.75 0 0 0 2.25 12c0 1.57.38 3.05 1.04 4.36l3.25-2.52z"
                      />
                      <path
                        fill="#EA4335"
                        d="M12 6.13c1.43 0 2.71.49 3.72 1.45l2.79-2.79C16.84 3.2 14.63 2.25 12 2.25a9.75 9.75 0 0 0-8.71 5.39l3.25 2.52C7.31 7.85 9.46 6.13 12 6.13z"
                      />
                    </svg>
                  </span>

                  <span className={styles.stars}>★★★★★</span>
                </div>

                <div className={styles.divider} />

                <p className={styles.reviewText}>“{review.text}”</p>

                <div className={styles.person}>
                  <strong>{review.name}</strong>

                  <span>
                    {review.location} · {review.date}
                  </span>
                </div>

                <div className={styles.source}>
                  
                  <span>Review on Google</span>
                </div>
              </article>
            ))}

            {shouldAnimate &&
              reviews.map((review, index) => (
                <article
                  className={styles.card}
                  key={`duplicate-${review.name}-${index}`}
                  aria-hidden="true"
                >
                  <div className={styles.cardTop}>
                    <span className={styles.google}>
                      <span className={styles.googleG}>G</span>
                    </span>

                    <span className={styles.stars}>★★★★★</span>
                  </div>

                  <div className={styles.divider} />

                  <p className={styles.reviewText}>“{review.text}”</p>

                  <div className={styles.person}>
                    <strong>{review.name}</strong>

                    <span>
                      {review.location} · {review.date}
                    </span>
                  </div>

                  <div className={styles.source}>
                    <span className={styles.googleG}>G</span>
                    <span>Google review</span>
                  </div>
                </article>
              ))}
          </div>
        </div>

        <div className={styles.actions}>
          <button
            type="button"
            className={styles.pauseButton}
            onClick={(e) => {
              const track = e.currentTarget
                .closest(`.${styles.section}`)
                .querySelector(`.${styles.track}`);

              track.classList.toggle(styles.paused);

              e.currentTarget.textContent = track.classList.contains(
                styles.paused,
              )
                ? "Play reviews  ▶"
                : "Pause reviews  ⏸";
            }}
          >
            Pause reviews &nbsp; ⏸
          </button>

          <a href="#reviews" className={styles.readButton}>
            Read all {business.reviewCount || reviews.length}+ reviews
            <span>→</span>
          </a>
        </div>

        {shouldAnimate && (
          <div className={styles.dots} aria-hidden="true">
            <span className={styles.activeDot} />
            <span />
            <span />
            <span />
            <span />
          </div>
        )}

        <div className={styles.footer}>
          <span className={styles.googleG}>G</span>

          <span>
            {business.reviewCount || reviews.length} selected Google reviews
            supplied via Google.
          </span>

          <a href="#reviews">See the current Google profile.</a>
        </div>
      </div>
    </section>
  );
}
