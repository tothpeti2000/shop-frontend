import {
  Button,
  ButtonGroup,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spinner,
} from "@chakra-ui/react";
import { FaCartPlus, FaSlideshare } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";
import { useAddItemToCart } from "../../api";
import { useErrorHandler } from "../../api/client";
import { useCartContext } from "../../context/CartContext";
import { useToggleContext } from "../../context/ToggleContext";
import useFeedback from "../../hooks/useFeedback";
import useUserCredentials from "../../hooks/useUserCredentials";

interface Props {
  productId: string;
  disabled?: boolean;
}

const AddToCartButton = (props: Props) => {
  const { token } = useUserCredentials();

  const { mutateAsync: addItemToCart, isLoading } = useAddItemToCart();
  const { refreshCartItems } = useCartContext();
  const { showSuccess } = useFeedback();
  const { open } = useToggleContext();
  const { handleError } = useErrorHandler();

  const handleClick = async () => {
    try {
      await addItemToCart({
        data: {
          productId: props.productId,
        },
      });

      showSuccess("Item added", "We've added the item to your cart");
      refreshCartItems();
    } catch (err: any) {
      handleError(err.response);
    }
  };

  return (
    <ButtonGroup isAttached isDisabled={props.disabled} colorScheme="red">
      <Button leftIcon={<Icon as={FaCartPlus} />} onClick={handleClick}>
        {isLoading && <Spinner />}
        Add to cart
      </Button>

      {token !== null && (
        <Menu>
          <MenuButton as={Button} rightIcon={<FiChevronDown />} />

          <MenuList color="black">
            <MenuItem icon={<FaSlideshare />} onClick={open}>
              Add to shared cart
            </MenuItem>
          </MenuList>
        </Menu>
      )}
    </ButtonGroup>
  );
};

export default AddToCartButton;
