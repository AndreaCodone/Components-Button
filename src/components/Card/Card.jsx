import React from "react";
import styles from "./Card.module.scss";

function Card() {
  return (
    <div className={styles.card}>
      <div className={styles.card2e1}>
        <div className={styles.sizes}>
          <h2>SIZES</h2>
        </div>
        <div className={styles.sizesButtons}></div>
      </div>
      <div className={styles.card2e2}>
        <div className={styles.borders}>
          <h2>BORDERS</h2>
        </div>
        <div className={styles.bordersButtons}></div>
      </div>
      <div className={styles.card2e3}>
        <div className={styles.state}>
          <h2>STATE</h2>
        </div>
        <div className={styles.stateButtons}></div>
      </div>
      <div className={styles.card2e4}>
        <div className={styles.colorStates}>
          <h2>COLOR STATES</h2>
        </div>
        <div className={styles.colorStatesButtons}></div>
      </div>
      <div className={styles.card2e5}>
        <div className={styles.icons}>
          <h2>ICONS</h2>
        </div>
        <div className={styles.iconsButtons}></div>
      </div>
    </div>
  );
}

export default Card;
