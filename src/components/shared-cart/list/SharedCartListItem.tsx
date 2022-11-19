import { Button, Fade, Flex, Icon, Text, Tooltip } from "@chakra-ui/react";
import { useState } from "react";
import { FaArrowRight, FaShare } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi";
import { Link } from "react-router-dom";
import { useToggleContext } from "../../../context/ToggleContext";
import { useUserContext } from "../../../context/UserContext";
import { SharedCartDto } from "../../../models";
import SharePasscodeDialog from "./SharePasscodeDialog";

const SharedCartListItem = (props: SharedCartDto) => {
  const [cartHovered, setCartHovered] = useState(false);
  const { name } = useUserContext();
  const { open } = useToggleContext();

  const getUserNames = () =>
    props.userNames
      ?.map((userName) => (userName === name ? "You" : userName))
      .join(", ");

  return (
    <>
      <Flex
        justifyContent="space-between"
        alignItems="center"
        p={5}
        boxShadow="md"
        onMouseEnter={() => setCartHovered(true)}
        onMouseLeave={() => setCartHovered(false)}
      >
        <Flex alignItems="center">
          <Text fontSize={25} fontWeight="semibold" mr={10}>
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
          <Button rightIcon={<FaShare />} mr={2} onClick={open}>
            Share
          </Button>

          <Link to={`/shared-carts/${props.id}`}>
            <Button rightIcon={<FaArrowRight />}>View</Button>
          </Link>
        </Fade>
      </Flex>

      <SharePasscodeDialog passcode={props.passcode!} />
    </>
  );
};

export default SharedCartListItem;
