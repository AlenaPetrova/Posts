import { ButtonHTMLAttributes } from "react";
import styles from "./Button.module.css";

const Button: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  ...props
}) => {
  return <button className={styles.button} {...props}></button>;
};

export default Button;
