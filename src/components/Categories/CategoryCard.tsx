import { Box, Text } from "@chakra-ui/layout";
import React, { FC } from "react";
import { Link } from "react-router-dom";
import PlaceHolder from "./PlaceHolder";

const CategoryCard: FC = ({ children }) => {
  return (
    <Box flex="1" textAlign="center" p={5}>
      <Link to="/products">
        {/* TODO: Change placeholder images to actual covers */}
        <PlaceHolder />
        <Text fontSize="2xl">{children}</Text>
      </Link>
    </Box>
  );
};

export default CategoryCard;
