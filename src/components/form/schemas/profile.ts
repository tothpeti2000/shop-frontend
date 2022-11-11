import * as yup from "yup";

const profileSchema = yup.object().shape(
  {
    name: yup.string().required("Please, enter your name!"),
    newPassword: yup.string().when("newPassword", {
      is: (newPassword: string) => newPassword?.length > 0,
      then: yup
        .string()
        .min(8, "Password must be at least 8 characters long")
        .max(50, "Password must be at most 50 characters long")
        .test(
          "contains-non-alphanumeric",
          "Password must have at least one non alphanumeric character",
          (value) => value?.match(/[^a-zA-Z\d\s:]+/) !== null
        )
        .test(
          "contains-digit",
          "Password must have at least one digit",
          (value) => value?.match(/[0-9]+/) !== null
        )
        .test(
          "contains-uppercase",
          "Password must have at least one uppercase letter",
          (value) => value?.match(/[A-Z]+/) !== null
        ),
    }),

    newPasswordAgain: yup.string().when("newPassword", {
      is: (newPassword: string) => newPassword?.length > 0,
      then: yup
        .string()
        .oneOf([yup.ref("newPassword")], "Passwords don't match")
        .required("Please, enter your password again!"),
    }),

    currentPassword: yup
      .string()
      .required("Please, enter your current password to save your changes!"),
  },
  [["newPassword", "newPassword"]]
);

export default profileSchema;
