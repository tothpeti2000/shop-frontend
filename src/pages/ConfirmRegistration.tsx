import { Heading, Text } from "@chakra-ui/react";
import FullScreenCenter from "../components/FullScreenCenter";

const ConfirmRegistration = () => {
  return (
    <FullScreenCenter>
      <Heading>Account created successfully</Heading>
      <Text>Please, confirm your registration here</Text>
    </FullScreenCenter>
  );
};

export default ConfirmRegistration;
