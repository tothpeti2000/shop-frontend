import { useNavigate } from "react-router-dom";
import RegistrationForm from "../../components/form/RegistrationForm";
import AuthFormContainer from "../../components/form/utils/AuthFormContainer";
import Layout from "../../components/Layout";
import useFeedback from "../../hooks/useFeedback";

const RegistrationPage = () => {
  const { showSuccess } = useFeedback();
  const navigate = useNavigate();

  const handleSuccess = () => {
    showSuccess("Account created successfully");
    navigate("/login", { state: { nextPath: "/" } });
  };

  return (
    <Layout>
      <AuthFormContainer title="Create Account">
        <RegistrationForm onSuccess={handleSuccess} />
      </AuthFormContainer>
    </Layout>
  );
};

export default RegistrationPage;
