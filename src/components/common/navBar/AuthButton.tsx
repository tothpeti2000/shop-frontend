import { FaUserCircle } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { Link } from "react-router-dom";
import useUser from "../../../hooks/useUser";
import AppIconButton from "../../utils/AppIconButton";

const AuthButton = () => {
  const { isLoggedIn, logout } = useUser();

  return (
    <Link to="/login">
      {isLoggedIn() ? (
        <AppIconButton label="Logout" icon={FiLogOut} onClick={logout} />
      ) : (
        <AppIconButton label="Login" icon={FaUserCircle} />
      )}
    </Link>
  );
};

export default AuthButton;
