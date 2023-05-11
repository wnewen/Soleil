import styles from "./banner.module.css"
import { NavLink } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import CartSummary from "../CartSummary";
import SetColotMode from "../SetColorMode";
import { theme } from "antd";
import { useSelector } from "react-redux";
import { selectLightMode } from "../../redux/colorSlice";
//import UserInfo from "../UserInfo";
//import { BsPerson, BsHangbag} from 'react-icons/bs'

function Banner() {
    const lightMode = useSelector(selectLightMode);
    const {
        token: { colorBgBase, colorTextBase },
    } = theme.useToken();

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
            <div className={styles.banner_img}>
            <img  src={lightMode ? "/images/banner.jpeg" : "/images/banner_DarkMode.jpg"} />
            </div>
            
            <div className={styles.header_position}>
                <span className={styles.header}>
                    <NavLink to="./"><img className={styles.icon} src="/images/icon_soleil.png" /></NavLink>
                    <span className={styles.icon_right}>
                        <SetColotMode />
                        <CartSummary size={70} color="#412613" />
                        <NavLink to="./"><img className={styles.icon} src="/images/icon_login.svg" /></NavLink>
                    </span>
                </span>
            </div>
            <div className={styles.content}>
                <div className={styles.banner_title}>
                    <img className={styles.t1} style={{ transform: `translate(-20%, -${scrollPos / 1.5}px)` }} src={lightMode ? "/images/title1.svg" : "/images/title1_dark.svg"} />
                    <img className={styles.t2} style={{ transform: `translate(-20%, -${scrollPos / 1.5}px)` }} src={lightMode ? "/images/title2.svg" : "/images/title2_dark.svg"} />
                </div>

                <div className={styles.nav_position}>

                    <div className={styles.eachNav}>
                    <NavLink to="/news"
                        style={{ 
                            transform: `translate(-20%, -${scrollPos / 1.5}px)`, 
                            textDecoration: 'none',
                            color: colorTextBase
                        }}
                        className={({ isActive }) => (isActive ? styles.navItemActive : styles.navItem)}>
                       <p className={styles.ppp}>news</p>
                    </NavLink >
                    </div>
                    
                    <div className={styles.eachNav}>
                    <NavLink 
                        to="/products/category/manicure"
                        style={{ 
                            transform: `translate(-20%, -${scrollPos / 1.5}px)`,
                            textDecoration: 'none',
                            color: colorTextBase,
                        }}
                        className={({ isActive }) => (isActive ? styles.navItemActive : styles.navItem)}
                    >
                        <p className={styles.ppp}>manicure</p>
                    </NavLink>
                    </div>
                    
                    <div className={styles.eachNav}>
                    <NavLink 
                        to="/products/category/handCream"
                        style={{ 
                            transform: `translate(-20%, -${scrollPos / 1.5}px)`,
                            textDecoration: 'none',
                            color: colorTextBase,
                        }}
                        className={({ isActive }) => (isActive ? styles.navItemActive : styles.navItem)}
                    >
                       <p className={styles.ppp}> hand cream</p>
                    </NavLink>
                    </div>
                    
                    <div className={styles.eachNav}>
                    <NavLink 
                        to="/products/category/accessories"
                        style={{ 
                            transform: `translate(-20%, -${scrollPos / 1.5}px)`,
                            textDecoration: 'none',
                            color: colorTextBase,
                        }}
                        className={({ isActive }) => (isActive ? styles.navItemActive : styles.navItem)}
                    >
                        <p className={styles.ppp}> accessories</p>
                    </NavLink>
                    </div>
                    
                    <div className={styles.eachNav}>
                    <NavLink 
                        to="/products/category/tools"
                        style={{ 
                            transform: `translate(-20%, -${scrollPos / 1.5}px)`,
                            textDecoration: 'none',
                            color: colorTextBase,
                        }}
                        className={({ isActive }) => (isActive ? styles.navItemActive : styles.navItem)}
                    >
                        <p className={styles.ppp}>tools</p>
                    </NavLink>
                    </div>
                    
                </div>
            </div>


        </div>
    );
}

export default Banner;