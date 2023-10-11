import React from "react";
import classes from "./Button.module.css";
const Button = (props) => {
  return (
    <button onClick={props.onClick} className={`${classes.button} ${props.className}`} disabled={props.disabled}>
      {props.children}
    </button>
  );
};

export default Button;
