//import styles from './descriptionBt.module.css'
import React from 'react';
import {BsPlus, BsDash } from 'react-icons/bs'

function DescriptionBt () {
    const description = document.getElementById("description");
    if (description.style.display === "none") {
        <BsPlus/>
      description.style.display = "block";
    } else {
        <BsDash/>
      description.style.display = "none";
    }
  }

  export default DescriptionBt;