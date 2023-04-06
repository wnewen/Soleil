import { NavLink } from "react-router-dom";
import styles from "./header.module.css"

function Header() {
    return (
        <div className={styles.header_box}>

            <NavLink to="/"><img className={styles.icon} src="./images/icon_soleil.svg" /></NavLink>
            
            <div className={styles.nav_position}>
                <NavLink to="/category/:categoryName"
                    className={({ isActive }) => (isActive ? styles.navItemActive : styles.navItem)}>
                    news
                </NavLink >
                <NavLink to="/category/:categoryName"
                    className={({ isActive }) => (isActive ? styles.navItemActive : styles.navItem)}>
                    manicure
                </NavLink>
                <NavLink to="/category/:categoryName"
                    className={({ isActive }) => (isActive ? styles.navItemActive : styles.navItem)}>
                    handcream
                </NavLink>
                <NavLink to="/category/:categoryName"
                    className={({ isActive }) => (isActive ? styles.navItemActive : styles.navItem)}>
                    accessories
                </NavLink>
                <NavLink to="/category/:categoryName"
                    className={({ isActive }) => (isActive ? styles.navItemActive : styles.navItem)}>
                    tools
                </NavLink>
            </div>

            <div>
                <NavLink to="/"><img className={styles.icon} src="./images/icon_bag.svg" /></NavLink>
                <NavLink to="/"><img className={styles.icon} src="./images/icon_login.svg" /></NavLink>
            </div>

        </div>
    );
}

export default Header;