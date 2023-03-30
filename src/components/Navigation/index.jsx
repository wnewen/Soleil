import styles from "./navigation.module.css"
import { NavLink } from "react-router-dom";

function Navigation() {
    return (
        <div>
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
    );
}

export default Navigation