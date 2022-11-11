import { Box, Center } from "@chakra-ui/react";
import { FC } from "react";

const AuthFormContainer: FC = ({ children }) => {
  return (
    <Center h="86vh">
      <Box
        w="30%"
        minW="400px"
        p={5}
        border="1px"
        borderRadius="2xl"
        borderColor="#cacaca"
        boxShadow="2xl"
      >
        {children}
      </Box>
    </Center>
  );
};

export default AuthFormContainer;
