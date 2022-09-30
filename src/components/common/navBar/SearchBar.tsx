import { Input, InputGroup, InputLeftElement } from "@chakra-ui/input";
import { Button, Collapse } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";
import { useToggleContext } from "../../../context/ToggleContext";

const SearchBar = () => {
  const { isOpen, open, close } = useToggleContext();

  return (
    <>
      <Button colorScheme="black" hidden={isOpen} onClick={open}>
        <FaSearch />
      </Button>

      <Collapse in={isOpen} animateOpacity>
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<FaSearch color="gray.300" />}
          />
          <Input type="text" placeholder="Search..." onBlur={close} />
        </InputGroup>
      </Collapse>
    </>
  );
};

export default SearchBar;
