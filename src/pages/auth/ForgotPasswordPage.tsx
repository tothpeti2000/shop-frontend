import ForgotPasswordForm from "../../components/form/ForgotPasswordForm";
import AuthFormContainer from "../../components/form/utils/AuthFormContainer";
import Layout from "../../components/Layout";
import useFeedback from "../../hooks/useFeedback";

const ForgotPasswordPage = () => {
  const { showSuccess } = useFeedback();

  const handleSuccess = () =>
    showSuccess(
      "We sent you an email with the password reset link. Check your mailbox!"
    );

  return (
    <Layout>
      <AuthFormContainer title="Reset Password">
        <ForgotPasswordForm onSuccess={handleSuccess} />
      </AuthFormContainer>
    </Layout>
  );
};

export default ForgotPasswordPage;
