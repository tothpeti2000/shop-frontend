import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
} from "@chakra-ui/react";
import { FC } from "react";
import { useToggleContext } from "../../context/ToggleContext";

interface Props {
  title: string;
  negativeButtonLabel?: string;
  positiveButtonLabel?: string;
  positiveButtonColorScheme?: string;
  onClick?: () => void;
  hasCustomActions?: boolean;
}

const DialogFrame: FC<Props> = ({
  children,
  title,
  negativeButtonLabel,
  positiveButtonLabel,
  positiveButtonColorScheme,
  onClick,
  hasCustomActions,
}) => {
  const { isOpen, close } = useToggleContext();

  const handleClick = () => {
    onClick?.();
    close();
  };

  return (
    <Modal isOpen={isOpen} onClose={close} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton />

        <ModalBody>{children}</ModalBody>

        <ModalFooter>
          {!hasCustomActions && (
            <>
              <Button mr={3} onClick={close}>
                {negativeButtonLabel || "Cancel"}
              </Button>

              <Button
                colorScheme={positiveButtonColorScheme || "teal"}
                onClick={handleClick}
              >
                {positiveButtonLabel || "OK"}
              </Button>
            </>
          )}
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default DialogFrame;
