import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import InputField from "./InputField";
import createSharedCartSchema from "./schemas/createSharedCart";
import TextArea from "./TextArea";

interface SharedCartData {
  name: string;
  description?: string;
}

const CreateSharedCartForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SharedCartData>({
    resolver: yupResolver(createSharedCartSchema),
  });

  const onSubmit: SubmitHandler<SharedCartData> = async (data) => {
    try {
      //   showSuccess("Account created successfully");
    } catch (err: any) {
      //   handleError(err.response);
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
    </form>
  );
};

export default CreateSharedCartForm;
