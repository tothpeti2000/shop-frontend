import {
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
} from "@chakra-ui/number-input";
import React, { useState } from "react";
import useCart from "../../api/useCart";
import { UpdateAmount } from "../../services/Cartservice";

interface IProps {
  id: number;
  amount: number;
}

const QuantityPicker = (props: IProps) => {
  const [value, setValue] = useState(props.amount);
  const { mutateAsync, isLoading, isError, error } = UpdateAmount();

  const HandleChange = async (diff: number) => {
    setValue(value + diff);

    await mutateAsync({ itemID: props.id, amount: value + diff });
  };

  return (
    <NumberInput size="sm" value={value} min={1}>
      <NumberInputField />
      <NumberInputStepper>
        <NumberIncrementStepper children="+" onClick={() => HandleChange(1)} />
        <NumberDecrementStepper children="-" onClick={() => HandleChange(-1)} />
      </NumberInputStepper>
    </NumberInput>
  );
};

export default QuantityPicker;
