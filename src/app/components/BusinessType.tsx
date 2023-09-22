import styles from "../styles/business_type.module.scss";
import Image from "next/image";
import useWindowWidth from "../hooks/useWindow";

type BusinessTypeProps = {
  businessList: string[];
}

const BusinessType: React.FC<BusinessTypeProps> = ({ businessList }) => {
  const usersWidth = useWindowWidth() || 0;
  return (
    <>
      <section
        className={styles.container}
        aria-label="Select your business type"
      >
        <div className={styles.select}>
          {usersWidth >= 284 ?
            <Image
              src="/Logo_Business.png"
              alt="Business Logo"
              width={48}
              height={48}
              priority
            />
            : ""}
          <p className={`${styles.message}`}>Select your business type</p>
        </div>
        {businessList.map((business_option) => (
          <a
            href={`/#`}
            className={styles.option}
            key={business_option}
          >
            <p className={styles.message}>{business_option}</p>
            {usersWidth >= 284 ?
              <Image
                src="/Logo_Arrow.png"
                alt="Arrow Icon"
                className={styles.icon}
                width={16}
                height={16}
                priority
              /> : ""}
          </a>
        ))}
        <button className={styles.demo}>Just Get Me A Demo</button>
      </section>
    </>
  );
}

export default BusinessType
