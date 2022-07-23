import { Box, Text } from "@chakra-ui/react";

const Details = () => {
  return (
    <Box flex="1" textAlign="center">
      <Text fontSize="xl" fontWeight="bold">
        ADDRESS
      </Text>
      <Text>500 Terry Francois Street</Text>
      <Text>San Francisco, CA 94158</Text>
      <Text>info@mysite.com</Text>
      <Text>Tel: 123-456-7890</Text>
    </Box>
  );
};

export default Details;
