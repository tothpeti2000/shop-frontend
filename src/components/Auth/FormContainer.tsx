import { Box } from "@chakra-ui/react";
import { FC } from "react";
import FullScreenCenter from "../utils/FullScreenCenter";

const FormContainer: FC = ({ children }) => {
  return (
    <FullScreenCenter>
      <Box w={"30%"} p={5} borderRadius={"2xl"} boxShadow={"dark-lg"}>
        {children}
      </Box>
    </FullScreenCenter>
  );
};

export default FormContainer;
