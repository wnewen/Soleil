import { theme } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { selectLightMode, setColorMode } from "../../redux/colorSlice";
import styles from './setColorMode.module.css';
import React from 'react';
import {BsMoonStars, BsSun } from 'react-icons/bs'
import { SunIcon, MoonIcon } from "../Icons";

function SetColotMode() {
    const { token: { colorTextBase }} = theme.useToken();
    const lightMode = useSelector(selectLightMode);
    const dispatch = useDispatch();

    const toggleColor = () => {
        dispatch(setColorMode(!lightMode))
    }
    return (
        <div onClick={toggleColor}>
            {
                lightMode ? (
                    <BsSun className={styles.icon}/>
                    // <SunIcon className={styles.icon} color={colorTextBase}/>

                ) : (
                    <BsMoonStars className={`${styles.icon} ${styles.icon_darkMode}`}/>
                    // <MoonIcon className={styles.icon_darkmode} color={colorTextBase}/>

                )
            }
        </div>
    );
}

export default SetColotMode;