import CreateSharedCartForm from "../form/CreateSharedCartForm";
import DialogFrame from "../utils/DialogFrame";

const CreateSharedCartDialog = () => {
  return (
    <DialogFrame title="New shared cart" positiveButtonLabel="Create cart">
      <CreateSharedCartForm />
    </DialogFrame>
  );
};

export default CreateSharedCartDialog;
