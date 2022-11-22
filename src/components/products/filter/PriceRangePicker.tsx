import {
  Box,
  Flex,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
  Text,
} from "@chakra-ui/react";
import { debounce } from "lodash-es";
import { useState } from "react";
import { useGetPriceRange } from "../../../api";
import { useProductListContext } from "../../../context/ProductListContext";
import { formatPrice } from "../../cart/utils";
import Loading from "../../common/Loading";

const PriceRangePicker = () => {
  const [value, setValue] = useState([0, 100]);
  const { updatePriceRange } = useProductListContext();

  const { data: dbRange, isLoading } = useGetPriceRange({
    query: {
      onSuccess: (data) => updatePriceRange([data.min!, data.max!]),
    },
  });

  // rangePickerValue is between 0 and 100 so we have to do a conversion before modifying the price range in the context
  const scaleUp = (rangePickerValue: number) => {
    const min = dbRange?.min ?? 0;
    const max = dbRange?.max ?? 0;
    const scale = Math.ceil(max - min) / 100;

    return min + rangePickerValue * scale;
  };

  // Without debounce, the callback would be triggered too frequently when the user makes small pointer adjustments
  const setPriceRange = debounce((value: number[]) => {
    updatePriceRange([scaleUp(value[0]), scaleUp(value[1])]);
  }, 600);

  return (
    <Loading isLoading={isLoading}>
      <RangeSlider
        value={value}
        onChange={(value) => setValue(value)}
        onChangeEnd={(value) => setPriceRange(value)}
      >
        <RangeSliderTrack>
          <RangeSliderFilledTrack />
        </RangeSliderTrack>
        <RangeSliderThumb index={0} />
        <RangeSliderThumb index={1} />
      </RangeSlider>
      <Flex justifyContent="space-between">
        <Box>
          <Text>From:</Text>
          <Text>{formatPrice(scaleUp(value[0]))}</Text>
        </Box>

        <Box textAlign="right">
          <Text>To:</Text>
          <Text>{formatPrice(scaleUp(value[1]))}</Text>
        </Box>
      </Flex>
    </Loading>
  );
};

export default PriceRangePicker;
