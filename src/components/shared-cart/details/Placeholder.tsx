import { Box, Center } from "@chakra-ui/react";

const Placeholder = () => {
  return (
    <Center
      position="absolute"
      top={0}
      bottom={0}
      left={0}
      right={0}
      bgColor="#ffffffac"
    >
      <Box
        p={5}
        bgColor="white"
        fontSize="lg"
        boxShadow="dark-lg"
        borderRadius={10}
      >
        You can't edit the cart at the moment
      </Box>
    </Center>
  );
};

export default Placeholder;
