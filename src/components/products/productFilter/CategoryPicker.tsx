import { Stack } from "@chakra-ui/layout";
import { Radio, RadioGroup } from "@chakra-ui/radio";
import { ChangeEvent, useState } from "react";
import { useQuery } from "react-query";
import useCategories from "../../../hooks/api/useCategories";

const CategoryPicker = () => {
  const [value, setValue] = useState("all");
  const { getCategories } = useCategories();
  const { data } = useQuery("categories", getCategories);

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
        {data?.data.map((c) => {
          return (
            <Radio key={c.id} value={c.name} onChange={HandleChange}>
              {c.name}
            </Radio>
          );
        })}
      </Stack>
    </RadioGroup>
  );
};

export default CategoryPicker;
