import { Button } from "@chakra-ui/button";
import { Flex, Heading, Icon } from "@chakra-ui/react";
import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useToggleContext } from "../../context/ToggleContext";

interface Props {
  total: number;
}

const Summary = (props: Props) => {
  const { close } = useToggleContext();

  return (
    <Flex justifyContent="space-between" alignItems="center">
      <Heading>Total: {props.total}$</Heading>

      <Link to="/checkout">
        <Button
          colorScheme="teal"
          rightIcon={<Icon as={FaCheckCircle} />}
          onClick={close}
        >
          Checkout
        </Button>
      </Link>
    </Flex>
  );
};

export default Summary;
