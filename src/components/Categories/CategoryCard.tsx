import { Box, Text } from "@chakra-ui/layout";
import React, { FC } from "react";
import PlaceHolder from "./PlaceHolder";

const CategoryCard: FC = ({ children }) => {
  return (
    <Box flex="1" textAlign="center" p={5}>
      {/*<Link to="/products">
        <PlaceHolder />
        <Text fontSize="xl">{children}</Text>
  </Link>*/}
      <PlaceHolder />
      <Text fontSize="xl">{children}</Text>
    </Box>
  );
};

export default CategoryCard;
