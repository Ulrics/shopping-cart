import { Link } from "react-router";
import Logo from '../logo/logo.jsx';
import { NavCart } from "../cart/cart.jsx";
import styles from "./navbar.module.css";

export function NavBar( {cartAction, cart} ){
    return(
        <nav>
            <Logo size={"medium"} />
            <div className={styles.linkcontainer}>
                <NavLink label={"Home"} linkTo={"/"}/>
                <NavLink label={"Shop"} linkTo={"/shop"}/>
                <NavCart openCart={cartAction} cart={cart}/>
            </div>
        </nav>
    )
}

function NavLink({ label, linkTo }){
    return(
        <Link to={linkTo} className={styles.navlink}>{label}</Link>
    )
}