import CreateSharedCartForm from "../form/CreateSharedCartForm";
import DialogFrame from "../utils/DialogFrame";

const CreateSharedCartDialog = () => {
  return (
    <DialogFrame title="New shared cart" hasCustomActions>
      <CreateSharedCartForm />
    </DialogFrame>
  );
};

export default CreateSharedCartDialog;
