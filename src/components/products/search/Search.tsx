import { Icon, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { debounce } from "lodash-es";
import React from "react";
import { FaSearch } from "react-icons/fa";
import { useProductListContext } from "../../../context/ProductListContext";

const Search = () => {
  const { updateSearchQuery } = useProductListContext();

  const handleChange = debounce((e: React.ChangeEvent<HTMLInputElement>) => {
    updateSearchQuery(e.target.value);
  }, 600);

  return (
    <InputGroup>
      <InputLeftElement
        pointerEvents="none"
        children={<Icon as={FaSearch} color="gray.400" />}
      />

      <Input
        type="text"
        onChange={handleChange}
        placeholder="Type here to search"
        border="1px"
        borderColor="#acacac"
      />
    </InputGroup>
  );
};

export default Search;
