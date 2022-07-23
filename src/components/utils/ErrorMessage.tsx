import { Text } from "@chakra-ui/react";
import { FC } from "react";

const ErrorMessage: FC = ({ children }) => {
  return (
    <Text color={"red.500"} fontWeight={"bold"}>
      {children}
    </Text>
  );
};

export default ErrorMessage;
