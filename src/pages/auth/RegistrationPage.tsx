import { useNavigate } from "react-router-dom";
import RegistrationForm from "../../components/form/RegistrationForm";
import AuthFormContainer from "../../components/form/utils/AuthFormContainer";
import Layout from "../../components/common/Layout";
import { useUserContext } from "../../context/UserContext";
import useFeedback from "../../hooks/useFeedback";
import Placeholder from "./Placeholder";

const RegistrationPage = () => {
  const { token } = useUserContext();
  const { showSuccess } = useFeedback();
  const navigate = useNavigate();

  const handleSuccess = () => {
    showSuccess("Account created successfully");
    navigate("/login", { state: { nextPath: "/" } });
  };

  return (
    <Layout>
      {token === null ? (
        <AuthFormContainer title="Create Account">
          <RegistrationForm onSuccess={handleSuccess} />
        </AuthFormContainer>
      ) : (
        <Placeholder />
      )}
    </Layout>
  );
};

export default RegistrationPage;
