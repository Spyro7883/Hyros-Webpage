import styles from "../styles/title.module.scss";

export default function Title() {
    return (
        <>
            <section className={styles.title} aria-label="Title section">
                <h1>
                    <p className={`${styles.title_ads}`}>Track Ads.</p>
                    <p className={`${styles.subtitle_ai}`}>Feed AI.</p>
                    <p className={`${styles.ad_roi}`}>
                        HYROS AI Print Tracking is proven to increase AD ROI in over 3,000
                        businesses
                    </p>
                </h1>
            </section>
        </>)
}