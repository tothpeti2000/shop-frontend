import { Box, Input } from "@chakra-ui/react";
import { HTMLInputTypeAttribute } from "react";
import { Control, Controller } from "react-hook-form";
import ValidationError from "../utils/ValidationError";

interface InputFieldProps {
  type: HTMLInputTypeAttribute;
  name: string;
  placeholder: string;
  control: Control<any>;
  autoFocus?: boolean;
  validationError?: string;
}

const InputField = (props: InputFieldProps) => {
  return (
    <Controller
      name={props.name}
      defaultValue=""
      control={props.control}
      render={({ field }) => (
        <Box mb={2}>
          <Input
            type={props.type}
            autoFocus={props.autoFocus}
            placeholder={props.placeholder}
            mb={1}
            {...field}
          />

          <Box
            minH={6}
            visibility={props.validationError ? "visible" : "hidden"}
          >
            <ValidationError>{props.validationError}</ValidationError>
          </Box>
        </Box>
      )}
    />
  );
};

export default InputField;
