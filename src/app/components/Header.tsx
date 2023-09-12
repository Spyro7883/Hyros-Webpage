import styles from "../styles/header.module.scss";
import Image from "next/image";
import { useState } from "react";
import useWindowWidth from "../hooks/useWindow";

export default function Header() {
  const [popup, setPopup] = useState(false);
  const usersWidth = useWindowWidth();

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
          width={29}
          height={29}
          priority
        />
        {usersWidth >= 680 ? (
          <nav className={`${styles.nav_bar} d-flex`}>
            <ul className="d-flex">
              <li className={styles.nav_link}><a>Features</a></li>
              <li className={styles.nav_link}><a>Pricing</a></li>
              <li className={styles.nav_link}><a>Company</a></li>
              <li className={styles.nav_link}><a>Documentation</a></li>
              <li className={styles.nav_link}><a>FAQ</a></li>
              <li className={styles.nav_link}><a>Support</a></li>
            </ul>
            {usersWidth >= 714 ?
              <ul className="d-flex">
                <li className={styles.nav_link}><a>Log in</a></li>
                <li className={styles.nav_link}><a className={styles.action}>Apply</a></li>
              </ul> : <></>}
          </nav>
        ) : (
          <div className={styles.trigger} onClick={handlePopup}>
            <span className={`${styles.toggle_menu} d-flex`} />
            <span className={`${styles.toggle_menu} d-flex`} />
            <span className={`${styles.toggle_menu} d-flex`} />
          </div>
        )}
        {popup ? <div className={styles.popup} /> : ""}
      </header>
    </>
  );
}
