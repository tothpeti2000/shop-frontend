import { Box, Flex } from "@chakra-ui/layout";
import { Collapse, Text, useDisclosure } from "@chakra-ui/react";
import { FC, useState } from "react";

interface Props {
  label: String;
}

const FilterItem: FC<Props> = ({ children, label }) => {
  const { isOpen, onToggle } = useDisclosure();
  const [toggleIcon, setToggleIcon] = useState("+");

  const toggleItem = () => {
    onToggle();
    setToggleIcon(toggleIcon === "+" ? "-" : "+");
  };

  return (
    <Box p={5} borderBottom="1px" borderColor="lightgrey">
      <Flex
        as="button"
        justifyContent="space-between"
        w="100%"
        fontSize="xl"
        onClick={toggleItem}
      >
        <Text>{label}</Text>
        <Text>{toggleIcon}</Text>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <Box mt={5}>{children}</Box>
      </Collapse>
    </Box>
  );
};

export default FilterItem;
