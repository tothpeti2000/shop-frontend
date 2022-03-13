import {
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  Flex,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useProductListContext } from "../../context/ProductListContext";

const PriceRangePicker = () => {
  const [range, setRange] = useState<Array<number>>([0, 100]);
  const [maxPrice, setMaxPrice] = useState(0);
  const { UpdatePriceRange } = useProductListContext();

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
    UpdatePriceRange(ScaleUpRange(value));
  };

  const FetchMaxPrice = async () => {
    // TODO: Change mock to actual fetch
    const maxPrice = 10000;

    setMaxPrice(maxPrice);
  };

  useEffect(() => {
    FetchMaxPrice();
  }, []);

  return (
    <>
      <RangeSlider
        aria-label={["min", "max"]}
        defaultValue={range}
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
