import { Icon, IconButton } from "@chakra-ui/react";
import React from "react";
import { IconType } from "react-icons";

interface IProps {
  icon: IconType;
}

const SocialMediaIcon = (props: IProps) => {
  return (
    <IconButton
      aria-label="SocialMedia"
      icon={<Icon as={props.icon} boxSize={10} />}
      colorScheme="black"
    />
  );
};

export default SocialMediaIcon;
