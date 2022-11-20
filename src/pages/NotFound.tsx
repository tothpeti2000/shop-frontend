import { Box, Button, Heading, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import FullScreenCenter from "../components/utils/FullScreenCenter";

const NotFound = () => {
  return (
    <FullScreenCenter>
      <Box textAlign="center">
        <Heading fontSize={100}>404</Heading>
        <Text fontSize={50} mb={10}>
          Page not found
        </Text>

        <Link to="/products">
          <Button>Check out our products instead</Button>
        </Link>
      </Box>
    </FullScreenCenter>
  );
};

export default NotFound;
