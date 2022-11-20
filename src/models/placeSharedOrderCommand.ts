/**
 * Generated by orval v6.10.2 🍺
 * Do not edit manually.
 * Shop API
 * OpenAPI spec version: v1
 */
import type { CustomerDetails } from "./customerDetails";
import type { DeliveryDetails } from "./deliveryDetails";
import type { PaymentMethod } from "./paymentMethod";

export interface PlaceSharedOrderCommand {
  sharedCartId?: string;
  customerData?: CustomerDetails;
  deliveryData?: DeliveryDetails;
  paymentMethod?: PaymentMethod;
}
