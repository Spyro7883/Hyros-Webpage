import styles from "../styles/clients.module.scss";
import ClientsIcon from "../components/ClientsIcon";

export default function Clients() {
    return (<>

        <section className={styles.container} aria-label="Clients List">
            <h5 className={styles.title}>USED BY:</h5>
            <ClientsIcon
                logos={styles.logo}
                gridContainer={styles.content}
            />
        </section>
    </>)
}