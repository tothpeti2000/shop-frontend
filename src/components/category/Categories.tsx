import { Flex, Heading } from "@chakra-ui/layout";
import { Box, Button } from "@chakra-ui/react";
import Fade from "react-awesome-reveal";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import CategoryCard from "./CategoryCard";
import { useQuery } from "react-query";

const Categories = () => {
  //const { data } = useQuery("top-categories", getTopCategories);

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
          {/* {data?.data.map((c) => {
            return <CategoryCard key={c.id} name={c.name} imgURL={c.imgURL} />;
          })} */}
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
