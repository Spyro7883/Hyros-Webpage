import styles from "../styles/header.module.scss";
import Image from "next/image";

export default function Header() {
  return (
    <>
      <header className={`${styles.header_page} d-flex center-Oy`}>
        <Image
          src="/Logo_Hyros.png"
          alt="Hyros Logo"
          width={50}
          height={50}
          priority
        />
        <div>
          <span className={`${styles.toggle_menu} d-flex`} />
          <span className={`${styles.toggle_menu} d-flex`} />
          <span className={`${styles.toggle_menu} d-flex`} />
        </div>
      </header>
    </>
  );
}
