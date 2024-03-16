import PropTypes from 'prop-types';
import styles from "./InputControl.module.css";

function InputControl({ label, error, ...props }) {
  return (
    <div className={styles.container}>
      {label && <label>{label}</label>}
      {error && <label style={{ color: 'red', fontSize: '10px'}}><div>{error}</div></label>}
      <input {...props} />
    </div>
  );
}

// Add PropTypes validation
InputControl.propTypes = {
  label: PropTypes.string, // Validate label prop as a string
  error: PropTypes.string, // Validate error prop as a string
};

export default InputControl;
