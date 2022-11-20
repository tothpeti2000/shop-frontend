import { Button, Center, Flex, Heading, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useUserContext } from "../../context/UserContext";
import useFeedback from "../../hooks/useFeedback";

const Placeholder = () => {
  const { logout } = useUserContext();
  const { showSuccess } = useFeedback();

  const logoutUser = () => {
    logout();
    showSuccess("Successfully logged out");
  };

  return (
    <Center h="86vh" flexDirection="column">
      <Heading mb={5}>You're currently logged in</Heading>

      <Text fontSize={20} mb={2}>
        There's not much to do here because you've logged in before
      </Text>

      <Flex alignItems="center">
        <Button onClick={logoutUser}>Log out</Button>

        <Text mx={5}>or</Text>

        <Link to="/products">
          <Button>Check out our products instead </Button>
        </Link>
      </Flex>
    </Center>
  );
};

export default Placeholder;
