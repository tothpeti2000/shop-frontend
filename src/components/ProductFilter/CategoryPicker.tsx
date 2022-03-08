import { Stack } from "@chakra-ui/layout";
import { Radio, RadioGroup } from "@chakra-ui/radio";
import React, { ChangeEvent, useState } from "react";

const CategoryPicker = () => {
  const [value, setValue] = useState("all");
  //const { UpdateFilterType } = useProductListContext();

  const HandleChange = (e: ChangeEvent<HTMLInputElement>) => {
    //UpdateFilterType(e.target.value);
    setValue(e.target.value);
  };

  return (
    <RadioGroup value={value}>
      <Stack>
        <Radio value="all" onChange={HandleChange}>
          Show all
        </Radio>
        <Radio value="men's clothing" onChange={HandleChange}>
          Men's clothing
        </Radio>
        <Radio value="women's clothing" onChange={HandleChange}>
          Women's clothing
        </Radio>
        <Radio value="jewelery" onChange={HandleChange}>
          Jewelery
        </Radio>
        <Radio value="electronics" onChange={HandleChange}>
          Electronics
        </Radio>
      </Stack>
    </RadioGroup>
  );
};

export default CategoryPicker;
