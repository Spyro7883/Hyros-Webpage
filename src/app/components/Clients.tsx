import styles from "../styles/clients.module.scss";
import ClientsIcon from "../components/ClientsIcon";

export default function Clients() {
    return (<>

        <section className={`${styles.clients}`} aria-label="Clients List">
            <h5 className={`d-flex text-center`}>USED BY:</h5>
            <ClientsIcon
                logos={`${styles.clients_logo} d-flex text-center`}
                gridContainer={styles.logos_container}
            />
        </section>
    </>)
}