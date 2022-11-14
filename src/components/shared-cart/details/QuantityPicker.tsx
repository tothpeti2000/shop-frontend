import { useNumberInput, Flex, Button, Input } from "@chakra-ui/react";

interface Props {
  defaultValue: number;
}

const QuantityPicker = (props: Props) => {
  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({
      step: 1,
      defaultValue: props.defaultValue,
      min: 0,
    });

  const incrementProps = getIncrementButtonProps();
  const decrementProps = getDecrementButtonProps();
  const inputProps = getInputProps();

  return (
    <Flex>
      <Button {...decrementProps}>-</Button>
      <Input {...inputProps} mx={2} />
      <Button {...incrementProps}>+</Button>
    </Flex>
  );
};

export default QuantityPicker;
