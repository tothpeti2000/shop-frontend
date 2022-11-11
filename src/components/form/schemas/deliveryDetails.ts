import * as yup from "yup";

const deliveryDetailsSchema = yup.object({
  firstName: yup.string().required("Please, enter your first name!"),
  lastName: yup.string().required("Please, enter your last name!"),
  phone: yup.string().required("Please, enter your phone number!"),
  zipCode: yup.string().required("Please, enter the zip code of your city!"),
  city: yup.string().required("Please, enter the name of your city!"),
  address: yup.string().required("Please, enter your address!"),
});

export default deliveryDetailsSchema;
