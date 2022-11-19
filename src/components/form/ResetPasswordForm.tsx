import { Button, Spinner } from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useResetPassword } from "../../api";
import { useErrorHandler } from "../../api/client";
import useFeedback from "../../hooks/useFeedback";
import InputField from "./InputField";
import resetPasswordSchema from "./schemas/resetPassword";

interface ResetPasswordData {
  newPassword: string;
  newPasswordAgain: string;
}

interface Props {
  resetToken: string;
  userId: string;
}

const ResetPasswordForm = (props: Props) => {
  const { showSuccess } = useFeedback();
  const { handleError } = useErrorHandler();
  const navigate = useNavigate();

  const { mutateAsync: resetPassword, isLoading } = useResetPassword();

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

      showSuccess("Password updated successfully");
      navigate("/login", { state: { prevPath: "/reset-password" } });
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
