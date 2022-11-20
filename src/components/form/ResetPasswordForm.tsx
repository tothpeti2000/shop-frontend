import { Button, Spinner } from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { useResetPassword } from "../../api";
import { useErrorHandler } from "../../api/client";
import InputField from "./fields/InputField";
import resetPasswordSchema from "./schemas/resetPassword";

interface ResetPasswordData {
  newPassword: string;
  newPasswordAgain: string;
}

interface Props {
  resetToken: string;
  userId: string;
  onSuccess: () => void;
}

const ResetPasswordForm = (props: Props) => {
  const { mutateAsync: resetPassword, isLoading } = useResetPassword();
  const { handleError } = useErrorHandler();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ResetPasswordData>({
    resolver: yupResolver(resetPasswordSchema),
  });

  const onSubmit: SubmitHandler<ResetPasswordData> = async (data) => {
    try {
      await resetPassword({
        data: {
          userId: props.userId,
          newPassword: data.newPassword,
          newPasswordConfirm: data.newPasswordAgain,
          resetToken: props.resetToken,
        },
      });

      props.onSuccess();
    } catch (err: any) {
      handleError(err.response);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputField
        type="password"
        name="newPassword"
        placeholder="New password"
        control={control}
        autoFocus
        validationError={errors.newPassword?.message}
        size="lg"
      />

      <InputField
        type="password"
        name="newPasswordAgain"
        placeholder="New password again"
        control={control}
        validationError={errors.newPasswordAgain?.message}
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
        Save password
      </Button>
    </form>
  );
};

export default ResetPasswordForm;
