import { Heading, Text } from "@chakra-ui/react";
import FullScreenCenter from "../components/utils/FullScreenCenter";

const NotFound = () => {
  return (
    <FullScreenCenter>
      <Heading>404</Heading>
      <Text>Page not found</Text>
    </FullScreenCenter>
  );
};

export default NotFound;
