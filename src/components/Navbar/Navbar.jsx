import React from "react";
import { Link } from "react-router-dom";

import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <div className={styles.container}>
      <h1 className={styles.logo}>
        <Link to="/">Breaking Bad</Link>
      </h1>

      <ul className={styles.right}>
        <li className={styles.link}>Home</li>
        <li className={styles.link}>About</li>
        <li className={styles.link}>Contact</li>
      </ul>
    </div>
  );
}
