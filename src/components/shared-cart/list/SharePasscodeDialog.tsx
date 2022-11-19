import { Flex, Text } from "@chakra-ui/react";
import DialogFrame from "../../utils/DialogFrame";

interface Props {
  passcode: string;
}

const SharePasscodeDialog = (props: Props) => {
  return (
    <DialogFrame
      title="Share cart passcode"
      positiveButtonColorScheme="messenger"
      hasCustomActions
    >
      <Flex>
        <Text mr={2}>Passcode of the cart:</Text>
        <Text fontSize="lg" fontWeight="semibold">
          {props.passcode}
        </Text>
      </Flex>
      <Text>Share it with others so they can start shopping with you</Text>
    </DialogFrame>
  );
};

export default SharePasscodeDialog;
