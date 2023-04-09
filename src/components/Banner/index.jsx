import styles from "./banner.module.css"
import { NavLink } from "react-router-dom";
import CartSummary from "../CartSummary";
import { useState } from "react";

function Banner() {
    const [isOnTouch, setIsOnTouch] = useState(false);

    return (
        <div>
            <img className={styles.banner_img} src="../images/banner.svg" />

            <div className={styles.header_position}>
                <span className={styles.header}>
                    <NavLink to="./"><img className={styles.icon} src="./images/icon_soleil.png" /></NavLink>
                    <span className={styles.icon_right}>
                        {/* <NavLink to="./"><img className={styles.icon} src="./images/icon_bag.svg" /></NavLink> */}
                        <NavLink to="./"><CartSummary size={70} color="#412613"/></NavLink>
                        <NavLink to="./"><img className={styles.icon} src="./images/icon_login.svg" /></NavLink>
                    </span>
                </span>
            </div>
            
            <div className={styles.banner_title}>
                <h2 >Le soleil</h2>
                <h2 className={styles.banner_title_tab1}>Et</h2>
                <h2 className={styles.banner_title_tab2}>La lune</h2>
                <h6 className={styles.banner_text_tab2}>The beauty of details</h6>
            </div>
            
            <div className={styles.nav_position}>
            <NavLink to="/category/news" 
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

        </div>
    );
}

export default Banner;