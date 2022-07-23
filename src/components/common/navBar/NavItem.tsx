import { Box } from "@chakra-ui/react";
import { FC } from "react";

const NavItem: FC = ({ children }) => {
  return (
    <Box
      width="100px"
      textAlign="center"
      _hover={{ color: "grey" }}
      transition="0.5s"
    >
      {children}
    </Box>
  );
};

export default NavItem;
