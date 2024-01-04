import React, { useContext } from "react";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartContext from "../Context/cart-context";
import CartItem from "./CartItem";
const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItem = cartCtx.items.length > 0;

  const addItemToCartHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const removeItemFromCartHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          id={item.id}
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          src={item.image}
          onAdd={addItemToCartHandler.bind(null, item)}
          onRemove={removeItemFromCartHandler.bind(null, item.id)}
        />
      ))}
    </ul>
  );
  return (
    <Modal>
      <div>
        {cartItems}
        {hasItem && (
          <div className={classes.total}>
            <span className={classes["total-text"]}>Total Amount</span>
            <span className={classes["total-amount"]}>{totalAmount}</span>
          </div>
        )}
        {!hasItem && <h2 className={classes["empty"]}>Your Cart is empty</h2>}
        <div className={classes.actions}>
          {hasItem && <button className={classes.button}>Order</button>}
          <button className={classes.button} onClick={props.onClose}>
            Close
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default Cart;
