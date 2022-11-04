import { Box, Text } from "@chakra-ui/react";
import { SharedCartDto } from "../../../models";
import SharedCartListItem from "./SharedCartListItem";

interface Props {
  carts: SharedCartDto[];
}

const SharedCartList = (props: Props) => {
  return (
    <Box px={10}>
      {props.carts.length > 0 ? (
        props.carts.map((c) => <SharedCartListItem key={c.id} sharedCart={c} />)
      ) : (
        <Box textAlign="center" fontSize="20px" fontWeight="light">
          <Text>Looks like you're not a member of any shared cart yet</Text>
          <Text fontStyle="italic">
            Create a cart yourself or join one created by someone else
          </Text>
        </Box>
      )}
    </Box>
  );
};

export default SharedCartList;
