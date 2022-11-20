import { useLocation, useNavigate } from "react-router-dom";
import LoginForm from "../../components/form/LoginForm";
import AuthFormContainer from "../../components/form/utils/AuthFormContainer";
import Layout from "../../components/Layout";
import { useUserContext } from "../../context/UserContext";
import useFeedback from "../../hooks/useFeedback";
import { LoginUserResponse } from "../../models";

const LoginPage = () => {
  const { showSuccess } = useFeedback();
  const { saveUserData } = useUserContext();
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
      <AuthFormContainer title="Log In">
        <LoginForm onSuccess={handleSuccess} />
      </AuthFormContainer>
    </Layout>
  );
};

export default LoginPage;
