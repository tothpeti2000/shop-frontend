import { Box, Text } from "@chakra-ui/react";
import { ToggleProvider } from "../../../context/ToggleContext";
import { SharedCartDto } from "../../../models";
import SharedCartListItem from "./SharedCartListItem";

interface Props {
  carts: SharedCartDto[];
}

const SharedCartList = (props: Props) => {
  return (
    <Box px={10}>
      {props.carts.length > 0 ? (
        props.carts.map((c) => (
          <ToggleProvider key={c.id}>
            <SharedCartListItem {...c} />
          </ToggleProvider>
        ))
      ) : (
        <Box textAlign="center" fontSize="20px" fontWeight="light">
          <Text>
            Looks like you're not a member of any active shared cart yet
          </Text>
          <Text fontStyle="italic">
            Create a cart yourself or join one created by someone else
          </Text>
        </Box>
      )}
    </Box>
  );
};

export default SharedCartList;
