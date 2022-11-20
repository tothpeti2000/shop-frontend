import { Button, Flex, Spacer } from "@chakra-ui/react";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";
import { useStepperContext } from "../../context/StepperContext";

interface Props {
  direction: "prev" | "next" | "both";
  onNextClick?: () => boolean;
}

const StepButtons = (props: Props) => {
  const { stepNext, stepBack } = useStepperContext();

  const validateStep = () => {
    if (!props.onNextClick || props.onNextClick() === true) {
      stepNext();
    }
  };

  return (
    <Flex>
      {props.direction !== "next" && (
        <Button leftIcon={<FaCaretLeft />} onClick={stepBack}>
          Back
        </Button>
      )}

      <Spacer />

      {props.direction !== "prev" && (
        <Button
          rightIcon={<FaCaretRight />}
          colorScheme="teal"
          onClick={validateStep}
        >
          Next
        </Button>
      )}
    </Flex>
  );
};

export default StepButtons;
