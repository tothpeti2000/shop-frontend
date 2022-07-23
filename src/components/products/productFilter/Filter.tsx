import { Box } from "@chakra-ui/react";
import CategoryPicker from "./CategoryPicker";
import FilterItem from "./FilterItem";
import PriceRangePicker from "./PriceRangePicker";

const Filter = () => {
  return (
    <Box
      flex="1"
      alignSelf="start"
      me={2}
      border="1px solid grey"
      borderRadius={10}
    >
      <FilterItem title="Price">
        <PriceRangePicker />
      </FilterItem>
      <FilterItem title="Category">
        <CategoryPicker />
      </FilterItem>
    </Box>
  );
};

export default Filter;
