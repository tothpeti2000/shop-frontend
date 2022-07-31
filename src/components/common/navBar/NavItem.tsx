import { Box } from "@chakra-ui/react";
import { FC } from "react";
import { Link } from "react-router-dom";
import { animated } from "../../../styles/styles";

interface Props {
  to: string;
}

const NavItem: FC<Props> = ({ children, to }) => {
  return (
    <Link to={to}>
      <Box px={5} _hover={{ color: "grey" }} {...animated}>
        {children}
      </Box>
    </Link>
  );
};

export default NavItem;
