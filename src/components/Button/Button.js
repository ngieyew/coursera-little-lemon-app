import React, { useContext } from "react";
import styles from "./Button.module.css";
import { ThemeContext } from "../../contexts/ThemeContext";

function Button({
  children,
  variant = "primary",
  className,
  style,
  borderRadius,
  padding,
  ...props
}) {
  const { isDarkMode = false } = useContext(ThemeContext) || {};
  const buttonClass = `${styles.button} ${styles[variant]} ${className || ""}`;

  const customStyle = {
    ...style,
    "--theme-color": isDarkMode ? "black" : "white",
    "--button-border-radius": borderRadius || "var(--border-radius)",
    "--button-padding": padding || "var(--spacing-unit)",
  };

  return (
    <button className={buttonClass} style={customStyle} {...props}>
      {children}
    </button>
  );
}

export default Button;
