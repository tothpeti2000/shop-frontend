export type GetApiProductsSearchParams = {
  q?: string;
  Page?: number;
  Limit?: number;
  Sort?: string;
  Filter?: string;
};

export type GetApiProductsParams = {
  Page?: number;
  Limit?: number;
  Sort?: string;
  Filter?: string;
};

export type GetApiCartsUpdateCartItemIDParams = { amount?: number };

export interface User {
  userName: string;
  email: string;
  password: string;
}

export interface ProblemDetails {
  type?: string | null;
  title?: string | null;
  status?: number | null;
  detail?: string | null;
  instance?: string | null;
  [key: string]: unknown;
}

export interface LoginCredentials {
  userName: string;
  password: string;
}

export interface CartItemToAdd {
  productID?: number;
  amount?: number;
}
