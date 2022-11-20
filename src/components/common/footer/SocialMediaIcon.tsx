import { IconType } from "react-icons";
import AppIconButton from "../../utils/AppIconButton";

interface Props {
  icon: IconType;
}

const SocialMediaIcon = (props: Props) => {
  return (
    <AppIconButton label="SocialMedia" icon={props.icon} colorScheme="black" />
  );
};

export default SocialMediaIcon;
