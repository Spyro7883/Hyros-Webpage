import styles from "../styles/review.module.scss";
import Image from "next/image";
import StarIcon from "./StarIcon";
import useWindowWidth from "../hooks/useWindow";

type ReviewProps = {
    adSpendCounter: string[];
    adValue: number;
}

const Review: React.FC<ReviewProps> = ({ adSpendCounter, adValue }) => {
    const usersWidth = useWindowWidth() || 0;

    return (<>
        <section
            className={styles.container}
            aria-label="TrustPilot Review"
        >
            <p className={styles.message}>
                "In just 6 months HYROS allowed us to scale our ad spend by 43% for
                Business Mastery and over 100% for Unleash The Power Within."
            </p>
            <p className={styles.author}>
                — TonyRobbins.com Ad Team
            </p>
            <p className={styles.author}>
                Excellent 4.8 out of 5
                <StarIcon className={styles.icon} />
                Trustpilot
            </p>

            <h2 className={styles.title}>
                3,000+ Businesses Have Used HYROS To Track Over
            </h2>
            <figure className={styles.spend}>
                <Image
                    src="/Hyros_Price_Counter.png"
                    alt="Price Counter Background"
                    width={553}
                    height={96}
                    priority
                />

                <figcaption
                    className={styles.value}
                >
                    {usersWidth >= 284 ?
                        <Image
                            src="/Hyros_Green_Polygon.png"
                            alt="Green Polygon"
                            className={styles.polygon}
                            width={12}
                            height={10}
                            priority
                        /> : ""}
                    <p>{`$${adSpendCounter[adValue]}`}</p>
                </figcaption>
            </figure>
            <p className={styles.description}>In Ad Spend</p>
        </section>
    </>)
}

export default Review;