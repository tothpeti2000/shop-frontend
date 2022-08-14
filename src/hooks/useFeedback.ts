import { useToast } from "@chakra-ui/react";
import { AlertStatus } from "@chakra-ui/react";

const useFeedback = () => {
  const toast = useToast();

  const showToast = (
    status: AlertStatus,
    title: string,
    description?: string
  ) => {
    toast({
      title: title,
      description: description,
      status: status,
      duration: 3000,
      isClosable: true,
    });
  };

  const showSuccess = (title: string, description?: string) => {
    showToast("success", title, description);
  };

  const showError = (title: string, description?: string) => {
    showToast("error", title, description);
  };

  return {
    showSuccess,
    showError,
  };
};

export default useFeedback;
