import { useDeleteSharedCartItem } from "../../../api";
import { useErrorHandler } from "../../../api/client";
import DialogFrame from "../../utils/DialogFrame";

interface Props {
  cartItemId: string;
}

const DeleteItemConfirmationDialog = (props: Props) => {
  const { mutateAsync: deleteItem } = useDeleteSharedCartItem();
  const { handleError } = useErrorHandler();

  const handleClick = async () => {
    try {
      await deleteItem({ data: { cartItemId: props.cartItemId } });
    } catch (err: any) {
      handleError(err.response);
    } finally {
      return true;
    }
  };

  return (
    <DialogFrame
      title="Are you sure you want to delete this item?"
      positiveButtonLabel="Yes"
      negativeButtonLabel="No"
      positiveButtonColorScheme="red"
      onClick={handleClick}
    />
  );
};

export default DeleteItemConfirmationDialog;
