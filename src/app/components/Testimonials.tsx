import styles from "../styles/testimonials.module.scss";
import Image from "next/image";

export default function Testimonials() {
    return (
        <>
            <section
                className={styles.container}
                aria-label="Testimonials"
            >
                <h4 className={styles.title}>
                    Testimonials from brands you may know
                </h4>
                <div className={styles.block}>
                    <Image
                        src="/Hyros_Quotes.svg"
                        alt="Quotes"
                        width={26}
                        height={24}
                        priority
                    />
                    <p className={styles.testimonials_message}>
                        In just 6 months allowed us to scale our ad spend by 43% for
                        Business Mastery and over 100% for Unleash The Power Within.{" "}
                        <span className={styles.highlight}>
                            And I can't say how impressed.
                        </span>{" "}
                        I am with HYROS's world class team.
                    </p>
                    <div className={styles.author_block}>
                        <Image
                            src="/robbins.png"
                            alt="Tony Robbins"
                            width={57}
                            height={57}
                            priority
                        />
                        <div className={styles.testimonials_text_wrapper}>
                            <p className={styles.author_review_title}>
                                TONY ROBBINS Ad Team
                            </p>
                            <p className={styles.author_review_subtitle}>
                                The nation's top life and business strategist.
                            </p>
                        </div>
                    </div>
                </div>
                <div className={styles.block}>
                    <Image
                        src="/Hyros_Quotes.svg"
                        alt="Quotes"
                        width={26}
                        height={24}
                        priority
                    />
                    <p className={styles.testimonials_message}>
                        <span className={styles.highlight}>
                            Has made such a huge difference in the GC camp.
                        </span>{" "}
                        Has Helped us really see what’s really going on.
                    </p>
                    <div className={styles.author_block}>
                        <Image
                            src="/cardone.png"
                            alt="Grant Cardone"
                            width={57}
                            height={57}
                            priority
                        />
                        <div className={styles.testimonials_text_wrapper}>
                            <p className={styles.author_review_title}>
                                GRANT CARDONE Ad Team
                            </p>
                            <p className={styles.author_review_subtitle}>
                                #1 sales and marketing trainer in the world
                            </p>
                        </div>
                    </div>
                </div>
                <div className={styles.block}>
                    <Image
                        src="/Hyros_Quotes.svg"
                        alt="Quotes"
                        width={26}
                        height={24}
                        priority
                    />
                    <p className={styles.testimonials_message}>
                        Everybody who uses it in my mastermind swears by it. The ROI
                        increase from increased tracking accurancy outweights the cost.
                        It's a simple math decision.
                    </p>
                    <div className={styles.author_block}>
                        <Image
                            src="/sam.png"
                            alt="Sam Ovens"
                            width={57}
                            height={57}
                            priority
                        />
                        <div className={styles.testimonials_text_wrapper}>
                            <p className={styles.author_review_title}>SAM OVENS</p>
                            <p className={styles.author_review_subtitle}>
                                Founder Consulting.com
                            </p>
                        </div>
                    </div>
                </div>
                <div className={styles.block}>
                    <Image
                        src="/Hyros_Quotes.svg"
                        alt="Quotes"
                        width={26}
                        height={24}
                        priority
                    />
                    <p className={styles.testimonials_message}>
                        With HYROS, I can see exactly where my sales are coming from and
                        we are already 300% more profitable within 72 hours of using the
                        software.
                    </p>
                    <div className={styles.author_block}>
                        <Image
                            src="/dan.png"
                            alt="Dan Henry"
                            width={57}
                            height={57}
                            priority
                        />
                        <div className={styles.testimonials_text_wrapper}>
                            <p className={styles.author_review_title}>DAN HENRY</p>
                            <p className={styles.author_review_subtitle}>
                                Founder of GetClients.com and Closedeals.com
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>)
}