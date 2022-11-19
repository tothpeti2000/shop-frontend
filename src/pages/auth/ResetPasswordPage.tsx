import { useSearchParams } from "react-router-dom";
import ResetPasswordForm from "../../components/form/ResetPasswordForm";
import AuthFormContainer from "../../components/form/utils/AuthFormContainer";
import Layout from "../../components/Layout";

const ResetPasswordPage = () => {
  const [searchParams] = useSearchParams();

  const resetToken = searchParams.get("token") ?? "";
  const userId = searchParams.get("id") ?? "";

  return (
    <Layout>
      <AuthFormContainer title="Choose Password">
        <ResetPasswordForm resetToken={resetToken} userId={userId} />
      </AuthFormContainer>
    </Layout>
  );
};

export default ResetPasswordPage;
