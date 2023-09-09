import styles from "../styles/header.module.scss";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [popup, setPopup] = useState(false);
  const handlePopup = () => {
    setPopup(!popup);
    console.log(popup);
  };
  return (
    <>
      <header className={`${styles.header_page} d-flex center-Oy`}>
        <Image
          src="/Logo_Hyros.png"
          alt="Hyros Logo"
          className={styles.logo}
          width={50}
          height={50}
          priority
        />
        <div className={styles.trigger} onClick={handlePopup}>
          <span className={`${styles.toggle_menu} d-flex`} />
          <span className={`${styles.toggle_menu} d-flex`} />
          <span className={`${styles.toggle_menu} d-flex`} />
        </div>
        {popup ? <div className={styles.popup} /> : ""}
      </header>
    </>
  );
}
