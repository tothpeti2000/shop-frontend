import { Flex, Heading } from "@chakra-ui/layout";
import { Box } from "@chakra-ui/react";
import React from "react";
import Fade from "react-awesome-reveal";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  return (
    <Box
      bgGradient="radial(gray.500, gray.900)"
      color="white"
      px={10}
      py={100}
      textAlign="center"
    >
      <Heading>Shop categories</Heading>
      <Fade>
        <Flex p={5}>
          <CategoryCard>Men's collection</CategoryCard>
          <CategoryCard>Accessories</CategoryCard>
          <CategoryCard>Women's collection</CategoryCard>
          <CategoryCard>Electronics</CategoryCard>
        </Flex>
      </Fade>
    </Box>
  );
};

export default Categories;
