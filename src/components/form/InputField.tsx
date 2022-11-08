import {
  Box,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  LayoutProps,
} from "@chakra-ui/react";
import { HTMLInputTypeAttribute } from "react";
import { Control, Controller } from "react-hook-form";
import { IconType } from "react-icons";
import ValidationError from "./utils/ValidationError";

interface Props {
  type: HTMLInputTypeAttribute;
  name: string;
  placeholder: string;
  control: Control<any>;
  defaultValue?: string;
  autoFocus?: boolean;
  validationError?: string;
  width?: LayoutProps["w"];
  size?: "xs" | "sm" | "md" | "lg";
  icon?: IconType;
}

const InputField = (props: Props) => {
  return (
    <Controller
      name={props.name}
      defaultValue={props.defaultValue || ""}
      control={props.control}
      render={({ field }) => (
        <Box w={props.width} mb={2}>
          <InputGroup>
            {props.icon && (
              <InputLeftElement
                pointerEvents="none"
                children={<Icon as={props.icon} color="gray.400" />}
              />
            )}
            <Input
              type={props.type}
              autoFocus={props.autoFocus}
              placeholder={props.placeholder}
              mb={1}
              border="1px"
              borderColor="#acacac"
              size={props.size}
              {...field}
            />
          </InputGroup>

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
