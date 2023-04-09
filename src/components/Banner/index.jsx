import styles from "./banner.module.css"
import { NavLink } from "react-router-dom";
<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
=======
import CartSummary from "../CartSummary";
>>>>>>> 2178691f40041e8184cc25f049ed0134f16917d2

function Banner() {
    const [scrollPos, setScrollPos] = useState(0);

    useEffect(() => {
      const handleScroll = () => {
        setScrollPos(window.scrollY);
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    return (
            
        <div className={styles.container}>
            
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
            <div >  
            <div className={styles.banner_title}>
                <div className={styles.row}>
                    <h2 style={{ transform: `translate(-20%, -${scrollPos / 1}px)` }}className={styles.t1}>Le </h2>
                    <h3 style={{ transform: `translate(-20%, -${scrollPos / 1}px)` }}className={styles.t2}>soleil </h3>
                </div>
               
                <h2 style={{ transform: `translate(-20%, -${scrollPos / 1}px)` }}className={styles.t3}>Et</h2>
                <h2 style={{ transform: `translate(-20%, -${scrollPos / 1}px)` }}className={styles.t4}>La lune</h2>
                <h6 style={{ transform: `translate(-20%, -${scrollPos / 1}px)` }}className={styles.t5}>The beauty of details</h6>
            </div>
            
            <div className={styles.nav_position}>
            <NavLink to="/category/news" 
                style={{ transform: `translate(-20%, -${scrollPos / 1}px)` }}
                className={({ isActive }) => (isActive ? styles.navItemActive : styles.navItem)}>
                news
            </NavLink >
            <NavLink to="/products/category/manicure"
                style={{ transform: `translate(-20%, -${scrollPos / 1}px)` }}
                className={({ isActive }) => (isActive ? styles.navItemActive : styles.navItem)}>
                manicure
            </NavLink>
            <NavLink to="/products/category/handCream"
                style={{ transform: `translate(-20%, -${scrollPos / 1}px)` }}
                className={({ isActive }) => (isActive ? styles.navItemActive : styles.navItem)}>
                hand cream
            </NavLink>
            <NavLink to="/products/category/accessories"
            style={{ transform: `translate(-20%, -${scrollPos / 1}px)` }}
                className={({ isActive }) => (isActive ? styles.navItemActive : styles.navItem)}>
                accessories
            </NavLink>
            <NavLink to="/products/category/tools"
            style={{ transform: `translate(-20%, -${scrollPos / 1}px)` }}
                className={({ isActive }) => (isActive ? styles.navItemActive : styles.navItem)}>
                tools
            </NavLink>
        </div>
        </div>
           

        </div>
    );
}

export default Banner;