
import styles from "./logo.module.css";

export function Logo({size}){
    return(
        <div className={styles[size]}>
            Fake Store™
        </div>
    )
}

