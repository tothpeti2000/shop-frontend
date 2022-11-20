import { Accordion, Heading } from "@chakra-ui/react";
import CategoryPicker from "./CategoryPicker";
import FilterItem from "./FilterItem";
import PriceRangePicker from "./PriceRangePicker";

const Filter = () => {
  return (
    <>
      <Heading size="lg" mb={5}>
        Filter by
      </Heading>

      <Accordion allowMultiple allowToggle borderColor="#acacac">
        <FilterItem label="Price">
          <PriceRangePicker />
        </FilterItem>

        <FilterItem label="Category">
          <CategoryPicker />
        </FilterItem>
      </Accordion>
    </>
  );
};

export default Filter;
