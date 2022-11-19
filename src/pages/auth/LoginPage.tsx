import LoginForm from "../../components/form/LoginForm";
import AuthFormContainer from "../../components/form/utils/AuthFormContainer";
import Layout from "../../components/Layout";

const LoginPage = () => {
  return (
    <Layout>
      <AuthFormContainer title="Log In">
        <LoginForm />
      </AuthFormContainer>
    </Layout>
  );
};

export default LoginPage;
