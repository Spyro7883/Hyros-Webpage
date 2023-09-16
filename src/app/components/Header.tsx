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
      <header className={styles.container}>
        <div className={styles.content}>
          <Image
            src="/Logo_Hyros.svg"
            alt="Hyros Logo"
            className={styles.logo}
            width={29}
            height={29}
            priority
          />
          {usersWidth >= 680 ? (
            <nav className={styles.navbar} role="navigation">
              <ul className={styles.menu}>
                <li className={styles.link}><a href="/#">Features</a></li>
                <li className={styles.link}><a href="/#">Pricing</a></li>
                <li className={styles.link}><a href="/#">Company</a></li>
                <li className={styles.link}><a href="/#">Documentation</a></li>
                <li className={styles.link}><a href="/#">FAQ</a></li>
                <li className={styles.link}><a href="/#">Support</a></li>
              </ul>
              {usersWidth >= 730 ?
                <ul className={styles.user}>
                  <li className={styles.link}><a href="/#">Log in</a></li>
                  <li className={styles.apply}><a href="/#">Apply</a></li>
                </ul> : <></>}
            </nav>
          ) : (
            <div className={styles.toggle} onClick={handlePopup}>
              <span className={styles.bar} />
              <span className={styles.bar} />
              <span className={styles.bar} />
            </div>
          )}
        </div>
        {popup ? <div className={styles.popup} /> : ""}
      </header>
    </>
  );
}
