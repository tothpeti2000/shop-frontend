import { Heading, Link, Text } from "@chakra-ui/react";
import FullScreenCenter from "../components/FullScreenCenter";

const ConfirmRegistration = () => {
  return (
    <FullScreenCenter>
      <Heading>Account created successfully</Heading>
      <Text>
        Please, confirm your registration{" "}
        <Link color={"blue"} href={"/login"}>
          here
        </Link>
      </Text>
    </FullScreenCenter>
  );
};

export default ConfirmRegistration;
