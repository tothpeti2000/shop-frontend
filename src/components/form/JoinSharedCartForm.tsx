import { Button, Spinner } from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { useJoinSharedCart } from "../../api";
import { useErrorHandler } from "../../api/client";
import { JoinSharedCartResponse } from "../../models";
import InputField from "./fields/InputField";
import joinSharedCartSchema from "./schemas/joinSharedCart";

interface JoinSharedCartData {
  passcode: string;
}

interface Props {
  onSuccess: (response: JoinSharedCartResponse) => void;
}

const JoinSharedCartForm = (props: Props) => {
  const { mutateAsync: joinSharedCart, isLoading } = useJoinSharedCart();
  const { handleError } = useErrorHandler();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<JoinSharedCartData>({
    resolver: yupResolver(joinSharedCartSchema),
  });

  const onSubmit: SubmitHandler<JoinSharedCartData> = async (data) => {
    try {
      const cart = await joinSharedCart({ data });
      props.onSuccess(cart);
    } catch (err: any) {
      handleError(err.response);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputField
        type="text"
        name="passcode"
        placeholder="Passcode"
        control={control}
        validationError={errors.passcode?.message}
      />

      <Button
        type="submit"
        w="100%"
        colorScheme="messenger"
        disabled={isLoading}
      >
        {isLoading && <Spinner />}
        Join cart
      </Button>
    </form>
  );
};

export default JoinSharedCartForm;
