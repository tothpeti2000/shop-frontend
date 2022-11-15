import {
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
} from "@chakra-ui/number-input";
import { useEffect, useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";

interface Props {
  initialAmount: number;
  onChange: (value: number) => void;
}

const QuantityPicker = (props: Props) => {
  const [value, setValue] = useState(props.initialAmount);

  // Without this, the value wouldn't update even when the value of props changes because state is initialized on the first render only
  useEffect(() => {
    setValue(props.initialAmount);
  }, [props.initialAmount]);

  const handleChange = (valueAsString: string, valueAsNumber: number) =>
    setValue(valueAsNumber);

  const handleSelection = () => props.onChange(value);

  return (
    <NumberInput
      size="sm"
      value={value}
      min={1}
      onChange={handleChange}
      onBlur={handleSelection}
    >
      <NumberInputField />
      <NumberInputStepper>
        <NumberIncrementStepper children={<FiPlus />} />
        <NumberDecrementStepper children={<FiMinus />} />
      </NumberInputStepper>
    </NumberInput>
  );
};

export default QuantityPicker;
