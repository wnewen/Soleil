import styles from "./navigation.module.css"
import { NavLink } from "react-router-dom";

function Navigation() {
    return (
        <div className={styles.nav_Box}>
            <NavLink to="/news"
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
        </div>
    );
}

export default Navigation