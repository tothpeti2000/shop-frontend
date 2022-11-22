import { Checkbox, CheckboxGroup, Flex } from "@chakra-ui/react";
import { useGetAllCategories } from "../../../api";
import { useProductListContext } from "../../../context/ProductListContext";
import Loading from "../../common/Loading";

const CategoryPicker = () => {
  const { categories, updateCategories } = useProductListContext();
  const { data, isLoading } = useGetAllCategories();

  const handleChange = (value: string[]) => {
    updateCategories(value);
  };

  return (
    <Loading isLoading={isLoading}>
      <CheckboxGroup
        value={categories}
        onChange={(value) => handleChange(value as string[])}
      >
        <Flex direction="column">
          {data?.categories &&
            data.categories.map((c) => (
              <Checkbox key={c.id} value={c.id} mb={2}>
                {c.name}
              </Checkbox>
            ))}
        </Flex>
      </CheckboxGroup>
    </Loading>
  );
};

export default CategoryPicker;
