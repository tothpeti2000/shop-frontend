import { SharedCartStatus } from "../../models";

export const getStatusDisplayName = (status: SharedCartStatus) => {
  switch (status) {
    case SharedCartStatus.Active:
      return "Active";
    case SharedCartStatus.CheckoutInProgress:
      return "In checkout";
    case SharedCartStatus.Completed:
      return "Completed";
  }
};
