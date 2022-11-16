import { Input, InputGroup, InputLeftElement } from "@chakra-ui/input";
import { Box } from "@chakra-ui/react";
import { debounce } from "lodash-es";
import { ChangeEvent, useState } from "react";
import { FaSearch } from "react-icons/fa";
import SearchResults from "./SearchResults";

const SearchBar = () => {
  const [query, setQuery] = useState<string | undefined>(undefined);

  const handleChange = debounce((e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  }, 600);

  const collapseSearchResults = () => setQuery(undefined);

  return (
    <Box position="relative">
      <InputGroup size="sm">
        <InputLeftElement
          pointerEvents="none"
          children={<FaSearch color="gray.300" />}
        />
        <Input
          type="text"
          placeholder="Search..."
          variant="flushed"
          onChange={handleChange}
          onBlur={collapseSearchResults}
        />
      </InputGroup>

      {query && (
        <Box position="absolute" w="250px">
          <SearchResults query={query} />
        </Box>
      )}
    </Box>
  );
};

export default SearchBar;
