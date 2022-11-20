import { Box, Text } from "@chakra-ui/layout";
import { Circle } from "@chakra-ui/react";
import AppImage from "../utils/AppImage";

interface Props {
  id: string;
  name: string;
  imgUrl?: string;
}

const CategoryCard = (props: Props) => {
  return (
    <Box textAlign="center">
      <Circle size="300px" mb={5} boxShadow="dark-lg" overflow="clip">
        <AppImage src={props.imgUrl} alt="Category" w="300px" />
      </Circle>

      <Text fontSize="2xl">{props.name}</Text>
    </Box>
  );
};

export default CategoryCard;
