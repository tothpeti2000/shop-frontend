import { Flex, Heading } from "@chakra-ui/layout";
import { Box, Button } from "@chakra-ui/react";
import Fade from "react-awesome-reveal";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useGetTopCategories } from "../../api";
import Loading from "../common/Loading";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  const { data, isLoading } = useGetTopCategories();

  return (
    <Box
      bgGradient="radial(gray.500, gray.900)"
      color="white"
      px={10}
      py={100}
      textAlign="center"
    >
      <Heading>Shop categories</Heading>

      <Loading isLoading={isLoading}>
        <Fade triggerOnce>
          <Flex justifyContent="space-around" my={10}>
            {data?.topCategories &&
              data.topCategories.map((c) => (
                <CategoryCard
                  key={c.id}
                  id={c.id!}
                  name={c.name!}
                  imgUrl={c.imgUrl!}
                />
              ))}
          </Flex>
        </Fade>
      </Loading>

      <Link to="/products">
        <Button
          p={10}
          fontSize="xl"
          colorScheme="yellow"
          rightIcon={<FaLongArrowAltRight />}
        >
          Check out all categories
        </Button>
      </Link>
    </Box>
  );
};

export default Categories;
