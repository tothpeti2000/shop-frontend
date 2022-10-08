import { Button, Spinner } from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useCreateSharedCart } from "../../api";
import { useErrorHandler } from "../../api/client";
import useFeedback from "../../hooks/useFeedback";
import InputField from "./InputField";
import createSharedCartSchema from "./schemas/createSharedCart";
import TextArea from "./TextArea";

interface SharedCartData {
  name: string;
  description: string;
}

const CreateSharedCartForm = () => {
  const { showSuccess } = useFeedback();
  const { handleError } = useErrorHandler();
  const navigate = useNavigate();

  const { mutateAsync: createCart, isLoading } = useCreateSharedCart();

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

      showSuccess("Cart created successfully");
      navigate(`/shared-carts/${response.id}`);
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
