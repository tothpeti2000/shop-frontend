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
import { useMemo } from "react";
import { useQueryClient } from "react-query";
import { useGetPriceRange } from "../../../api";
import { useProductListContext } from "../../../context/ProductListContext";
import Loading from "../../Loading";

const PriceRangePicker = () => {
  const { priceRange, setPriceRange } = useProductListContext();
  const { data: range, isLoading } = useGetPriceRange({
    query: {
      onSuccess: (data) => setPriceRange([data.min!, data.max!]),
      refetchOnWindowFocus: false,
    },
  });

  const queryCache = useQueryClient();

  const scaleUp = (rangePickerValue: number) => {
    const scale = Math.ceil(range?.max ?? 0) / 100;
    return rangePickerValue * scale;
  };

  const handleRangeChange = useMemo(
    () =>
      debounce((value: number[]) => {
        console.log(value);

        setPriceRange([scaleUp(value[0]), scaleUp(value[1])]);
      }, 300),

    [queryCache]
  );

  return (
    <Loading isLoading={isLoading}>
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
        <Box>
          <Text>From:</Text>
          <Text>{`$${priceRange[0]}`}</Text>
        </Box>

        <Box>
          <Text>To:</Text>
          <Text>{`$${priceRange[1]}`}</Text>
        </Box>
      </Flex>
    </Loading>
  );
};

export default PriceRangePicker;
