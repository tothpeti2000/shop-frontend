import { Box, Flex } from "@chakra-ui/layout";
import { Collapse, Text, useDisclosure } from "@chakra-ui/react";
import React, { FC, useState } from "react";

type Props = {
  title: String;
};

const FilterItem: FC<Props> = ({ children, title }) => {
  const { isOpen, onToggle } = useDisclosure();
  const [toggleIcon, SetToggleIcon] = useState("+");

  const HandleClick = () => {
    onToggle();
    SetToggleIcon(toggleIcon === "+" ? "-" : "+");
  };

  return (
    <Box w="100%" px={10} py={5} borderBottom="1px solid lightgrey">
      <Flex
        as="button"
        w="100%"
        fontSize="xl"
        justifyContent="space-between"
        onClick={HandleClick}
      >
        <Text>{title}</Text>
        <Text>{toggleIcon}</Text>
      </Flex>
      <Collapse in={isOpen} animateOpacity>
        <Box mt={5}>{children}</Box>
      </Collapse>
    </Box>
  );
};

export default FilterItem;
