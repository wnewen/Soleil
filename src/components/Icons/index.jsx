import React from "react";
import { BsHandbag, BsMoonStars, BsSun, BsPerson,  } from 'react-icons/bs'
import { IoPersonOutline } from "react-icons/io5";

import styles from "./icons.module.css"

export default function CartIcon( color ) {
    return (
       <BsHandbag className={styles.icon} />
    )
}

export function SunIcon( color ) {
    return (
       <BsSun className={styles.icon} style={{color: color}} />
    )
}

export function MoonIcon( color ) {
    return (
       <BsMoonStars className={styles.icon} style={{color: color}}/>
    )
}

export function UserIcon( color ) {
    return (
       <IoPersonOutline className={styles.icon} style={{color: color}}/>
    )
}

