import { IconButton, Icon } from "@chakra-ui/react";
import { FiLogOut } from "react-icons/fi";
import { Link } from "react-router-dom";
import useLogin from "../../api/useLogin";

const LogoutButton = () => {
  const { logout } = useLogin();

  return (
    <Link to="/login">
      <IconButton
        aria-label="Logout"
        icon={<Icon as={FiLogOut} boxSize="80%" />}
        colorScheme="yellow"
        mx={5}
        onClick={logout}
      />
    </Link>
  );
};

export default LogoutButton;
