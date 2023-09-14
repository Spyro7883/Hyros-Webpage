import styles from "../styles/counter.module.scss";
import Image from "next/image";

type CounterProps = {
    boxTitle: any[]
}

const Counter: React.FC<CounterProps> = ({ boxTitle }) => {
    return (<>
        <section
            className={`center-Oy d-flex clmn-dir`}
            aria-label="Ad Spend Counter"
        >
            <h3>
                <p className={styles.features}>
                    HYROS is{" "}
                    <span className={styles.highlight}>the HIGHEST level</span> of AD
                    Tracking & AI Optimization for digital businesses
                </p>
                <p className={styles.features_subtitle}>
                    Click To See Features That Apply To YOUR Business Model
                </p>
            </h3>
            {boxTitle.map((box_option) => (
                <a className={styles.menu_box} key={box_option}>
                    <div className="text-center">
                        <p className={styles.box_title}>{box_option}</p>
                        <div className={styles.circle} />
                    </div>
                    <p className={styles.box_text}>
                        The most important tools and features for Info
                    </p>
                    <div className={`${styles.circle_arrow} text-center`}>
                        <Image
                            src="/Logo_Arrow.png"
                            alt="Arrow Icon"
                            className={styles.arrow_icon}
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

export default Counter;