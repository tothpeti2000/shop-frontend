import { Stack } from "@chakra-ui/layout";
import { Radio, RadioGroup } from "@chakra-ui/radio";
import React, { ChangeEvent, useEffect, useState } from "react";
import { useProductListContext } from "../../context/ProductListContext";
import useCategories from "../../hooks/useCategories";

const CategoryPicker = () => {
  const [value, setValue] = useState("all");
  const { categories, FetchCategories } = useCategories();
  const { UpdateFilterType } = useProductListContext();

  useEffect(() => {
    FetchCategories();
  }, []);

  const HandleChange = (e: ChangeEvent<HTMLInputElement>) => {
    UpdateFilterType(e.target.value);
    setValue(e.target.value);
  };

  return (
    <RadioGroup value={value}>
      <Stack>
        <Radio value="all" onChange={HandleChange}>
          Show all
        </Radio>
        {categories.map((c) => {
          return (
            <Radio key={c.ID} value={c.name} onChange={HandleChange}>
              {c.name}
            </Radio>
          );
        })}
      </Stack>
    </RadioGroup>
  );
};

export default CategoryPicker;
