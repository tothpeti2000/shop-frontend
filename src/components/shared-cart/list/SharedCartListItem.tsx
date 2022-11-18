import { Button, Fade, Flex, Icon, Text, Tooltip } from "@chakra-ui/react";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi";
import { Link } from "react-router-dom";
import { useUserContext } from "../../../context/UserContext";
import { SharedCartDto } from "../../../models";

const SharedCartListItem = (props: SharedCartDto) => {
  const [cartHovered, setCartHovered] = useState(false);
  const { name } = useUserContext();

  const getUserNames = () =>
    props.userNames
      ?.map((userName) => (userName === name ? "You" : userName))
      .join(", ");

  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      p={5}
      boxShadow="md"
      onMouseEnter={() => setCartHovered(true)}
      onMouseLeave={() => setCartHovered(false)}
    >
      <Flex alignItems="center" fontSize={35}>
        <Text fontWeight="semibold" mr={10}>
          {props.name}
        </Text>

        <Tooltip label={getUserNames()} hasArrow>
          <Flex alignItems="center" fontSize={20}>
            <Icon as={HiUserGroup} />
            <Text>{props.userNames!.length}</Text>
          </Flex>
        </Tooltip>
      </Flex>

      <Text mx={10}>{props.description}</Text>

      <Fade in={cartHovered}>
        <Link to={`/shared-carts/${props.id}`}>
          <Button rightIcon={<FaArrowRight />}>View</Button>
        </Link>
      </Fade>
    </Flex>
  );
};

export default SharedCartListItem;
