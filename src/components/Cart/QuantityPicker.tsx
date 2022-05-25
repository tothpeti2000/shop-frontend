import {
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
} from "@chakra-ui/number-input";
import React, { useState } from "react";

interface IProps {
  ID: number;
}

const QuantityPicker = (props: IProps) => {
  const HandleIncrement = () => {
    //UpdateItemQuantity(props.ID, value + 1);
    //setValue(value + 1);
  };

  const HandleDecrement = () => {
    //UpdateItemQuantity(props.ID, value - 1);
    //setValue(value - 1);
  };

  return (
    <NumberInput size="sm" value={/*value*/ 10} min={1}>
      <NumberInputField />
      <NumberInputStepper>
        <NumberIncrementStepper children="+" onClick={HandleIncrement} />
        <NumberDecrementStepper children="-" onClick={HandleDecrement} />
      </NumberInputStepper>
    </NumberInput>
  );
};

export default QuantityPicker;
