import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useGetProducts } from "../../../api";
import { useErrorHandler } from "../../../api/client";
import { animated } from "../../../styles/styles";
import Loading from "../../Loading";

interface Props {
  query: string | undefined;
}

const SearchResults = (props: Props) => {
  const { data, isLoading } = useGetProducts(
    { Count: 5, Name: props.query },
    { query: { onError: (err) => handleError(err.response) } }
  );

  const navigate = useNavigate();
  const { handleError } = useErrorHandler();

  // Instead of using the built-in Link component, we have to use event handlers for onMouseDown
  // That's because clicking on the search results would trigger the onBlur event of the search bar and we couldn't navigate to the desired page
  const navigateToDetails = (productId: string) =>
    navigate(`/products/${productId}`);

  const navigateToSearch = () => navigate("/products");

  return (
    <Box
      bgColor="white"
      color="black"
      fontSize="md"
      borderBottomRadius={10}
      boxShadow="xl"
    >
      <Loading isLoading={isLoading}>
        {data?.items && data.items.length > 0 ? (
          <Flex direction="column">
            {data.items.map((item) => (
              <Box
                as="button"
                key={item.id}
                p={2}
                textAlign="left"
                onMouseDown={() => navigateToDetails(item.id!)}
                _hover={{ bgColor: "#efefef" }}
                {...animated}
              >
                {item.name}
              </Box>
            ))}

            {data.totalPages! > data.currentPage! && (
              <Flex
                as="button"
                direction="column"
                alignItems="center"
                p={1}
                fontSize="sm"
                borderTop="1px"
                borderTopColor="#acacac"
                onMouseDown={navigateToSearch}
              >
                <Text fontStyle="italic">Not what you were looking for?</Text>
                <Flex alignItems="center" fontWeight="semibold">
                  <Text mr={2}>Try a more specific search</Text>
                  <Icon as={FaArrowRight} />
                </Flex>
              </Flex>
            )}
          </Flex>
        ) : (
          <Text p={2} fontStyle="italic">
            No results found
          </Text>
        )}
      </Loading>
    </Box>
  );
};

export default SearchResults;
