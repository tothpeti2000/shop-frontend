import { Box } from "@chakra-ui/layout";
import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
} from "@chakra-ui/react";
import { FC } from "react";

interface Props {
  label: String;
}

const FilterItem: FC<Props> = ({ children, label }) => {
  return (
    <AccordionItem p={2}>
      <AccordionButton>
        <Box flex="1" textAlign="left" fontSize="xl">
          {label}
        </Box>
        <AccordionIcon />
      </AccordionButton>

      <AccordionPanel>{children}</AccordionPanel>
    </AccordionItem>
  );
};

export default FilterItem;
