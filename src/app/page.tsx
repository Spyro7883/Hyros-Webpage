import Header from "./components/Header";
import Image from "next/image";
import styles from "./styles/home.module.scss";

const businessList = new Array();
businessList.push("Info / Education");
businessList.push("E-Commerce");
businessList.push("Call Funnels");
businessList.push("Local Agency / Lead Gen");
businessList.push("Organic / Social Media");

export default function Home() {
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
            <>
              <a
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
            </>
          ))}
        </section>
      </main>
    </>
  );
}
