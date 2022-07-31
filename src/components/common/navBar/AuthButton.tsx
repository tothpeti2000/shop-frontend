import useUser from "../../../hooks/useUser";
import LoginButton from "../../auth/LoginButton";
import LogoutButton from "../../auth/LogoutButton";

const AuthButton = () => {
  const { isLoggedIn } = useUser();

  return isLoggedIn() ? <LogoutButton /> : <LoginButton />;
};

export default AuthButton;
