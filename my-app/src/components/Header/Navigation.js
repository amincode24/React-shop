import React, { useState, useEffect, useContext } from "react";
import Button from "../UI/Button";
import { FaBars, FaShoppingCart, FaSun, FaMoon } from "react-icons/fa";
import "../../index.css";
import classes from "./Navigation.module.css";
import CartContext from "../Context/cart-context";
const Navigation = (props) => {
  const [theme, setTheme] = useState("light");
  const cartCtx = useContext(CartContext);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
  return (
    <nav className={classes.nav}>
      <Button className={classes.button} onClick={props.onOpen}>
        <FaShoppingCart />
        <span className={classes.badge}>{cartCtx.quantity}</span>
      </Button>
    </nav>
  );
};

export default Navigation;
