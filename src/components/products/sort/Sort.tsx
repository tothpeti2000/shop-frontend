import { Select } from "@chakra-ui/react";
import { ChangeEvent } from "react";
import { useProductListContext } from "../../../context/ProductListContext";

const Sort = () => {
  const { updateSortOption } = useProductListContext();

  const handleSelection = (e: ChangeEvent<HTMLSelectElement>) => {
    updateSortOption(e.target.value);
  };

  return (
    <Select
      placeholder="Sort by"
      onChange={handleSelection}
      variant="filled"
      borderColor="#acacac"
    >
      <option value="price">Price (low to high)</option>
      <option value="price desc">Price (high to low)</option>
      <option value="name">Name (A-Z)</option>
      <option value="name desc">Name (Z-A)</option>
    </Select>
  );
};

export default Sort;
