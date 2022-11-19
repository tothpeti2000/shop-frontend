import RegistrationForm from "../../components/form/RegistrationForm";
import AuthFormContainer from "../../components/form/utils/AuthFormContainer";
import Layout from "../../components/Layout";

const RegistrationPage = () => {
  return (
    <Layout>
      <AuthFormContainer title="Create Account">
        <RegistrationForm />
      </AuthFormContainer>
    </Layout>
  );
};

export default RegistrationPage;
