import styles from "../styles/footer.module.scss";
import Image from "next/image";

export default function Footer() {
    return (<>
        <footer className={styles.container}>
            <div>
                <Image
                    src="/Logo_Hyros.svg"
                    alt="Hyros Logo"
                    width={43}
                    height={43}
                    priority
                />
                <p className={styles.title}>
                    Legendary Tracking And AI Optimization For Ads
                </p>
                <div className={styles.row}>
                    <p className={styles["row-title"]}>Product</p>
                    <Image
                        src="/Footer_Arrow.svg"
                        alt="Arrow"
                        width={8}
                        height={6}
                        priority
                    />
                </div>
                <div className={styles.row}>
                    <p className={styles["row-title"]}>Legal</p>
                    <Image
                        src="/Footer_Arrow.svg"
                        alt="Arrow"
                        width={8}
                        height={6}
                        priority
                    />
                </div>
                <div className={styles.row}>
                    <p className={styles["row-title"]}>About us</p>
                    <Image
                        src="/Footer_Arrow.svg"
                        alt="Arrow"
                        width={8}
                        height={6}
                        priority
                    />
                </div>
                <div className={styles.row}>
                    <p className={styles["row-title"]}>Support</p>
                    <Image
                        src="/Footer_Arrow.svg"
                        alt="Arrow"
                        width={8}
                        height={6}
                        priority
                    />
                </div>
                <p className={styles.copyright}>
                    © 2022 Hyros INC. All rights reserved.
                </p>
            </div>
        </footer></>)
}