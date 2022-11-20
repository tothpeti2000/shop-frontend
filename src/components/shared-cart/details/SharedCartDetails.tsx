import { Box, Button, Flex, Heading, Icon, Text } from "@chakra-ui/react";
import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import {
  GetSharedCartDetailsResponse,
  SharedCartStatus,
} from "../../../models";
import Placeholder from "./Placeholder";
import { getStatusDisplayName } from "./utils";
import { formatPrice, getTotalPrice } from "../../cart/utils";
import RecentActionList from "./RecentActionList";
import SharedCartItemList from "./SharedCartItemList";

interface Props {
  sharedCartId: string;
  details: GetSharedCartDetailsResponse;
  status: SharedCartStatus;
  actions: string[];
}

const SharedCartDetails = (props: Props) => {
  return (
    <Box p={10}>
      <Flex justifyContent="space-between" alignItems="center" mb={10}>
        <Heading>
          {props.details.cartName} - {getStatusDisplayName(props.status)}
        </Heading>

        <Flex alignItems="center">
          <Text fontSize="3xl" fontWeight="bold" mr={5}>
            Total: {formatPrice(getTotalPrice(props.details.sharedCartItems))}
          </Text>

          <Link to={`/checkout/${props.sharedCartId}`}>
            <Button
              colorScheme="teal"
              rightIcon={<Icon as={FaCheckCircle} />}
              size="lg"
              disabled={props.status !== SharedCartStatus.Active}
            >
              Checkout
            </Button>
          </Link>
        </Flex>
      </Flex>

      <Flex>
        <Box flex={3} mr={10} position="relative">
          <SharedCartItemList cartItems={props.details.sharedCartItems!} />
          {props.status !== SharedCartStatus.Active && <Placeholder />}
        </Box>

        <Box flex={1}>
          <RecentActionList actions={props.actions} />
        </Box>
      </Flex>
    </Box>
  );
};

export default SharedCartDetails;
