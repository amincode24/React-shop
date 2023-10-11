import React, { useContext } from "react";
import classes from "./TabMenuItem.module.css";
import TabMenuForm from "./TabMenuForm";
import CartContext from "../Context/cart-context";
const TabMenuItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;
  const cartCtx = useContext(CartContext);
  const addToCartHandler = amount => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      price: props.price,
      amount: amount,
      image: props.img
    });
  };
  return (
    <li className={classes.item}>
      <img src={props.img} alt="Coffee" />
      <div className={classes.text}>
        <p className={classes.name}>{props.name}</p>
        <p className={classes.price}>{price}</p>
      </div>
      <div className={classes.actions}>
        <TabMenuForm id={props.id} onAdd={addToCartHandler} />
      </div>
    </li>
  );
};

export default TabMenuItem;
