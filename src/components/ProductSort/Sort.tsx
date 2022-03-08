import { Flex, Heading, Select } from "@chakra-ui/react";
import React, { ChangeEvent } from "react";

const Sort = () => {
  //const { UpdateSortType } = useProductListContext();

  const HandleSelection = (e: ChangeEvent<HTMLSelectElement>) => {
    //UpdateSortType(e.target.value);
  };

  return (
    <Flex justifyContent="space-between" alignItems="center" mb={5}>
      <Heading w="20%">Filter by</Heading>
      <Select onChange={HandleSelection} w="20%" borderColor="black">
        <option value="none">Sort by</option>
        <option value="priceLTH">Price (low to high)</option>
        <option value="priceHTL">Price (high to low)</option>
        <option value="nameAZ">Name A-Z</option>
        <option value="nameZA">Name Z-A</option>
      </Select>
    </Flex>
  );
};

export default Sort;
