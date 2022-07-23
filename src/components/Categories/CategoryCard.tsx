import { Box, Text } from "@chakra-ui/layout";
import { Link } from "react-router-dom";
import CategoryCover from "./CategoryCover";

interface Props {
  name: string;
  imgURL?: string;
}

const CategoryCard = (props: Props) => {
  return (
    <Box flex="1" textAlign="center" p={5}>
      <Link to="/products">
        <CategoryCover imgURL={props.imgURL} />
        <Text fontSize="2xl">{props.name}</Text>
      </Link>
    </Box>
  );
};

export default CategoryCard;
