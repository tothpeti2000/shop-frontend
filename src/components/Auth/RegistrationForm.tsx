import { Button, Spinner } from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { useRegisterUserHook } from "../../api";
import { ErrorType } from "../../api/client";
import useFeedback from "../../hooks/useFeedback";
import { RegisterDetails } from "../../interfaces/auth";
import InputField from "../form/InputField";
import registrationSchema from "../form/schemas/registration";

const RegistrationForm = () => {
  const { showError } = useFeedback();

  const { mutateAsync: createAccount, isLoading } = useMutation(
    useRegisterUserHook()
  );

  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterDetails>({
    resolver: yupResolver(registrationSchema),
  });

  const onSubmit: SubmitHandler<RegisterDetails> = async (data) => {
    try {
      await createAccount({
        userName: data.userName,
        email: data.email,
        password: data.password,
      });

      navigate("/login");
    } catch (err: any) {
      const errorMessage = (err as ErrorType<Error>).response?.data.message;
      console.log(errorMessage);

      showError("Registration failed", errorMessage);
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
      />

      <InputField
        type="email"
        name="email"
        placeholder="Email"
        control={control}
        validationError={errors.email?.message}
      />

      <InputField
        type="password"
        name="password"
        placeholder="Password"
        control={control}
        validationError={errors.password?.message}
      />

      <InputField
        type="password"
        name="passwordAgain"
        placeholder="Password again"
        control={control}
        validationError={errors.passwordAgain?.message}
      />

      <Button
        type="submit"
        w="100%"
        colorScheme="messenger"
        disabled={isLoading}
      >
        {isLoading && <Spinner />}
        Create account
      </Button>
    </form>
  );
};

export default RegistrationForm;
