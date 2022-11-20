import { Box, ListItem, Text, UnorderedList } from "@chakra-ui/react";

interface Props {
  actions: string[];
}

const RecentActionList = (props: Props) => {
  return (
    <Box>
      <Text fontSize="xl" fontWeight="semibold" mb={5}>
        Recent actions
      </Text>

      <Box>
        {props.actions.length > 0 ? (
          <UnorderedList>
            {props.actions.map((action, idx) => (
              <ListItem key={idx} mb={2}>
                {action}
              </ListItem>
            ))}
          </UnorderedList>
        ) : (
          <Text fontStyle="italic">There have been no actions recently</Text>
        )}
      </Box>
    </Box>
  );
};

export default RecentActionList;
