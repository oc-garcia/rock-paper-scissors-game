import React from "react";
import logoClassic from "./logo.svg";
import styles from "./ScoreBoard.module.css";

type Props = {
  score: number;
};

export default function ScoreBoard({score}: Props) {
  return (
    <header className={styles.headerContainer}>
      <img src={logoClassic} alt="logo" className={styles.logo} />
      <div className={styles.scoreContainer}>
        <h1>Score</h1>
        <p>{score}</p>
      </div>
    </header>
  );
}
