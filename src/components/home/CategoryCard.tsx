import { Box, Text } from "@chakra-ui/layout";
import { Circle, Image } from "@chakra-ui/react";

interface Props {
  id: string;
  name: string;
  imgUrl?: string;
}

const CategoryCard = (props: Props) => {
  return (
    <Box textAlign="center">
      <Circle size="300px" mb={5} boxShadow="dark-lg" overflow="clip">
        <Image src={props.imgUrl || "https://via.placeholder.com/300"} />
      </Circle>

      <Text fontSize="2xl">{props.name}</Text>
    </Box>
  );
};

export default CategoryCard;
