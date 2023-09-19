import styles from "../styles/business_model.module.scss";
import Image from "next/image";

type BusinessModelProps = {
    boxTitle: string[]
    firstBusinessModel: boolean;
}

const BusinessModel: React.FC<BusinessModelProps> = ({ boxTitle, firstBusinessModel }) => {
    return (<>
        <section
            className={firstBusinessModel ? styles.first : styles.second}
            aria-label="Business Model"
        >
            {firstBusinessModel ? <h3>
                <p className={styles.title}>
                    HYROS is{" "}
                    <span className={styles.highlight}>the HIGHEST level</span> of AD
                    Tracking & AI Optimization for digital businesses
                </p>
                <p className={styles.subtitle}>
                    Click To See Features That Apply To YOUR Business Model
                </p>
            </h3> : <p className={styles.subtitle}>
                Click To See Features That Apply To YOUR Business Model
            </p>}
            {boxTitle.map((box_option) => (
                <a className={styles.box} key={box_option}>
                    <div className={styles.wrapper}>
                        <p className={styles.category}>{box_option}</p>
                        <div className={styles.circle} />
                    </div>
                    <p className={styles.message}>
                        The most important tools and features for Info
                    </p>
                    <div className={styles.arrow}>
                        <Image
                            src="/Logo_Arrow.png"
                            alt="Arrow Icon"
                            width={16}
                            height={14.5}
                            priority
                        />
                    </div>
                </a>
            ))}
        </section>
    </>)
}

export default BusinessModel;