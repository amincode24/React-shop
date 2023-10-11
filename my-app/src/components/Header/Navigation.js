import React, { useState, useEffect } from "react";
import Button from "../UI/Button";
import { FaBars, FaShoppingCart, FaSun, FaMoon } from "react-icons/fa";
import "../../index.css";
import classes from "./Navigation.module.css";

const Navigation = (props) => {
  const [theme, setTheme] = useState("light");
  const [unit, setUnit] = useState(FaMoon);
  const darkmodeToggleHnalder = () => {
    if (theme === "dark") {
      setTheme("light");
      setUnit(FaMoon);
    } else {
      setTheme("dark");
      setUnit(FaSun);
    }
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
  return (
    <div className={classes.nav}>
      <div className={classes.menu}>
        <Button className={classes.button}>
          <FaBars />
        </Button>
        <Button className={classes.button} onClick={props.onOpen}>
          <FaShoppingCart />
        </Button>
        <Button className={classes.button} onClick={darkmodeToggleHnalder}>
          {unit}
        </Button>
      </div>
    </div>
  );
};

export default Navigation;
