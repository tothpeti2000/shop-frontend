import { useNavigate, useSearchParams } from "react-router-dom";
import ResetPasswordForm from "../../components/form/ResetPasswordForm";
import AuthFormContainer from "../../components/form/utils/AuthFormContainer";
import Layout from "../../components/Layout";
import useFeedback from "../../hooks/useFeedback";

const ResetPasswordPage = () => {
  const [searchParams] = useSearchParams();
  const { showSuccess } = useFeedback();
  const navigate = useNavigate();

  const resetToken = searchParams.get("token") ?? "";
  const userId = searchParams.get("id") ?? "";

  const handleSuccess = () => {
    showSuccess("Password updated successfully");
    navigate("/login", { state: { nextPath: "/" } });
  };

  return (
    <Layout>
      <AuthFormContainer title="Choose Password">
        <ResetPasswordForm
          resetToken={resetToken}
          userId={userId}
          onSuccess={handleSuccess}
        />
      </AuthFormContainer>
    </Layout>
  );
};

export default ResetPasswordPage;
