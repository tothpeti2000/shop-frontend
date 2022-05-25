import { Button } from "@chakra-ui/button";
import { Flex, Heading, Icon } from "@chakra-ui/react";
import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CartSummary } from "../../interfaces/Cart";

const Summary = (props: CartSummary) => {
  return (
    <Flex justifyContent="space-between" alignItems="center" w="100%">
      {props.total > 0 && (
        <>
          <Heading>Total: {props.total}$</Heading>
          <Link to="/checkout">
            <Button
              colorScheme="teal"
              rightIcon={<Icon as={FaCheckCircle} />}
              onClick={props.onClick}
            >
              Checkout
            </Button>
          </Link>
        </>
      )}
    </Flex>
  );
};

export default Summary;
