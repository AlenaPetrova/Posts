import { InputHTMLAttributes } from "react";
import styles from "./Input.module.css";

const Input: React.FC<InputHTMLAttributes<HTMLInputElement>> = ({
  ...props
}) => {
  return (
    <div className={styles.container}>
      <input className={styles.input} {...props} />
      <div className={styles.svg} />
    </div>
  );
};

export default Input;
