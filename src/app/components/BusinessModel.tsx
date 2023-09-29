import styles from "../styles/business_model.module.scss";
import Image from "next/image";
import useWindowWidth from "../hooks/useWindow";
import type { ModelProp } from "../utils";

type BusinessModelProps = {
    modelProp: ModelProp[];
    firstBusinessModel: boolean;
}

const BusinessModel: React.FC<BusinessModelProps> = ({ modelProp, firstBusinessModel }) => {
    const usersWidth = useWindowWidth() || 0;
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
            <div className={styles.container}>
                {modelProp.map((model) => (
                    <a className={styles.box} key={model.post_title}>
                        <div className={styles.wrapper}>
                            <p className={styles.category}>{model.post_title}</p>
                            {usersWidth >= 287 ?
                                <div className={styles.circle} /> : ""}
                        </div>
                        <p className={styles.message}>
                            The most important tools and features for {model.post_message}
                        </p>
                        {usersWidth >= 287 ?
                            <div className={styles.arrow}>
                                <Image
                                    src="/Logo_Arrow.png"
                                    alt="Arrow Icon"
                                    width={16}
                                    height={14.5}
                                    priority
                                />
                            </div> : ""}
                    </a>
                ))}
            </div>
        </section>
    </>)
}

export default BusinessModel;