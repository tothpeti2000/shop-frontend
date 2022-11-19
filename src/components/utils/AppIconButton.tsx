import { Icon, IconButton } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface Props {
  label: string;
  icon: IconType;
  colorScheme?: string;
  size?: "xs" | "sm" | "md" | "lg";
  onClick?: () => void;
}

const AppIconButton = (props: Props) => {
  return (
    <IconButton
      aria-label={props.label}
      icon={<Icon as={props.icon} boxSize="80%" />}
      colorScheme={props.colorScheme || "yellow"}
      onClick={props.onClick}
      size={props.size}
    />
  );
};

export default AppIconButton;
