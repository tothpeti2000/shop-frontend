import { Box, Button, Flex, Icon, Text, Tooltip } from "@chakra-ui/react";
import { FaQuestionCircle } from "react-icons/fa";
import { useToggleContext } from "../../../context/ToggleContext";
import JoinSharedCartForm from "../../form/JoinSharedCartForm";
import CreateSharedCartDialog from "./CreateSharedCartDialog";

const CreateJoinSharedCart = () => {
  const { open } = useToggleContext();

  return (
    <>
      <Flex
        direction="column"
        alignItems="center"
        py="100px"
        borderLeft="1px"
        borderColor="#acacac"
      >
        <Button colorScheme="messenger" size="lg" onClick={open}>
          Create new shared cart
        </Button>

        <Text my={3}>or</Text>

        <Box>
          <Flex alignItems="center">
            <Text fontSize="xl" fontWeight="bold" mr={3} mb={2}>
              Start shopping with others
            </Text>

            <Tooltip
              hasArrow
              label="Enter the passcode below which you got from a member of the shared cart"
              placement="auto"
              p={2}
            >
              <span>
                <Icon as={FaQuestionCircle} boxSize="25px" />
              </span>
            </Tooltip>
          </Flex>

          <JoinSharedCartForm />
        </Box>
      </Flex>

      <CreateSharedCartDialog />
    </>
  );
};

export default CreateJoinSharedCart;
