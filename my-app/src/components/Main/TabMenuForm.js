import React, { useRef, useState } from "react";
import classes from "./TabMenuForm.module.css";
import { AiOutlinePlus } from "react-icons/ai";
import Button from '../UI/Button'
import Input from "../UI/Input";
const TabMenuForm = (props) => {
  const amountInputRef = useRef();
  const [amountIsValid, setAmountIsValid] = useState(true);

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }

    props.onAdd(enteredAmountNumber);
  };
  return (
    <form className={classes.input} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <Button className={classes.button}> 
        <AiOutlinePlus />
      </Button>
      {!amountIsValid && <p>Please Entere a valid amount (1-5)</p>}
    </form>
  );
};

export default TabMenuForm;
