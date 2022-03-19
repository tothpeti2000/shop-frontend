import { Stack } from "@chakra-ui/layout";
import { Radio, RadioGroup } from "@chakra-ui/radio";
import React, { ChangeEvent, useEffect, useState } from "react";
import { useProductListContext } from "../../context/ProductListContext";
import CreateTree from "./CategoryTree";

export interface Category {
  ID: number;
  name: string;
  parentCategoryID?: number;
}

const CategoryPicker = () => {
  const [value, setValue] = useState("all");
  const [categories, setCategories] = useState<Array<Category>>([]);
  const { UpdateFilterType } = useProductListContext();

  const FetchCategories = async () => {
    const data = await fetch("https://localhost:7202/api/categories");
    const items = await data.json();

    /*const items: Category[] = [
      {
        ID: 1,
        name: "Construction toys",
      },
      {
        ID: 2,
        name: "LEGO",
        parentCategoryID: 1,
      },
      {
        ID: 3,
        name: "F1 LEGO",
        parentCategoryID: 2,
      },
      {
        ID: 4,
        name: "RC LEGO",
        parentCategoryID: 2,
      },
      {
        ID: 5,
        name: "Building blocks",
        parentCategoryID: 1,
      },
      {
        ID: 6,
        name: "Cars",
      },
    ];*/

    setCategories(items);
  };

  useEffect(() => {
    FetchCategories();
  }, []);

  const HandleChange = (e: ChangeEvent<HTMLInputElement>) => {
    UpdateFilterType(e.target.value);
    setValue(e.target.value);
  };

  return (
    <>
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
      <>{JSON.stringify(CreateTree(categories))}</>
    </>
  );
};

export default CategoryPicker;
