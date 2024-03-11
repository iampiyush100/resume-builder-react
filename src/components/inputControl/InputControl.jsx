import React from "react";
import styles from "./InputControl.module.css";

function InputControl({ label, error, ...props }) {
  console.log(error,";;;;;;");
  return (
    <div className={styles.container}>
      {label && <label>{label}</label>}
      <input {...props} />
      {error && <label>{error}</label>}
    </div>
  );
}

export default InputControl;
