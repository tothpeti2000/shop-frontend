import {
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  Flex,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";

const PriceRangePicker = () => {
  const [range, setRange] = useState<Array<number>>([10, 30]);

  return (
    <>
      <RangeSlider
        aria-label={["min", "max"]}
        defaultValue={range}
        value={range}
        onChange={(value) => setRange(value)}
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
        <Text>{`$${range[0]}`}</Text>
        <Text>{`$${range[1]}`}</Text>
      </Flex>
    </>
  );
};

export default PriceRangePicker;
