import useLogin from "../../../api/useLogin";
import LoginButton from "../../auth/LoginButton";
import LogoutButton from "../../auth/LogoutButton";

const AuthButton = () => {
  const { isLoggedIn } = useLogin();

  return isLoggedIn() ? <LogoutButton /> : <LoginButton />;
};

export default AuthButton;
