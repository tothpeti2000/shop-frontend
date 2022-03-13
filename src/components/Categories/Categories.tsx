import { Flex, Heading } from "@chakra-ui/layout";
import { Box } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Fade from "react-awesome-reveal";
import CategoryCard from "./CategoryCard";

interface Category {
  ID: number;
  name: string;
}
const Categories = () => {
  const [categories, setCategories] = useState<Array<Category>>([]);

  const FetchSomeCategories = async (count: number) => {
    // TODO: Change mock to actual fetch
    const data = [
      { ID: 1, name: "Construction toys" },
      { ID: 2, name: "LEGO" },
      { ID: 3, name: "F1 LEGO" },
    ];

    setCategories(data);
  };

  useEffect(() => {
    FetchSomeCategories(3);
  }, []);

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
          {categories.map((c) => {
            return <CategoryCard key={c.ID}>{c.name}</CategoryCard>;
          })}
        </Flex>
      </Fade>
    </Box>
  );
};

export default Categories;
