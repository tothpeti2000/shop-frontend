import { Icon, IconButton } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface Props {
  icon: IconType;
}

const SocialMediaIcon = (props: Props) => {
  return (
    <IconButton
      aria-label="SocialMedia"
      icon={<Icon as={props.icon} boxSize={10} />}
      colorScheme="black"
    />
  );
};

export default SocialMediaIcon;
