import { Box, Flex } from "@chakra-ui/react";
import { FC } from "react";

const FormContainer: FC = ({ children }) => {
  return (
    <Flex justifyContent={"center"} alignItems={"center"} h={"100vh"}>
      <Box w={"30%"} p={5} borderRadius={"2xl"} boxShadow={"dark-lg"}>
        {children}
      </Box>
    </Flex>
  );
};

export default FormContainer;
