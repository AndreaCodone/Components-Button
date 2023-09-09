import React from "react";
import styles from "./Card.module.scss";
import Button from "../Button/Button";

function Card() {
  return (
    <div className={styles.card}>
      <div className={styles.card2e1}>
        <div className={styles.sizes}>
          <h2>SIZES</h2>
        </div>
        <div className={styles.sizesButtons}>
          <Button className={styles.small} />
          <Button className={styles.normal} />
          <Button className={styles.medium} />
          <Button className={styles.large} />
        </div>
      </div>
      <div className={styles.card2e2}>
        <div className={styles.borders}>
          <h2>BORDERS</h2>
        </div>
        <div className={styles.bordersButtons}>
          <Button className={styles.normal} />
          <Button className={styles.squared} />
          <Button className={styles.rounded} />
        </div>
      </div>
      <div className={styles.card2e3}>
        <div className={styles.state}>
          <h2>STATE</h2>
        </div>
        <div className={styles.stateButtons}>
          <Button className={styles.button} />
          <Button className={styles.button} />
        </div>
      </div>
      <div className={styles.card2e4}>
        <div className={styles.colorStates}>
          <h2>COLOR STATES</h2>
        </div>
        <div className={styles.colorStatesButtons}>
          <Button className={styles.button} />
          <Button className={styles.button} />
          <Button className={styles.button} />
          <Button className={styles.button} />
          <Button className={styles.button} />
          <Button className={styles.button} />
          <Button className={styles.button} />
        </div>
      </div>
      <div className={styles.card2e5}>
        <div className={styles.icons}>
          <h2>ICONS</h2>
        </div>
        <div className={styles.iconsButtons}>
          <Button className={styles.button} />
          <Button className={styles.button} />
          <Button className={styles.button} />
        </div>
      </div>
    </div>
  );
}

export default Card;
