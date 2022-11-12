import { Button, Flex, Spinner } from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { useEditProfile } from "../../api";
import { useErrorHandler } from "../../api/client";
import { useUserContext } from "../../context/UserContext";
import useFeedback from "../../hooks/useFeedback";
import { EditProfileCommand } from "../../models";
import InputField from "./InputField";
import profileSchema from "./schemas/profile";

interface ProfileData {
  name?: string;
  newPassword?: string;
  newPasswordAgain?: string;
  currentPassword: string;
}

const ProfileForm = () => {
  const { mutateAsync: editProfile, isLoading } = useEditProfile();
  const { name } = useUserContext();
  const { showSuccess } = useFeedback();
  const { handleError } = useErrorHandler();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ProfileData>({
    resolver: yupResolver(profileSchema),
  });

  const createDto = (data: ProfileData) => {
    const dto: EditProfileCommand = {
      currentPassword: data.currentPassword,
    };

    data.name && (dto.name = data.name);
    data.newPassword && (dto.newPassword = data.newPassword);
    data.newPasswordAgain && (dto.newPasswordConfirm = data.newPasswordAgain);

    return dto;
  };

  const onSubmit: SubmitHandler<ProfileData> = async (data) => {
    const dto = createDto(data);

    try {
      await editProfile({ data: dto });

      showSuccess(
        "Profile changes saved successfully",
        "The changes will be applied the next time you log in"
      );
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
        validationError={errors.name?.message}
        defaultValue={name}
      />

      <InputField
        type="password"
        name="newPassword"
        placeholder="New password"
        control={control}
        validationError={errors.newPassword?.message}
      />

      <InputField
        type="password"
        name="newPasswordAgain"
        placeholder="New password again"
        control={control}
        validationError={errors.newPasswordAgain?.message}
      />

      <Flex justifyContent="space-between">
        <InputField
          type="password"
          name="currentPassword"
          placeholder="Current password"
          control={control}
          validationError={errors.currentPassword?.message}
          width="60%"
        />

        <Button type="submit" colorScheme="messenger" disabled={isLoading}>
          {isLoading && <Spinner />}
          Update profile
        </Button>
      </Flex>
    </form>
  );
};

export default ProfileForm;
