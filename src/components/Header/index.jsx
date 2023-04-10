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
            <NavLink to="/"><img className={styles.icon} src="/images/icon_soleil.svg" /></NavLink>
            
            {/* <div className={styles.nav_Box}>
                <NavLink to="/products/category/news"
                    className={({ isActive }) => (isActive ? styles.navItemActive : styles.navItem)}>
                    news
                </NavLink >
                <NavLink to="/products/category/manicure"
                    className={({ isActive }) => (isActive ? styles.navItemActive : styles.navItem)}>
                    manicure
                </NavLink>
                <NavLink to="/products/category/handCream"
                    className={({ isActive }) => (isActive ? styles.navItemActive : styles.navItem)}>
                    hand cream
                </NavLink>
                <NavLink to="/products/category/accessories"
                    className={({ isActive }) => (isActive ? styles.navItemActive : styles.navItem)}>
                    accessories
                </NavLink>
                <NavLink to="/products/category/tools"
                    className={({ isActive }) => (isActive ? styles.navItemActive : styles.navItem)}>
                    tools
                </NavLink>
            </div> */}
            <Navigation open={isOnTouch} onClose={() => setIsOnTouch(false)} />

            <div className={styles.header_right_box}>
                {/* <NavLink to="/"><img className={styles.icon} src="/images/icon_bag.svg" /></NavLink> */}
                <NavLink to="/"><CartSummary className={styles.icon} size={60} color="#AAA6A4"/></NavLink>
                <NavLink to="/"><img className={styles.icon} src="/images/icon_login.svg" /></NavLink>
            </div>

        </div>
    );
}

export default Header;