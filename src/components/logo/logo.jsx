import { Link } from "react-router";
import styles from "./logo.module.css";

function Logo({size}){
    return(
        <Link className={styles[size]} to={"/"}>
            Fake Store™
        </Link>
    )
}

export default Logo;