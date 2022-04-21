import FormContainer from "../components/Auth/FormContainer";
import RegisterForm from "../components/Auth/RegisterForm";
import { Logo } from "../Logo";

const Register = () => {
  return (
    <FormContainer>
      <Logo boxSize={"20"} mx={"auto"} mb={5} />
      <RegisterForm />
    </FormContainer>
  );
};

export default Register;
