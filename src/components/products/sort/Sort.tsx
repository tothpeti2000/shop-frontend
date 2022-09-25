import { Select } from "@chakra-ui/react";
import { ChangeEvent } from "react";
import { useQueryClient } from "react-query";

const Sort = () => {
  const queryCache = useQueryClient();
  localStorage.setItem("sortOption", "all");

  const HandleSelection = (e: ChangeEvent<HTMLSelectElement>) => {
    localStorage.setItem("sortOption", e.target.value);
    queryCache.invalidateQueries("products");
  };

  return (
    <Select onChange={HandleSelection} borderColor="black">
      <option value="all">Sort by</option>
      <option value="priceLTH">Price (low to high)</option>
      <option value="priceHTL">Price (high to low)</option>
      <option value="nameAZ">Name A-Z</option>
      <option value="nameZA">Name Z-A</option>
    </Select>
  );
};

export default Sort;
