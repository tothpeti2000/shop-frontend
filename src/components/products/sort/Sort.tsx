import { Select } from "@chakra-ui/react";
import { ChangeEvent } from "react";
import { useProductListContext } from "../../../context/ProductListContext";
import { SortOption } from "../../../models/sortOption";

const Sort = () => {
  const { updateSortOption } = useProductListContext();

  const handleSelection = (e: ChangeEvent<HTMLSelectElement>) => {
    updateSortOption(e.target.value as SortOption);
  };

  return (
    <Select
      placeholder="Sort by"
      onChange={handleSelection}
      variant="filled"
      borderColor="#acacac"
    >
      <option value={SortOption.PRICE_ASC}>Price (low to high)</option>
      <option value={SortOption.PRICE_DESC}>Price (high to low)</option>
      <option value={SortOption.NAME_ASC}>Name (A-Z)</option>
      <option value={SortOption.NAME_DESC}>Name (Z-A)</option>
    </Select>
  );
};

export default Sort;
