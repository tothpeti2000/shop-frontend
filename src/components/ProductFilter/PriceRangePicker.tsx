import {
  Flex,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { useQueryClient } from "react-query";
import useProducts from "../../api/useProducts";

const PriceRangePicker = () => {
  const [range, setRange] = useState<number[]>([0, 100]);
  const { GetMaxPrice } = useProducts();
  const maxPrice = GetMaxPrice().data?.data as number;
  const queryCache = useQueryClient();

  const ScaleUp = (value: number) => {
    const scale = Math.ceil(maxPrice) / 100;
    return (value * scale).toFixed(2);
  };

  const ScaleUpRange = (values: number[]) => {
    const scale = Math.ceil(maxPrice) / 100;
    return [values[0] * scale, values[1] * scale];
  };

  const HandleChange = (value: number[]) => {
    setRange(value);
    const range = ScaleUpRange(value);

    localStorage.setItem("fromPrice", JSON.stringify(range[0]));
    localStorage.setItem("toPrice", JSON.stringify(range[1]));

    queryCache.invalidateQueries("products");
  };

  return (
    <>
      <RangeSlider
        aria-label={["min", "max"]}
        defaultValue={[0, 100]}
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
        <Text>{`$${ScaleUp(range[0])}`}</Text>
        <Text>{`$${ScaleUp(range[1])}`}</Text>
      </Flex>
    </>
  );
};

export default PriceRangePicker;
