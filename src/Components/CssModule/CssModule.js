import React from "react";
import styles from "../CssModule/CssModule.module.css";
export default function CssModule() {
  return (
    <>
      <p className={styles.BlueParagraph}>
        The weather is sunny with a small chance of rain today.
      </p>
      <p className={styles.GreenParagraph}>
        When you go to work, don't forget to bring your umbrella with you!
      </p>
    </>
  );
} 