import { useNavigate } from "react-router-dom";
import useFeedback from "../../../hooks/useFeedback";
import CreateSharedCartForm from "../../form/CreateSharedCartForm";
import DialogFrame from "../../utils/DialogFrame";

const CreateSharedCartDialog = () => {
  const navigate = useNavigate();
  const { showSuccess } = useFeedback();

  const handleSuccess = (cartId: string) => {
    showSuccess("Cart created successfully");
    navigate(`/shared-carts/${cartId}`);
  };

  return (
    <DialogFrame title="New shared cart" hasCustomActions>
      <CreateSharedCartForm onSuccess={handleSuccess} />
    </DialogFrame>
  );
};

export default CreateSharedCartDialog;
