import { Box, Heading } from "@chakra-ui/react";
import CategoryPicker from "./CategoryPicker";
import FilterItem from "./FilterItem";
import PriceRangePicker from "./PriceRangePicker";

const Filter = () => {
  return (
    <Box>
      <Heading size="lg" mb={5}>
        Filter by
      </Heading>

      <Box border="1px" borderColor="grey" borderRadius={10}>
        <FilterItem label="Price">
          <PriceRangePicker />
        </FilterItem>

        <FilterItem label="Category">
          <CategoryPicker />
        </FilterItem>
      </Box>
    </Box>
  );
};

export default Filter;
