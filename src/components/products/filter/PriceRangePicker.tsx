import {
  Flex,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { useQuery, useQueryClient } from "react-query";
import { useProductListContext } from "../../../context/ProductListContext";

const PriceRangePicker = () => {
  const [sliderRange, setSliderRange] = useState([0, 100]);
  const { setPriceRange } = useProductListContext();
  // const maxPrice = useQuery("maxPrice", getMaxPrice).data?.data as number;
  const queryCache = useQueryClient();

  const scaleUp = (value: number) => {
    // const scale = Math.ceil(maxPrice) / 100;
    // return (value * scale).toFixed(2);
  };

  const scaleUpRange = (values: number[]) => {
    const scale = Math.ceil(/*maxPrice*/ 100) / 100;
    return [values[0] * scale, values[1] * scale];
  };

  const handleRangeChange = (value: number[]) => {
    setSliderRange(value);

    const range = scaleUpRange(value);
    setPriceRange(range);

    queryCache.invalidateQueries("products");
  };

  return (
    <>
      <RangeSlider
        defaultValue={[0, 100]}
        onChangeEnd={(value) => handleRangeChange(value)}
      >
        <RangeSliderTrack>
          <RangeSliderFilledTrack />
        </RangeSliderTrack>
        <RangeSliderThumb index={0} />
        <RangeSliderThumb index={1} />
      </RangeSlider>

      <Flex justifyContent="space-between">
        <Text>From:</Text>
        <Text>To:</Text>
      </Flex>

      <Flex justifyContent="space-between">
        <Text>{`$${scaleUp(sliderRange[0])}`}</Text>
        <Text>{`$${scaleUp(sliderRange[1])}`}</Text>
      </Flex>
    </>
  );
};

export default PriceRangePicker;
