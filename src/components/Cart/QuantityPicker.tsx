import {
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
} from "@chakra-ui/number-input";
import { useState } from "react";

interface Props {
  id: string;
  amount: number;
}

const QuantityPicker = (props: Props) => {
  const [value, setValue] = useState(props.amount);
  //const { mutateAsync } = useMutation(updateItemAmount);

  const HandleChange = async (diff: number) => {
    setValue(value + diff);

    //await mutateAsync({ itemID: props.id, amount: value + diff });
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
