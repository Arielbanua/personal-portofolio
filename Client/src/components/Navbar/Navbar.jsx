import React, {useState} from "react";

import styles from "./Navbar.module.css";
import menuIcon from "../../assets/nav/menuIcon.png";
import closeIcon from "../../assets/nav/closeIcon.png";

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className={styles.navbar}> 
            <a className={styles.title} href="/">portofolio</a>
            <div className={styles.menu}>
                <img 
                    className={styles.menuBtn} 
                    src={menuOpen ? closeIcon : menuIcon} 
                    alt="menu-button"
                    onClick={() => setMenuOpen(!menuOpen)}
                />
                <ul className={`${styles.menuItems} ${menuOpen ? styles.menuOpen : ""}`}>
                    <li>
                        <a href="/">about</a>
                    </li>
                    <li>
                        <a href="/">experience</a>
                    </li>
                    <li>
                        <a href="/">project</a>
                    </li>
                    <li>
                        <a href="/">contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
};