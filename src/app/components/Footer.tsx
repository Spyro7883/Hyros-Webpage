import styles from "../styles/footer.module.scss";
import Image from "next/image";

export default function Footer() {
    return (<>
        <footer className={styles.essentials}>
            <div className={styles.footer_container}>
                <Image
                    src="/Logo_Hyros.svg"
                    alt="Hyros Logo"
                    width={43}
                    height={43}
                    priority
                />
                <p className={`${styles.footer_title}`}>
                    Legendary Tracking And AI Optimization For Ads
                </p>
                <div className={`${styles.footer_container_row} d-flex`}>
                    <p className={styles.container_row_title}>Product</p>
                    <Image
                        src="/Footer_Arrow.svg"
                        alt="Arrow"
                        width={8}
                        height={6}
                        priority
                    />
                </div>
                <div className={`${styles.footer_container_row} d-flex`}>
                    <p className={styles.container_row_title}>Legal</p>
                    <Image
                        src="/Footer_Arrow.svg"
                        alt="Arrow"
                        width={8}
                        height={6}
                        priority
                    />
                </div>
                <div className={`${styles.footer_container_row} d-flex`}>
                    <p className={styles.container_row_title}>About us</p>
                    <Image
                        src="/Footer_Arrow.svg"
                        alt="Arrow"
                        width={8}
                        height={6}
                        priority
                    />
                </div>
                <div className={`${styles.footer_container_row} d-flex`}>
                    <p className={styles.container_row_title}>Support</p>
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