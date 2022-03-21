import { Flex, Heading } from "@chakra-ui/layout";
import { Box, Button } from "@chakra-ui/react";
import React, { useEffect } from "react";
import Fade from "react-awesome-reveal";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import useCategories from "../../hooks/useCategories";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  const { categoryCovers, FetchTopCategories } = useCategories();

  useEffect(() => {
    FetchTopCategories();
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
          {categoryCovers.map((c) => {
            return <CategoryCard key={c.ID} name={c.name} imgURL={c.imgURL} />;
          })}
        </Flex>
      </Fade>

      <Link to={"/products"}>
        <Button p={10} fontSize={"xl"} colorScheme={"yellow"}>
          Check out all categories
          <FaLongArrowAltRight />
        </Button>
      </Link>
    </Box>
  );
};

export default Categories;
