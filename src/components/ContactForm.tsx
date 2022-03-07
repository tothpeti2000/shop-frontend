import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Textarea,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { FiMail } from "react-icons/fi";
import { Fab } from "react-tiny-fab";

const ContactForm = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Fab
        icon={<FiMail />}
        mainButtonStyles={{ backgroundColor: "red" }}
        onClick={onOpen}
      />

      <Modal isOpen={isOpen} isCentered onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textAlign="center">Contact us</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl isRequired>
              <FormLabel>Name</FormLabel>
              <Input placeholder="Name" />
            </FormControl>

            <FormControl mt={4} isRequired>
              <FormLabel>Email</FormLabel>
              <Input placeholder="Email" />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Phone</FormLabel>
              <Input placeholder="Phone" />
            </FormControl>

            <FormControl mt={4} isRequired>
              <FormLabel>Message</FormLabel>
              <Textarea placeholder="Type your message here..." />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" w="100%" onClick={onClose}>
              Submit
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ContactForm;
