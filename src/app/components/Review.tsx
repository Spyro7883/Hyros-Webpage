import styles from "../styles/review.module.scss";
import Image from "next/image";
import StarIcon from "./StarIcon";

type ReviewProps = {
    adSpendCounter: string[];
    adValue: number;
}

const Review: React.FC<ReviewProps> = ({ adSpendCounter, adValue }) => {

    return (<>
        <section
            className={styles.trustpilot_review}
            aria-label="TrustPilot Review"
        >
            <p className={styles.message_review_text}>
                "In just 6 months HYROS allowed us to scale our ad spend by 43% for
                Business Mastery and over 100% for Unleash The Power Within."
            </p>
            <p className={styles.message_review_author}>
                — TonyRobbins.com Ad Team
            </p>
            <p className={styles.message_review_author}>
                Excellent 4.8 out of 5
                <StarIcon className={styles.star_icon} />
                Trustpilot
            </p>

            <h2 className={styles.ad_spend_title}>
                3,000+ Businesses Have Used HYROS To Track Over
            </h2>
            <figure className={`${styles.ad_container} d-flex text-center`}>
                <Image
                    src="/Hyros_Price_Counter.png"
                    alt="Price Counter Background"
                    width={415}
                    height={96}
                    priority
                />

                <figcaption
                    className={`${styles.ad_value} d-flex clmn-dir center-Oy`}
                >
                    <Image
                        src="/Hyros_Green_Polygon.png"
                        alt="Green Polygon"
                        className={styles.green_polygon}
                        width={12}
                        height={10}
                        priority
                    />
                    <p>{`$${adSpendCounter[adValue]}`}</p>
                </figcaption>
            </figure>
            <p className={styles.ad_spend_subtitle}>In Ad Spend</p>
        </section>
    </>)
}

export default Review;