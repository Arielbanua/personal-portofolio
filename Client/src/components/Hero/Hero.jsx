import React from "react";
import styles from "./Hero.module.css"

import profilePic from "../../assets/hero/krillin.png";


export const Hero = () =>{
    return <section className={styles.hero}>
        <div className={styles.details}>
            <h1 className={styles.header}>Hi I'm Ariel</h1>
            <p className={styles.subheader}>
                I'm a computer science fresh graduate
                from Asia Pacific University with experience
                in software development and machine learning.
            </p>
            <a className={styles.contactBtn} href="mailto:arielbanua76@gmail.com">Contact Me</a>
        </div> 
        <div className={styles.imageSection}>
            <img className={styles.image} src={profilePic}></img>
        </div>   
    </section>
}