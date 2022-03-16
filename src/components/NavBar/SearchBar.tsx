import { Input, InputGroup, InputLeftElement } from "@chakra-ui/input";
import { Button, Collapse, useDisclosure } from "@chakra-ui/react";
import React from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <>
      <Button colorScheme={"black"} hidden={isOpen} onClick={onToggle}>
        <FaSearch />
      </Button>
      <Collapse in={isOpen} animateOpacity>
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<FaSearch color="gray.300" />}
          />
          <Input type="text" placeholder="Search..." onBlur={onToggle} />
        </InputGroup>
      </Collapse>
    </>
  );
};

export default SearchBar;
