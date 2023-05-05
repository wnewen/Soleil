import { theme } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { selectLightMode, setColorMode } from "../../redux/colorSlice";
import styles from './setColorMode.module.css';
import React from 'react';
import {BsMoonStars, BsSun } from 'react-icons/bs'

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
                ) : (
                    <BsMoonStars className={styles.icon}/>
                )
            }
        </div>
    );
}

export default SetColotMode;