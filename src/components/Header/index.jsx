import { NavLink } from "react-router-dom";
import styles from "./header.module.css"
import CartSummary from "../CartSummary";
import { useState } from "react";
import HamburgerMenu from "../HamburgerMenu";
import Navigation from "../Navigation";

function Header() {
    const [isOnTouch, setIsOnTouch] = useState(false);
    return (
        <div className={styles.header_box}>
            <HamburgerMenu
                onClick={() => setIsOnTouch(!isOnTouch)}
                isOnTouch={isOnTouch}
            />
            <NavLink to="/"><img className={styles.icon_soleiel} src="/images/icon_soleil.svg" /></NavLink>
            <Navigation open={isOnTouch} onClose={() => setIsOnTouch(false)} />

            <div className={styles.header_right_box}>
                <CartSummary 
                    className={styles.icon} 
                    size={60} color="#AAA6A4"/>
                <NavLink to="/"><img className={styles.icon} src="/images/icon_login.svg" /></NavLink>
            </div>

        </div>
    );
}

export default Header;