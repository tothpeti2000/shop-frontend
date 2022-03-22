import { Flex } from "@chakra-ui/react";
import { FC } from "react";

const FullScreenCenter: FC = ({ children }) => {
  return (
    <Flex
      direction={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      h={"100vh"}
    >
      {children}
    </Flex>
  );
};

export default FullScreenCenter;
