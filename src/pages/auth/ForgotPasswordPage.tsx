import ForgotPasswordForm from "../../components/form/ForgotPasswordForm";
import AuthFormContainer from "../../components/form/utils/AuthFormContainer";
import Layout from "../../components/Layout";

const ForgotPasswordPage = () => {
  return (
    <Layout>
      <AuthFormContainer title="Reset Password">
        <ForgotPasswordForm />
      </AuthFormContainer>
    </Layout>
  );
};

export default ForgotPasswordPage;
