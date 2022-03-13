import {
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  Flex,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useProductListContext } from "../../context/ProductListContext";

const PriceRangePicker = () => {
  const [range, setRange] = useState<Array<number>>([0, 100]);
  const { UpdatePriceRange } = useProductListContext();

  const ScaleUp = (values: number[]) => {
    return [values[0] * 100, values[1] * 100];
  };

  const HandleChange = (value: number[]) => {
    setRange(value);
    UpdatePriceRange(ScaleUp(range));
  };

  return (
    <>
      <RangeSlider
        aria-label={["min", "max"]}
        defaultValue={range}
        value={range}
        onChange={(value) => HandleChange(value)}
      >
        <RangeSliderTrack>
          <RangeSliderFilledTrack />
        </RangeSliderTrack>
        <RangeSliderThumb index={0} />
        <RangeSliderThumb index={1} />
      </RangeSlider>

      <Flex justifyContent={"space-between"}>
        <Text>From:</Text>
        <Text>To:</Text>
      </Flex>

      <Flex justifyContent={"space-between"}>
        <Text>{`$${range[0] * 100}`}</Text>
        <Text>{`$${range[1] * 100}`}</Text>
      </Flex>
    </>
  );
};

export default PriceRangePicker;
