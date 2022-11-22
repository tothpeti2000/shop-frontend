import { Box, Flex, Icon, Radio, RadioGroup, Text } from "@chakra-ui/react";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useAddItemToSharedCart, useGetSharedCarts } from "../../api";
import { useErrorHandler } from "../../api/client";
import useFeedback from "../../hooks/useFeedback";
import ValidationError from "../form/utils/ValidationError";
import Loading from "../common/Loading";
import DialogFrame from "../utils/DialogFrame";

interface Props {
  productId: string;
}

const AddToSharedCartDialog = (props: Props) => {
  const { data, isLoading } = useGetSharedCarts({
    query: {
      onError: (err) => handleError(err.response),
    },
  });

  const { mutateAsync: addItemToCart } = useAddItemToSharedCart();
  const { showSuccess } = useFeedback();
  const { handleError } = useErrorHandler();

  const [cartId, setCartId] = useState<string | undefined>(undefined);
  const [showError, setShowError] = useState(false);

  const handleClick = async () => {
    if (!cartId) {
      setShowError(true);
      return false;
    }

    try {
      await addItemToCart({
        data: {
          cartId: cartId,
          productId: props.productId,
        },
      });

      showSuccess("Item added", "We've added the item to the shared cart");
    } catch (err: any) {
      handleError(err.response);
    } finally {
      setCartId(undefined);
      setShowError(false);
    }

    return true;
  };

  return (
    <DialogFrame
      title="Which cart would you like to add the item to?"
      onClick={handleClick}
    >
      <Loading isLoading={isLoading}>
        {data?.carts && data.carts.length > 0 ? (
          <Box>
            <RadioGroup onChange={setCartId}>
              <Flex direction="column">
                {data.carts.map((c) => (
                  <Radio key={c.id} value={c.id} mb={2}>
                    {c.name}
                  </Radio>
                ))}
              </Flex>
            </RadioGroup>

            <Box minH="2rem" visibility={showError ? "visible" : "hidden"}>
              <ValidationError>
                You must choose a shared cart first
              </ValidationError>
            </Box>
          </Box>
        ) : (
          <Box>
            <Text>You're not a member of any shared cart yet</Text>

            <Link to="/shared-carts">
              <Flex alignItems="center">
                <Text fontWeight="semibold" mr={2}>
                  Create a shared cart or join one
                </Text>
                <Icon as={FaArrowRight} />
              </Flex>
            </Link>
          </Box>
        )}
      </Loading>
    </DialogFrame>
  );
};

export default AddToSharedCartDialog;
