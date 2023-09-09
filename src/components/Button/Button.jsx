import React, { useState } from "react";
import styles from "./Button.module.scss";

function Button() {
  const [count, setCount] = useState(0);

  return (
    <button
      className={styles.btn}
      onClick={() => setCount((count) => count + 1)}
    >
      count is {count}
    </button>
  );
}

export default Button;
