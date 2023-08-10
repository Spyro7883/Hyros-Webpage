"use client";
import Header from "./components/Header";
import StarIcon from "./components/StarIcon";
import Image from "next/image";
import styles from "./styles/home.module.scss";
import { useState, useEffect } from "react";

const businessList = new Array();
businessList.push("Info / Education");
businessList.push("E-Commerce");
businessList.push("Call Funnels");
businessList.push("Local Agency / Lead Gen");
businessList.push("Organic / Social Media");

const adSpendCounter = new Array();
adSpendCounter.push("3,650,500,000");
adSpendCounter.push("3,650,500,174");
adSpendCounter.push("3,650,500,357");
adSpendCounter.push("3,650,502,785");

export default function Home() {
  const [adValue, setAdValue] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAdValue((prevValue) => (prevValue + 1) % adSpendCounter.length);
    }, 1000);
    return () => clearTimeout(timer);
  }, [adValue]);

  return (
    <>
      <Header />
      <main className={`${styles.page_layout} d-flex clmn-dir`}>
        <section className="d-flex clmn-dir" aria-label="Title section">
          <h1 className={`${styles.title_ads}`}>Track Ads.</h1>
          <h2 className={`${styles.subtitle_ai}`}>Feed AI.</h2>
          <h3 className={`${styles.ad_roi}`}>
            HYROS AI Print Tracking is proven to increase AD ROI in over 3,000
            businesses
          </h3>
        </section>
        <section
          className={`${styles.business_list} d-flex clmn-dir`}
          aria-label="Select your business type"
        >
          <div className="d-flex center-Oy" style={{ minWidth: "250px" }}>
            <Image
              src="/Logo_Business.png"
              alt="Business Logo"
              width={48}
              height={48}
              priority
            />
            <p className={`${styles.business_type}`}>
              Select your business type
            </p>
          </div>
          {businessList.map((business_option) => (
            <a
              href={`/${business_option}`}
              className={`${styles.option_type} d-flex center-Oy`}
              key={business_option}
            >
              <p className={styles.business_type}>{business_option}</p>
              <Image
                src="/Logo_Arrow.png"
                alt="Arrow Icon"
                className={styles.arrow_icon}
                width={16}
                height={16}
                priority
              />
            </a>
          ))}
          <button className={styles.get_demo}>Just Get Me A Demo</button>
        </section>
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
        </section>
        <section
          className={`center-Oy d-flex clmn-dir`}
          aria-label="Ad Spend Counter"
        >
          <h4 className={styles.ad_spend_title}>
            3,000+ Businesses Have Used HYROS To Track Over
          </h4>
          <figure className={`${styles.ad_container} d-flex text-center`}>
            <Image
              src="/Hyros_Price_Counter.png"
              alt="Price Counter Background"
              width={415}
              height={96}
              priority
            />

            <figcaption className={`${styles.ad_value} d-flex center-Oy`}>
              <Image
                src="/Hyros_Green_Polygon.png"
                alt="Green Polygon"
                className={styles.green_polygon}
                width={12}
                height={10}
                priority
              />
              {`$${adSpendCounter[adValue]}`}
            </figcaption>
          </figure>
          <p className={styles.ad_spend_subtitle}>In Ad Spend</p>
          <h5 className={styles.features}>
            HYROS is <span className={styles.highlight}>the HIGHEST level</span>{" "}
            of AD Tracking & AI Optimization for digital businesses
          </h5>
        </section>
      </main>
    </>
  );
}
