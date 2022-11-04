import { Button, Fade, Flex, Icon, Text } from "@chakra-ui/react";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi";
import { Link } from "react-router-dom";
import { SharedCartDto } from "../../../models";

interface Props {
  sharedCart: SharedCartDto;
}

const SharedCartListItem = (props: Props) => {
  const [cartHovered, setCartHovered] = useState(false);

  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      p={5}
      onMouseEnter={() => setCartHovered(true)}
      onMouseLeave={() => setCartHovered(false)}
    >
      <Flex alignItems="center" fontSize={35}>
        <Text fontWeight="semibold" mr={10}>
          {props.sharedCart.name}
        </Text>

        <Flex alignItems="center" fontSize={20}>
          <Icon as={HiUserGroup} />
          <Text>{props.sharedCart.memberCount}</Text>
        </Flex>
      </Flex>

      <Text mx={10}>{props.sharedCart.description}</Text>

      <Fade in={cartHovered}>
        <Link to={`/shared-carts/${props.sharedCart.id}`}>
          <Button rightIcon={<FaArrowRight />}>Continue shopping</Button>
        </Link>
      </Fade>
    </Flex>
  );
};

export default SharedCartListItem;
