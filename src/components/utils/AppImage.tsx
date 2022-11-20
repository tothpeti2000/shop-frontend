import { BorderProps, EffectProps, Image, LayoutProps } from "@chakra-ui/react";

interface Props {
  src: string | null | undefined;
  alt: string;
  w?: LayoutProps["w"];
  h?: LayoutProps["h"];
  borderRadius?: BorderProps["borderRadius"];
  boxShadow?: EffectProps["boxShadow"];
}

const AppImage = (props: Props) => {
  const placeholder = `${process.env.PUBLIC_URL}/assets/Placeholder.png`;

  return (
    <Image
      src={props.src || placeholder}
      alt={props.alt}
      w={props.w || "auto"}
      h={props.h || "auto"}
      borderRadius={props.borderRadius}
      boxShadow={props.boxShadow}
    />
  );
};

export default AppImage;
