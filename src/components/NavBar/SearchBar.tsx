import { Input, InputGroup, InputLeftElement } from "@chakra-ui/input";
import { Collapse, IconButton, useDisclosure } from "@chakra-ui/react";
import React from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  const { isOpen, onToggle } = useDisclosure();

  const GetIcon = () => {
    return isOpen ? <></> : <FaSearch />;
  };

  return (
    <>
      <IconButton
        colorScheme="black"
        aria-label="Search"
        icon={GetIcon()}
        onClick={onToggle}
        _focus={{ outline: "none" }}
      />

      {/* TODO: Fix collapse issue */}
      <Collapse in={isOpen} animateOpacity>
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<FaSearch color="gray.300" />}
          />
          <Input type="text" placeholder="Search..." />
        </InputGroup>
      </Collapse>
    </>
  );
};

export default SearchBar;
