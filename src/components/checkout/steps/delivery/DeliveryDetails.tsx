import { Box, Button, Flex, Icon, Text } from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRef } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { GrContactInfo } from "react-icons/gr";
import { HiLocationMarker } from "react-icons/hi";
import { useCheckoutContext } from "../../../../context/CheckoutContext";
import InputField from "../../../form/InputField";
import deliveryDetailsSchema from "../../../form/schemas/deliveryDetails";
import StepButtons from "../../StepButtons";

export interface DeliveryData {
  firstName: string;
  lastName: string;
  phone: string;
  zipCode: string;
  city: string;
  address: string;
}

const DeliveryDetails = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<DeliveryData>({
    resolver: yupResolver(deliveryDetailsSchema),
  });

  const { deliveryData, setDeliveryData } = useCheckoutContext();

  const onSubmit: SubmitHandler<DeliveryData> = (data) => setDeliveryData(data);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const validateForm = () => {
    buttonRef.current?.click();
    return isValid;
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Flex>
          <Box flex={1}>
            <Flex alignItems="center" mb={3}>
              <Icon as={GrContactInfo} mr={3} fontSize="2xl" />
              <Text fontSize="lg" fontWeight="bold">
                Contact details
              </Text>
            </Flex>

            <InputField
              type="text"
              name="firstName"
              placeholder="First name"
              control={control}
              defaultValue={deliveryData.firstName}
              autoFocus
              validationError={errors.firstName?.message}
              width="70%"
            />

            <InputField
              type="text"
              name="lastName"
              placeholder="Last name"
              control={control}
              defaultValue={deliveryData.lastName}
              validationError={errors.lastName?.message}
              width="70%"
            />

            <InputField
              type="text"
              name="phone"
              placeholder="Phone number"
              control={control}
              defaultValue={deliveryData.phone}
              validationError={errors.phone?.message}
              width="50%"
            />
          </Box>

          <Box flex={1}>
            <Flex alignItems="center" mb={3}>
              <Icon as={HiLocationMarker} mr={3} fontSize="2xl" />
              <Text fontSize="lg" fontWeight="bold">
                Delivery location
              </Text>
            </Flex>

            <InputField
              type="text"
              name="zipCode"
              placeholder="Zip code"
              control={control}
              defaultValue={deliveryData.zipCode}
              validationError={errors.zipCode?.message}
              width="40%"
            />

            <InputField
              type="text"
              name="city"
              placeholder="City"
              control={control}
              defaultValue={deliveryData.city}
              validationError={errors.city?.message}
              width="70%"
            />

            <InputField
              type="text"
              name="address"
              placeholder="Address"
              control={control}
              defaultValue={deliveryData.address}
              validationError={errors.address?.message}
              width="70%"
            />
          </Box>
        </Flex>

        <Button type="submit" ref={buttonRef} hidden />
      </form>

      <StepButtons direction="both" onNextClick={validateForm} />
    </>
  );
};

export default DeliveryDetails;
