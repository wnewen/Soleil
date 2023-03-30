import styles from "./banner.module.css"
import { NavLink } from "react-router-dom";

function Banner() {
    return (
        <div>
            <img className={styles.banner_img} src="./images/banner.jpg" />
            <span className={styles.banner_title}>
                <h2 >le soleil</h2>
                <h2 >et la lune</h2>
            </span>

            {/* <div className={styles.nav_position}>
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
        </div> */}

        </div>
    );
}

export default Banner;