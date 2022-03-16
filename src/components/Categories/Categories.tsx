import { Flex, Heading } from "@chakra-ui/layout";
import { Box, Button } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Fade from "react-awesome-reveal";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import CategoryCard from "./CategoryCard";

interface Category {
  ID: number;
  name: string;
  imgURL?: string;
}

const Categories = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  const FetchSomeCategories = async (count: number) => {
    // TODO: Change mock to actual fetch
    const items = [
      { ID: 1, name: "Construction toys" },
      { ID: 2, name: "LEGO" },
      { ID: 3, name: "F1 LEGO" },
    ];

    /*const data = await fetch(
      `https:localhost:7202/api/categories?count=${count}`
    );
    const items = await data.json();*/

    setCategories(items);
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
