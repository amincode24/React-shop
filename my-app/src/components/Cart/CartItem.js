import React from 'react';
import classes from './CartItem.module.css';
const CartItem = (props) => {
  const price = `$${props.price.toFixed(2)}`
  return (
    <div className={classes.item}>
      <img src={props.src} alt='pic' />
        <h3>{props.name}</h3>
        <div className={classes.actions}>
            <button onClick={props.onRemove}>-</button>
            <span>{props.amount}</span>
            <button onClick={props.onAdd}>+</button>
        </div>
        <div className={classes.summary}>
            <span>{price}</span>
        </div>
    </div>
  )
}

export default CartItem
