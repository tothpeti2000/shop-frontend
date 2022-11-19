import { Box, Heading, Button, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import FullScreenCenter from "../components/utils/FullScreenCenter";

const ForbiddenPage = () => {
  return (
    <FullScreenCenter>
      <Box textAlign="center">
        <Heading fontSize={100}>403</Heading>
        <Text fontSize={50}>Forbidden</Text>

        <Text fontSize={20} mb={10}>
          Looks like you tried to access a page you're not authorized to visit
        </Text>

        <Link to="/products">
          <Button>Check out our products instead</Button>
        </Link>
      </Box>
    </FullScreenCenter>
  );
};

export default ForbiddenPage;
