import { Flex, Text } from "@chakra-ui/react";
import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";

interface Props {
  ratingValue: number;
}

const RatingStars = (props: Props) => {
  return (
    <Flex justifyContent={"space-between"}>
      <Rating
        readonly
        initialRating={props.ratingValue}
        emptySymbol={<FaRegStar />}
        fullSymbol={<FaStar color="yellow" />}
      />
      <Text>{props.ratingValue.toFixed(1)} / 5.0</Text>
    </Flex>
  );
};

export default RatingStars;
