import React from "react";
import styles from "./InputControl.module.css";

function InputControl({ label, ...props }) {
  return (
    <div className={styles.container}>
      {label && <label>{label}</label>}
      <input {...props} />
    </div>
  );
}

export default InputControl;
