import { Button, Spinner } from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { useRegisterUserHook } from "../../api";
import { useErrorHandler } from "../../api/client";
import useFeedback from "../../hooks/useFeedback";
import InputField from "../form/InputField";
import registrationSchema from "../form/schemas/registration";

interface RegistrationData {
  userName: string;
  email: string;
  password: string;
  passwordAgain: string;
}

const RegistrationForm = () => {
  const { showSuccess } = useFeedback();
  const { handleError } = useErrorHandler();
  const navigate = useNavigate();

  const { mutateAsync: createAccount, isLoading } = useMutation(
    useRegisterUserHook()
  );

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<RegistrationData>({
    resolver: yupResolver(registrationSchema),
  });

  const onSubmit: SubmitHandler<RegistrationData> = async (data) => {
    try {
      await createAccount(data);

      showSuccess("Account created successfully");
      navigate("/login");
    } catch (err: any) {
      handleError(err.response);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputField
        type="text"
        name="userName"
        placeholder="Username"
        control={control}
        autoFocus
        validationError={errors.userName?.message}
        size="lg"
      />

      <InputField
        type="email"
        name="email"
        placeholder="Email"
        control={control}
        validationError={errors.email?.message}
        size="lg"
      />

      <InputField
        type="password"
        name="password"
        placeholder="Password"
        control={control}
        validationError={errors.password?.message}
        size="lg"
      />

      <InputField
        type="password"
        name="passwordAgain"
        placeholder="Password again"
        control={control}
        validationError={errors.passwordAgain?.message}
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
        Create account
      </Button>
    </form>
  );
};

export default RegistrationForm;
