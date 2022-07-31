import { useToast } from "@chakra-ui/react";

const useFeedback = () => {
  const toast = useToast();

  const showSuccess = (title: string, description: string = "") => {
    toast({
      title: title,
      description: description,
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  const showError = (title: string, description: string = "") => {
    toast({
      title: title,
      description: description,
      status: "error",
      duration: 3000,
      isClosable: true,
    });
  };

  return {
    showSuccess,
    showError,
  };
};

export default useFeedback;
