import { Button, Spinner } from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { useCreateSharedCart } from "../../api";
import { useErrorHandler } from "../../api/client";
import InputField from "./fields/InputField";
import TextArea from "./fields/TextArea";
import createSharedCartSchema from "./schemas/createSharedCart";

interface SharedCartData {
  name: string;
  description: string;
}

interface Props {
  onSuccess: (cartId: string) => void;
}

const CreateSharedCartForm = (props: Props) => {
  const { mutateAsync: createCart, isLoading } = useCreateSharedCart();
  const { handleError } = useErrorHandler();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SharedCartData>({
    resolver: yupResolver(createSharedCartSchema),
  });

  const onSubmit: SubmitHandler<SharedCartData> = async (data) => {
    try {
      const response = await createCart({ data: { ...data } });
      props.onSuccess(response.id!);
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
      />

      <TextArea
        name="description"
        placeholder="Write a few words about the cart"
        control={control}
      />

      <Button
        type="submit"
        w="100%"
        colorScheme="messenger"
        disabled={isLoading}
      >
        {isLoading && <Spinner />}
        Create cart
      </Button>
    </form>
  );
};

export default CreateSharedCartForm;
