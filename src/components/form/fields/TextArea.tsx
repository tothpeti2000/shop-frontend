import { Box, Textarea } from "@chakra-ui/react";
import { Control, Controller } from "react-hook-form";
import ValidationError from "../utils/ValidationError";

interface Props {
  name: string;
  placeholder: string;
  control: Control<any>;
  autoFocus?: boolean;
  validationError?: string;
  size?: "xs" | "sm" | "md" | "lg";
}

const TextArea = (props: Props) => {
  return (
    <Controller
      name={props.name}
      defaultValue=""
      control={props.control}
      render={({ field }) => (
        <Box mb={2}>
          <Textarea
            autoFocus={props.autoFocus}
            placeholder={props.placeholder}
            mb={1}
            border="1px"
            borderColor="#acacac"
            size={props.size}
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

export default TextArea;
