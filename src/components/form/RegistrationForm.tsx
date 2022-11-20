import { Button, Spinner } from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { useRegisterUser } from "../../api";
import { useErrorHandler } from "../../api/client";
import registrationSchema from "../form/schemas/registration";
import InputField from "./fields/InputField";

interface RegistrationData {
  name: string;
  userName: string;
  email: string;
  password: string;
  passwordAgain: string;
}

interface Props {
  onSuccess: () => void;
}

const RegistrationForm = (props: Props) => {
  const { mutateAsync: createAccount, isLoading } = useRegisterUser();
  const { handleError } = useErrorHandler();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<RegistrationData>({
    resolver: yupResolver(registrationSchema),
  });

  const onSubmit: SubmitHandler<RegistrationData> = async (data) => {
    try {
      await createAccount({ data: data });
      props.onSuccess();
    } catch (err: any) {
      handleError(err.response);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputField
        type="text"
        name="name"
        placeholder="Name"
        control={control}
        autoFocus
        validationError={errors.name?.message}
        size="lg"
      />

      <InputField
        type="text"
        name="userName"
        placeholder="Username"
        control={control}
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
