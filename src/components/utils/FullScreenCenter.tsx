import { Center } from "@chakra-ui/react";
import { FC } from "react";

interface Props {
  bgColor?: string;
}

const FullScreenCenter: FC<Props> = ({ bgColor, children }) => {
  return (
    <Center h="100vh" bgColor={bgColor}>
      {children}
    </Center>
  );
};

export default FullScreenCenter;
