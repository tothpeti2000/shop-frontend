import * as yup from "yup";

const joinSharedCartSchema = yup.object({
  passcode: yup.string().required("Please, enter the passcode of the cart!"),
});

export default joinSharedCartSchema;
