import { Button, Spinner } from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { useInitiatePasswordReset } from "../../api";
import { useErrorHandler } from "../../api/client";
import InputField from "./fields/InputField";
import forgotPasswordSchema from "./schemas/forgotPassword";

interface ForgotPasswordData {
  email: string;
}

interface Props {
  onSuccess: () => void;
}

const ForgotPasswordForm = (props: Props) => {
  const { mutateAsync: initiatePasswordReset, isLoading } =
    useInitiatePasswordReset();
  const { handleError } = useErrorHandler();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordData>({
    resolver: yupResolver(forgotPasswordSchema),
  });

  const onSubmit: SubmitHandler<ForgotPasswordData> = async (data) => {
    try {
      await initiatePasswordReset({ data: { ...data } });
      props.onSuccess();
    } catch (err: any) {
      handleError(err.response);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputField
        type="email"
        name="email"
        placeholder="Email"
        control={control}
        autoFocus
        validationError={errors.email?.message}
        size="lg"
      />

      <Button
        type="submit"
        w="100%"
        colorScheme="messenger"
        disabled={isLoading}
        size="lg"
      >
        {isLoading && <Spinner />}
        Send reset link
      </Button>
    </form>
  );
};

export default ForgotPasswordForm;
