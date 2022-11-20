import { Center, Spinner } from "@chakra-ui/react";
import { FC } from "react";

interface Props {
  isLoading: boolean;
}

const Loading: FC<Props> = ({ children, isLoading }) => {
  return (
    <>
      {isLoading ? (
        <Center h="100%">
          <Spinner size="lg" />
        </Center>
      ) : (
        children
      )}
    </>
  );
};

export default Loading;
