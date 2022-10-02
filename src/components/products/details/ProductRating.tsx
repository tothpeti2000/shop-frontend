import { Box, Text } from "@chakra-ui/react";
import { FaStar } from "react-icons/fa";
import Rating from "react-rating";

interface Props {
  ratingValue: number;
}

const ProductRating = (props: Props) => {
  return (
    <Box textAlign="right">
      <Rating
        readonly
        initialRating={props.ratingValue}
        emptySymbol={<FaStar />}
        fullSymbol={<FaStar color="gold" />}
      />

      <Text fontWeight="semibold">{props.ratingValue.toFixed(1)} / 5.0</Text>
    </Box>
  );
};

export default ProductRating;
