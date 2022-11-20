import { useLocation, useNavigate } from "react-router-dom";
import LoginForm from "../../components/form/LoginForm";
import AuthFormContainer from "../../components/form/utils/AuthFormContainer";
import Layout from "../../components/Layout";
import { useUserContext } from "../../context/UserContext";
import useFeedback from "../../hooks/useFeedback";
import { LoginUserResponse } from "../../models";
import Placeholder from "./Placeholder";

const LoginPage = () => {
  const { showSuccess } = useFeedback();
  const { token, saveUserData } = useUserContext();

  const navigate = useNavigate();
  const { state } = useLocation();

  const handleSuccess = (response: LoginUserResponse) => {
    saveUserData(response.token ?? "", response.name ?? "");
    showSuccess("Successfully logged in");

    // Redirect to the given path if present, otherwise, redirect back to the previous route after successful login
    const nextPath = (state as any)?.nextPath;
    navigate(nextPath || -1);
  };

  return (
    <Layout>
      {token === null ? (
        <AuthFormContainer title="Log In">
          <LoginForm onSuccess={handleSuccess} />
        </AuthFormContainer>
      ) : (
        <Placeholder />
      )}
    </Layout>
  );
};

export default LoginPage;
