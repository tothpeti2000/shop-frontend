import * as yup from "yup";

const createSharedCartSchema = yup.object({
  name: yup.string().required("Please, enter a name for the cart!"),
});

export default createSharedCartSchema;
