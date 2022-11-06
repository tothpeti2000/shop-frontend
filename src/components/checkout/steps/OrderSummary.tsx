import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useGetCartItems } from "../../../api";
import { useErrorHandler } from "../../../api/client";
import Loading from "../../Loading";
import StepButtons from "../StepButtons";
import { RiArrowGoBackFill } from "react-icons/ri";

const OrderSummary = () => {
  const { data, isLoading } = useGetCartItems({
    query: { onError: (err) => handleError(err.response) },
  });

  const { handleError } = useErrorHandler();

  const getTotalPrice = () =>
    data?.cartItems!.reduce((acc, item) => acc + item.price! * item.amount!, 0);

  return (
    <>
      <Loading isLoading={isLoading}>
        <Flex justifyContent="space-between">
          <Box>
            {data?.cartItems &&
              data.cartItems.map((item) => (
                <Flex key={item.id} mb={5}>
                  <Image
                    src={item.imgUrl || "https://picsum.photos/100"}
                    mr={2}
                  />

                  <Flex direction="column" justifyContent="space-around">
                    <Text fontSize="2xl" fontWeight="bold">
                      {item.name}
                    </Text>

                    <Flex justifyContent="space-between" fontSize="xl">
                      <Text fontWeight="semibold">${item.price}</Text>
                      <Text>&times;{item.amount}</Text>
                    </Flex>
                  </Flex>
                </Flex>
              ))}
          </Box>

          <Flex direction="column" alignItems="center">
            <Heading mb={10}>Total: ${getTotalPrice()}</Heading>

            <Text>You're not done yet?</Text>
            <Link to="/products">
              <Button leftIcon={<RiArrowGoBackFill />}>
                Continue shopping
              </Button>
            </Link>
          </Flex>
        </Flex>
      </Loading>

      <StepButtons direction="next" />
    </>
  );
};

export default OrderSummary;
