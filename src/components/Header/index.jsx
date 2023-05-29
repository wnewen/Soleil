import { NavLink } from "react-router-dom";
import styles from "./header.module.css"
import CartSummary from "../CartSummary";
import { useState } from "react";
import HamburgerMenu from "../HamburgerMenu";
import Navigation from "../Navigation";
import SetColotMode from "../SetColorMode";
import { theme } from "antd";
import { useSelector } from "react-redux";
import { selectLightMode } from "../../redux/colorSlice";
import UserInfo from "../UserInfo";

function Header() {
    const [isOnTouch, setIsOnTouch] = useState(false);
    const { token: { colorTextBase }} = theme.useToken();
    const lightMode = useSelector(selectLightMode);
    return (
        <div className={styles.header_box}>
            <HamburgerMenu
                onClick={() => setIsOnTouch(!isOnTouch)}
                isOnTouch={isOnTouch}
            />
            <NavLink to="/"><img className={styles.icon_soleiel} src="/images/icon_soleil.svg" /></NavLink>
            <Navigation open={isOnTouch} onClose={() => setIsOnTouch(false)} />

            
                {lightMode
                    ?(
                        <div className={styles.header_right_box}>
                            <SetColotMode  color="#C8D7EB" />
                            <CartSummary 
                                color="#C8D7EB"
                                className={styles.icon} />
                            <UserInfo color="#C8D7EB"/>
                        </div>
                    ) : (
                        <div className={styles.header_right_box}>
                            <SetColotMode color="#C8D7EB"/>
                            <CartSummary 
                                className={styles.icon_darkMode} 
                                color="#C8D7EB"/>
                            <UserInfo color="#C8D7EB"/>
                        </div>
                    )
                }
                
            

        </div>
    );
}

export default Header;