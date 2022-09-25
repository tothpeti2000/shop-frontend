import { Text } from "@chakra-ui/react";
import { FC } from "react";

const ValidationError: FC = ({ children }) => {
  return (
    <Text color="red.500" fontSize="sm" fontWeight="semibold">
      {children}
    </Text>
  );
};

export default ValidationError;
