import { Box } from "@chakra-ui/react";
import { FC } from "react";
import FullScreenCenter from "../../utils/FullScreenCenter";

const FormContainer: FC = ({ children }) => {
  return (
    <FullScreenCenter>
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
    </FullScreenCenter>
  );
};

export default FormContainer;
