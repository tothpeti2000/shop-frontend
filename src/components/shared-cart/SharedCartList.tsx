import { Box, Button, Heading, Text } from "@chakra-ui/react";
import { useToggleContext } from "../../context/ToggleContext";
import { SharedCartDto } from "../../models";

interface Props {
  carts: SharedCartDto[];
}

const SharedCartList = (props: Props) => {
  const { open } = useToggleContext();

  return (
    <>
      <Button onClick={open}>Create cart</Button>

      {props.carts.map((c) => (
        <Box key={c.id}>
          <Heading>
            {c.name} {c.memberCount} member(s)
          </Heading>
          <Text>{c.description}</Text>
        </Box>
      ))}
    </>
  );
};

export default SharedCartList;
