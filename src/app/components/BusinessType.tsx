import styles from "../styles/business.module.scss";
import Image from "next/image";

type BusinessTypeProps = {
  businessList: any[];
}

const BusinessType: React.FC<BusinessTypeProps> = ({ businessList }) => {
  return (
    <>
      <section
        className={styles.business_list}
        aria-label="Select your business type"
      >
        <div className="d-flex center-Oy">
          <Image
            src="/Logo_Business.png"
            alt="Business Logo"
            width={48}
            height={48}
            priority
          />
          <p className={`${styles.business_type}`}>Select your business type</p>
        </div>
        {businessList.map((business_option) => (
          <a
            href={`/#`}
            className={styles.option_type}
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
    </>
  );
}

export default BusinessType
