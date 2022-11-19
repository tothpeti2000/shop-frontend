import { Box, Center, Heading } from "@chakra-ui/react";
import { FC } from "react";

interface Props {
  title: string;
}

const AuthFormContainer: FC<Props> = ({ children, title }) => {
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
        <Heading textAlign="center" mb={10}>
          {title}
        </Heading>
        {children}
      </Box>
    </Center>
  );
};

export default AuthFormContainer;
