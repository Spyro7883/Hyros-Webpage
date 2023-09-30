import styles from "../styles/footer.module.scss";
import Image from "next/image";

export default function Footer() {
    return (<>
        <footer className={styles.container}>
            <div className={styles.layout}>
                <div className={styles["title-container"]}>
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
                </div>
                <div className={styles.wrapper}>
                    <p className={styles["row-title"]}>Product</p>
                    <Image
                        src="/Footer_Arrow.svg"
                        alt="Arrow"
                        className={styles.arrow}
                        width={8}
                        height={6}
                        priority
                    />
                    <a className={styles.row}>Features</a>
                    <a className={styles.row}>Faq</a>
                    <a className={styles.row}>Affiliate</a>
                    <a className={styles.row}>Agency</a>
                    <a className={styles.row}>Suggested Agencies</a>
                </div>
                <div className={styles.wrapper}>
                    <p className={styles["row-title"]}>Legal</p>
                    <Image
                        src="/Footer_Arrow.svg"
                        alt="Arrow"
                        className={styles.arrow}
                        width={8}
                        height={6}
                        priority
                    />
                    <a className={styles.row}>Terms of Service</a>
                    <a className={styles.row}>Privacy</a>
                    <a className={styles.row}>Cookies</a>
                </div>
                <div className={styles.wrapper}>
                    <p className={styles["row-title"]}>About us</p>
                    <Image
                        src="/Footer_Arrow.svg"
                        alt="Arrow"
                        className={styles.arrow}
                        width={8}
                        height={6}
                        priority
                    />
                    <a className={styles.row}>Company and Vision</a>
                    <a className={styles.row}>Pricing</a>
                    <a className={styles.row}>Career</a>
                </div>
                <div className={styles.wrapper}>
                    <p className={styles["row-title"]}>Support</p>
                    <Image
                        src="/Footer_Arrow.svg"
                        alt="Arrow"
                        className={styles.arrow}
                        width={8}
                        height={6}
                        priority
                    />
                    <a className={styles.row}>Documentation</a>
                    <a className={styles.row}>Facebook Group</a>
                    <a className={styles.row}>Contact US</a>
                    <a className={styles.row}>API</a>
                </div>

            </div>
            <div className={styles["copyright-container"]}>
                <p className={styles.copyright}>
                    © 2022 Hyros INC. All rights reserved.
                </p>
            </div>


        </footer></>)
}