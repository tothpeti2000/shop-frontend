import { Button, Spinner } from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { useErrorHandler } from "../../api/client";
import useFeedback from "../../hooks/useFeedback";
import InputField from "./InputField";
import joinSharedCartSchema from "./schemas/joinSharedCart";

interface JoinSharedCartData {
  passcode: string;
}

const JoinSharedCartForm = () => {
  // const { mutateAsync: joinSharedCart, isLoading } = useJoinSharedCart();
  const { showSuccess } = useFeedback();
  const { handleError } = useErrorHandler();
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<JoinSharedCartData>({
    resolver: yupResolver(joinSharedCartSchema),
  });

  const onSubmit: SubmitHandler<JoinSharedCartData> = async (data) => {
    try {
      // const cart = await joinSharedCart({ data });
      // showSuccess(`Joined cart ${cart.name} successfully`);
      // navigate(`/shared-carts/${cart.id}`);
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

      {/* <Button
        type="submit"
        w="100%"
        colorScheme="messenger"
        disabled={isLoading}
      >
        {isLoading && <Spinner />}
        Join cart
      </Button> */}
    </form>
  );
};

export default JoinSharedCartForm;
