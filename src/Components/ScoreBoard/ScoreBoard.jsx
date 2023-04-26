import React from "react";
import logoClassic from "./logo.svg";
import styles from "./ScoreBoard.module.css";
export default function ScoreBoard() {
  return (
    <header className={styles.headerContainer}>
      <img src={logoClassic} alt="logo" className={styles.logo} />
      <div className={styles.scoreContainer}>
        <h1>Score</h1>
        <p>12</p>
      </div>
    </header>
  );
}
