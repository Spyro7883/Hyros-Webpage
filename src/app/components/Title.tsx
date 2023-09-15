import styles from "../styles/title.module.scss";

export default function Title() {
    return (
        <>
            <section className={styles.container} aria-label="Title section">
                <h1>
                    <p className={`${styles.main}`}>Track Ads.</p>
                    <p className={`${styles.secondary}`}>Feed AI.</p>
                    <p className={`${styles.roi}`}>
                        HYROS AI Print Tracking is proven to increase AD ROI in over 3,000
                        businesses
                    </p>
                </h1>
            </section>
        </>)
}