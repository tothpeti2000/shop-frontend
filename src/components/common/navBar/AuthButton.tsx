import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { FaEdit, FaUserCircle } from "react-icons/fa";
import { FiChevronDown, FiLogOut } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { useUserContext } from "../../../context/UserContext";
import useFeedback from "../../../hooks/useFeedback";
import AppIconButton from "../../utils/AppIconButton";

const AuthButton = () => {
  const { token, name, logout } = useUserContext();
  const { showSuccess } = useFeedback();
  const navigate = useNavigate();

  const logoutUser = () => {
    logout();
    navigate("/login");
    showSuccess("Successfully logged out");
  };

  return (
    <>
      {token !== null ? (
        <Menu>
          <MenuButton
            as={Button}
            rightIcon={<FiChevronDown />}
            colorScheme="yellow"
          >
            {name}
          </MenuButton>

          <MenuList color="black">
            <Link to="/profile">
              <MenuItem icon={<FaEdit />}>Edit profile</MenuItem>
            </Link>

            <MenuItem icon={<FiLogOut />} onClick={logoutUser}>
              Log out
            </MenuItem>
          </MenuList>
        </Menu>
      ) : (
        <Link to="/login">
          <AppIconButton label="Login" icon={FaUserCircle} />
        </Link>
      )}
    </>
  );
};

export default AuthButton;
