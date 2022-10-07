import {
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
} from "@chakra-ui/number-input";
import { debounce } from "lodash-es";
import { FiMinus, FiPlus } from "react-icons/fi";
import { useUpdateCartItemAmount } from "../../api";
import { useErrorHandler } from "../../api/client";
import { useCartContext } from "../../context/CartContext";

interface Props {
  cartItemId: string;
  amount: number;
}

const QuantityPicker = (props: Props) => {
  const { mutateAsync: updateAmount } = useUpdateCartItemAmount();
  const { refreshCartItems } = useCartContext();
  const { handleError } = useErrorHandler();

  const handleChange = debounce(
    async (valueAsString: string, valueAsNumber: number) => {
      try {
        await updateAmount({
          data: { id: props.cartItemId, amount: valueAsNumber },
        });

        refreshCartItems();
      } catch (err: any) {
        handleError(err.response);
      }
    },
    600
  );

  return (
    <NumberInput
      size="sm"
      defaultValue={props.amount}
      min={1}
      onChange={handleChange}
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
