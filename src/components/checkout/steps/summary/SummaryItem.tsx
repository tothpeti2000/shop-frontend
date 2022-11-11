import { Flex, Icon, Text } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface Props {
  icon: IconType;
  label: string;
  value: string;
}

const SummaryItem = (props: Props) => {
  return (
    <Flex>
      <Flex alignItems="center" mr={2}>
        <Icon as={props.icon} mr={1} />
        <Text fontWeight="semibold">{props.label}:</Text>
      </Flex>
      <Text>{props.value}</Text>
    </Flex>
  );
};

export default SummaryItem;
