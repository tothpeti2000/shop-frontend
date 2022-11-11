/**
 * Generated by orval v6.10.2 🍺
 * Do not edit manually.
 * Shop API
 * OpenAPI spec version: v1
 */
import { useQuery, useMutation } from "react-query";
import type {
  UseQueryOptions,
  UseMutationOptions,
  QueryFunction,
  MutationFunction,
  UseQueryResult,
  QueryKey,
} from "react-query";
import type {
  RegisterUserCommand,
  LoginUserResponse,
  LoginUserRequest,
  AddItemToCartCommand,
  GetCartItemsResponse,
  UpdateCartItemAmountCommand,
  DeleteCartItemCommand,
  GetAllCategoriesResponse,
  GetTopCategoriesResponse,
  PlaceOrderCommand,
  GetProductsResponse,
  GetProductsParams,
  GetProductByIdResponse,
  GetPriceRangeResponse,
  CreateSharedCartResponse,
  CreateSharedCartCommand,
  GetSharedCartsResponse,
  JoinSharedCartResponse,
  JoinSharedCartCommand,
} from "../models";
import { useClient } from "./client";
import type { ErrorType } from "./client";

export const useRegisterUserHook = () => {
  const registerUser = useClient<void>();

  return (registerUserCommand: RegisterUserCommand) => {
    return registerUser({
      url: `/api/Auth/register`,
      method: "post",
      headers: { "Content-Type": "application/json" },
      data: registerUserCommand,
    });
  };
};

export type RegisterUserMutationResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof useRegisterUserHook>>>
>;
export type RegisterUserMutationBody = RegisterUserCommand;
export type RegisterUserMutationError = ErrorType<unknown>;

export const useRegisterUser = <
  TError = ErrorType<unknown>,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<ReturnType<typeof useRegisterUserHook>>>,
    TError,
    { data: RegisterUserCommand },
    TContext
  >;
}) => {
  const { mutation: mutationOptions } = options ?? {};

  const registerUser = useRegisterUserHook();

  const mutationFn: MutationFunction<
    Awaited<ReturnType<ReturnType<typeof useRegisterUserHook>>>,
    { data: RegisterUserCommand }
  > = (props) => {
    const { data } = props ?? {};

    return registerUser(data);
  };

  return useMutation<
    Awaited<ReturnType<typeof registerUser>>,
    TError,
    { data: RegisterUserCommand },
    TContext
  >(mutationFn, mutationOptions);
};

export const useLoginUserHook = () => {
  const loginUser = useClient<LoginUserResponse>();

  return (loginUserRequest: LoginUserRequest) => {
    return loginUser({
      url: `/api/Auth/login`,
      method: "post",
      headers: { "Content-Type": "application/json" },
      data: loginUserRequest,
    });
  };
};

export type LoginUserMutationResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof useLoginUserHook>>>
>;
export type LoginUserMutationBody = LoginUserRequest;
export type LoginUserMutationError = ErrorType<unknown>;

export const useLoginUser = <
  TError = ErrorType<unknown>,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<ReturnType<typeof useLoginUserHook>>>,
    TError,
    { data: LoginUserRequest },
    TContext
  >;
}) => {
  const { mutation: mutationOptions } = options ?? {};

  const loginUser = useLoginUserHook();

  const mutationFn: MutationFunction<
    Awaited<ReturnType<ReturnType<typeof useLoginUserHook>>>,
    { data: LoginUserRequest }
  > = (props) => {
    const { data } = props ?? {};

    return loginUser(data);
  };

  return useMutation<
    Awaited<ReturnType<typeof loginUser>>,
    TError,
    { data: LoginUserRequest },
    TContext
  >(mutationFn, mutationOptions);
};

export const useAddItemToCartHook = () => {
  const addItemToCart = useClient<void>();

  return (addItemToCartCommand: AddItemToCartCommand) => {
    return addItemToCart({
      url: `/api/Carts/add-item`,
      method: "post",
      headers: { "Content-Type": "application/json" },
      data: addItemToCartCommand,
    });
  };
};

export type AddItemToCartMutationResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof useAddItemToCartHook>>>
>;
export type AddItemToCartMutationBody = AddItemToCartCommand;
export type AddItemToCartMutationError = ErrorType<unknown>;

export const useAddItemToCart = <
  TError = ErrorType<unknown>,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<ReturnType<typeof useAddItemToCartHook>>>,
    TError,
    { data: AddItemToCartCommand },
    TContext
  >;
}) => {
  const { mutation: mutationOptions } = options ?? {};

  const addItemToCart = useAddItemToCartHook();

  const mutationFn: MutationFunction<
    Awaited<ReturnType<ReturnType<typeof useAddItemToCartHook>>>,
    { data: AddItemToCartCommand }
  > = (props) => {
    const { data } = props ?? {};

    return addItemToCart(data);
  };

  return useMutation<
    Awaited<ReturnType<typeof addItemToCart>>,
    TError,
    { data: AddItemToCartCommand },
    TContext
  >(mutationFn, mutationOptions);
};

export const useGetCartItemsHook = () => {
  const getCartItems = useClient<GetCartItemsResponse>();

  return (signal?: AbortSignal) => {
    return getCartItems({ url: `/api/Carts/items`, method: "get", signal });
  };
};

export const getGetCartItemsQueryKey = () => [`/api/Carts/items`];

export type GetCartItemsQueryResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof useGetCartItemsHook>>>
>;
export type GetCartItemsQueryError = ErrorType<unknown>;

export const useGetCartItems = <
  TData = Awaited<ReturnType<ReturnType<typeof useGetCartItemsHook>>>,
  TError = ErrorType<unknown>
>(options?: {
  query?: UseQueryOptions<
    Awaited<ReturnType<ReturnType<typeof useGetCartItemsHook>>>,
    TError,
    TData
  >;
}): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const { query: queryOptions } = options ?? {};

  const queryKey = queryOptions?.queryKey ?? getGetCartItemsQueryKey();

  const getCartItems = useGetCartItemsHook();

  const queryFn: QueryFunction<
    Awaited<ReturnType<ReturnType<typeof useGetCartItemsHook>>>
  > = ({ signal }) => getCartItems(signal);

  const query = useQuery<
    Awaited<ReturnType<ReturnType<typeof useGetCartItemsHook>>>,
    TError,
    TData
  >(queryKey, queryFn, {
    refetchOnWindowFocus: false,
    ...queryOptions,
  }) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryKey;

  return query;
};

export const useUpdateCartItemAmountHook = () => {
  const updateCartItemAmount = useClient<void>();

  return (updateCartItemAmountCommand: UpdateCartItemAmountCommand) => {
    return updateCartItemAmount({
      url: `/api/Carts/update-item`,
      method: "put",
      headers: { "Content-Type": "application/json" },
      data: updateCartItemAmountCommand,
    });
  };
};

export type UpdateCartItemAmountMutationResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof useUpdateCartItemAmountHook>>>
>;
export type UpdateCartItemAmountMutationBody = UpdateCartItemAmountCommand;
export type UpdateCartItemAmountMutationError = ErrorType<unknown>;

export const useUpdateCartItemAmount = <
  TError = ErrorType<unknown>,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<ReturnType<typeof useUpdateCartItemAmountHook>>>,
    TError,
    { data: UpdateCartItemAmountCommand },
    TContext
  >;
}) => {
  const { mutation: mutationOptions } = options ?? {};

  const updateCartItemAmount = useUpdateCartItemAmountHook();

  const mutationFn: MutationFunction<
    Awaited<ReturnType<ReturnType<typeof useUpdateCartItemAmountHook>>>,
    { data: UpdateCartItemAmountCommand }
  > = (props) => {
    const { data } = props ?? {};

    return updateCartItemAmount(data);
  };

  return useMutation<
    Awaited<ReturnType<typeof updateCartItemAmount>>,
    TError,
    { data: UpdateCartItemAmountCommand },
    TContext
  >(mutationFn, mutationOptions);
};

export const useDeleteCartItemHook = () => {
  const deleteCartItem = useClient<void>();

  return (deleteCartItemCommand: DeleteCartItemCommand) => {
    return deleteCartItem({
      url: `/api/Carts/delete-item`,
      method: "put",
      headers: { "Content-Type": "application/json" },
      data: deleteCartItemCommand,
    });
  };
};

export type DeleteCartItemMutationResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof useDeleteCartItemHook>>>
>;
export type DeleteCartItemMutationBody = DeleteCartItemCommand;
export type DeleteCartItemMutationError = ErrorType<unknown>;

export const useDeleteCartItem = <
  TError = ErrorType<unknown>,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<ReturnType<typeof useDeleteCartItemHook>>>,
    TError,
    { data: DeleteCartItemCommand },
    TContext
  >;
}) => {
  const { mutation: mutationOptions } = options ?? {};

  const deleteCartItem = useDeleteCartItemHook();

  const mutationFn: MutationFunction<
    Awaited<ReturnType<ReturnType<typeof useDeleteCartItemHook>>>,
    { data: DeleteCartItemCommand }
  > = (props) => {
    const { data } = props ?? {};

    return deleteCartItem(data);
  };

  return useMutation<
    Awaited<ReturnType<typeof deleteCartItem>>,
    TError,
    { data: DeleteCartItemCommand },
    TContext
  >(mutationFn, mutationOptions);
};

export const useClearCartHook = () => {
  const clearCart = useClient<void>();

  return () => {
    return clearCart({ url: `/api/Carts/clear`, method: "put" });
  };
};

export type ClearCartMutationResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof useClearCartHook>>>
>;

export type ClearCartMutationError = ErrorType<unknown>;

export const useClearCart = <
  TError = ErrorType<unknown>,
  TVariables = void,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<ReturnType<typeof useClearCartHook>>>,
    TError,
    TVariables,
    TContext
  >;
}) => {
  const { mutation: mutationOptions } = options ?? {};

  const clearCart = useClearCartHook();

  const mutationFn: MutationFunction<
    Awaited<ReturnType<ReturnType<typeof useClearCartHook>>>,
    TVariables
  > = () => {
    return clearCart();
  };

  return useMutation<
    Awaited<ReturnType<typeof clearCart>>,
    TError,
    TVariables,
    TContext
  >(mutationFn, mutationOptions);
};

export const useGetAllCategoriesHook = () => {
  const getAllCategories = useClient<GetAllCategoriesResponse>();

  return (signal?: AbortSignal) => {
    return getAllCategories({ url: `/api/Categories`, method: "get", signal });
  };
};

export const getGetAllCategoriesQueryKey = () => [`/api/Categories`];

export type GetAllCategoriesQueryResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof useGetAllCategoriesHook>>>
>;
export type GetAllCategoriesQueryError = ErrorType<unknown>;

export const useGetAllCategories = <
  TData = Awaited<ReturnType<ReturnType<typeof useGetAllCategoriesHook>>>,
  TError = ErrorType<unknown>
>(options?: {
  query?: UseQueryOptions<
    Awaited<ReturnType<ReturnType<typeof useGetAllCategoriesHook>>>,
    TError,
    TData
  >;
}): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const { query: queryOptions } = options ?? {};

  const queryKey = queryOptions?.queryKey ?? getGetAllCategoriesQueryKey();

  const getAllCategories = useGetAllCategoriesHook();

  const queryFn: QueryFunction<
    Awaited<ReturnType<ReturnType<typeof useGetAllCategoriesHook>>>
  > = ({ signal }) => getAllCategories(signal);

  const query = useQuery<
    Awaited<ReturnType<ReturnType<typeof useGetAllCategoriesHook>>>,
    TError,
    TData
  >(queryKey, queryFn, {
    refetchOnWindowFocus: false,
    ...queryOptions,
  }) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryKey;

  return query;
};

export const useGetTopCategoriesHook = () => {
  const getTopCategories = useClient<GetTopCategoriesResponse>();

  return (signal?: AbortSignal) => {
    return getTopCategories({
      url: `/api/Categories/top`,
      method: "get",
      signal,
    });
  };
};

export const getGetTopCategoriesQueryKey = () => [`/api/Categories/top`];

export type GetTopCategoriesQueryResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof useGetTopCategoriesHook>>>
>;
export type GetTopCategoriesQueryError = ErrorType<unknown>;

export const useGetTopCategories = <
  TData = Awaited<ReturnType<ReturnType<typeof useGetTopCategoriesHook>>>,
  TError = ErrorType<unknown>
>(options?: {
  query?: UseQueryOptions<
    Awaited<ReturnType<ReturnType<typeof useGetTopCategoriesHook>>>,
    TError,
    TData
  >;
}): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const { query: queryOptions } = options ?? {};

  const queryKey = queryOptions?.queryKey ?? getGetTopCategoriesQueryKey();

  const getTopCategories = useGetTopCategoriesHook();

  const queryFn: QueryFunction<
    Awaited<ReturnType<ReturnType<typeof useGetTopCategoriesHook>>>
  > = ({ signal }) => getTopCategories(signal);

  const query = useQuery<
    Awaited<ReturnType<ReturnType<typeof useGetTopCategoriesHook>>>,
    TError,
    TData
  >(queryKey, queryFn, {
    refetchOnWindowFocus: false,
    ...queryOptions,
  }) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryKey;

  return query;
};

export const usePlaceOrderHook = () => {
  const placeOrder = useClient<void>();

  return (placeOrderCommand: PlaceOrderCommand) => {
    return placeOrder({
      url: `/api/Orders`,
      method: "post",
      headers: { "Content-Type": "application/json" },
      data: placeOrderCommand,
    });
  };
};

export type PlaceOrderMutationResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof usePlaceOrderHook>>>
>;
export type PlaceOrderMutationBody = PlaceOrderCommand;
export type PlaceOrderMutationError = ErrorType<unknown>;

export const usePlaceOrder = <
  TError = ErrorType<unknown>,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<ReturnType<typeof usePlaceOrderHook>>>,
    TError,
    { data: PlaceOrderCommand },
    TContext
  >;
}) => {
  const { mutation: mutationOptions } = options ?? {};

  const placeOrder = usePlaceOrderHook();

  const mutationFn: MutationFunction<
    Awaited<ReturnType<ReturnType<typeof usePlaceOrderHook>>>,
    { data: PlaceOrderCommand }
  > = (props) => {
    const { data } = props ?? {};

    return placeOrder(data);
  };

  return useMutation<
    Awaited<ReturnType<typeof placeOrder>>,
    TError,
    { data: PlaceOrderCommand },
    TContext
  >(mutationFn, mutationOptions);
};

export const useGetProductsHook = () => {
  const getProducts = useClient<GetProductsResponse>();

  return (params?: GetProductsParams, signal?: AbortSignal) => {
    return getProducts({ url: `/api/Products`, method: "get", params, signal });
  };
};

export const getGetProductsQueryKey = (params?: GetProductsParams) => [
  `/api/Products`,
  ...(params ? [params] : []),
];

export type GetProductsQueryResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof useGetProductsHook>>>
>;
export type GetProductsQueryError = ErrorType<unknown>;

export const useGetProducts = <
  TData = Awaited<ReturnType<ReturnType<typeof useGetProductsHook>>>,
  TError = ErrorType<unknown>
>(
  params?: GetProductsParams,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<ReturnType<typeof useGetProductsHook>>>,
      TError,
      TData
    >;
  }
): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const { query: queryOptions } = options ?? {};

  const queryKey = queryOptions?.queryKey ?? getGetProductsQueryKey(params);

  const getProducts = useGetProductsHook();

  const queryFn: QueryFunction<
    Awaited<ReturnType<ReturnType<typeof useGetProductsHook>>>
  > = ({ signal }) => getProducts(params, signal);

  const query = useQuery<
    Awaited<ReturnType<ReturnType<typeof useGetProductsHook>>>,
    TError,
    TData
  >(queryKey, queryFn, {
    refetchOnWindowFocus: false,
    ...queryOptions,
  }) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryKey;

  return query;
};

export const useGetProductByIdHook = () => {
  const getProductById = useClient<GetProductByIdResponse>();

  return (id: string, signal?: AbortSignal) => {
    return getProductById({
      url: `/api/Products/${id}`,
      method: "get",
      signal,
    });
  };
};

export const getGetProductByIdQueryKey = (id: string) => [
  `/api/Products/${id}`,
];

export type GetProductByIdQueryResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof useGetProductByIdHook>>>
>;
export type GetProductByIdQueryError = ErrorType<unknown>;

export const useGetProductById = <
  TData = Awaited<ReturnType<ReturnType<typeof useGetProductByIdHook>>>,
  TError = ErrorType<unknown>
>(
  id: string,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<ReturnType<typeof useGetProductByIdHook>>>,
      TError,
      TData
    >;
  }
): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const { query: queryOptions } = options ?? {};

  const queryKey = queryOptions?.queryKey ?? getGetProductByIdQueryKey(id);

  const getProductById = useGetProductByIdHook();

  const queryFn: QueryFunction<
    Awaited<ReturnType<ReturnType<typeof useGetProductByIdHook>>>
  > = ({ signal }) => getProductById(id, signal);

  const query = useQuery<
    Awaited<ReturnType<ReturnType<typeof useGetProductByIdHook>>>,
    TError,
    TData
  >(queryKey, queryFn, {
    enabled: !!id,
    refetchOnWindowFocus: false,
    ...queryOptions,
  }) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryKey;

  return query;
};

export const useGetPriceRangeHook = () => {
  const getPriceRange = useClient<GetPriceRangeResponse>();

  return (signal?: AbortSignal) => {
    return getPriceRange({
      url: `/api/Products/price-range`,
      method: "get",
      signal,
    });
  };
};

export const getGetPriceRangeQueryKey = () => [`/api/Products/price-range`];

export type GetPriceRangeQueryResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof useGetPriceRangeHook>>>
>;
export type GetPriceRangeQueryError = ErrorType<unknown>;

export const useGetPriceRange = <
  TData = Awaited<ReturnType<ReturnType<typeof useGetPriceRangeHook>>>,
  TError = ErrorType<unknown>
>(options?: {
  query?: UseQueryOptions<
    Awaited<ReturnType<ReturnType<typeof useGetPriceRangeHook>>>,
    TError,
    TData
  >;
}): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const { query: queryOptions } = options ?? {};

  const queryKey = queryOptions?.queryKey ?? getGetPriceRangeQueryKey();

  const getPriceRange = useGetPriceRangeHook();

  const queryFn: QueryFunction<
    Awaited<ReturnType<ReturnType<typeof useGetPriceRangeHook>>>
  > = ({ signal }) => getPriceRange(signal);

  const query = useQuery<
    Awaited<ReturnType<ReturnType<typeof useGetPriceRangeHook>>>,
    TError,
    TData
  >(queryKey, queryFn, {
    refetchOnWindowFocus: false,
    ...queryOptions,
  }) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryKey;

  return query;
};

export const useCreateSharedCartHook = () => {
  const createSharedCart = useClient<CreateSharedCartResponse>();

  return (createSharedCartCommand: CreateSharedCartCommand) => {
    return createSharedCart({
      url: `/api/SharedCarts`,
      method: "post",
      headers: { "Content-Type": "application/json" },
      data: createSharedCartCommand,
    });
  };
};

export type CreateSharedCartMutationResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof useCreateSharedCartHook>>>
>;
export type CreateSharedCartMutationBody = CreateSharedCartCommand;
export type CreateSharedCartMutationError = ErrorType<unknown>;

export const useCreateSharedCart = <
  TError = ErrorType<unknown>,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<ReturnType<typeof useCreateSharedCartHook>>>,
    TError,
    { data: CreateSharedCartCommand },
    TContext
  >;
}) => {
  const { mutation: mutationOptions } = options ?? {};

  const createSharedCart = useCreateSharedCartHook();

  const mutationFn: MutationFunction<
    Awaited<ReturnType<ReturnType<typeof useCreateSharedCartHook>>>,
    { data: CreateSharedCartCommand }
  > = (props) => {
    const { data } = props ?? {};

    return createSharedCart(data);
  };

  return useMutation<
    Awaited<ReturnType<typeof createSharedCart>>,
    TError,
    { data: CreateSharedCartCommand },
    TContext
  >(mutationFn, mutationOptions);
};

export const useGetSharedCartsHook = () => {
  const getSharedCarts = useClient<GetSharedCartsResponse>();

  return (signal?: AbortSignal) => {
    return getSharedCarts({ url: `/api/SharedCarts`, method: "get", signal });
  };
};

export const getGetSharedCartsQueryKey = () => [`/api/SharedCarts`];

export type GetSharedCartsQueryResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof useGetSharedCartsHook>>>
>;
export type GetSharedCartsQueryError = ErrorType<unknown>;

export const useGetSharedCarts = <
  TData = Awaited<ReturnType<ReturnType<typeof useGetSharedCartsHook>>>,
  TError = ErrorType<unknown>
>(options?: {
  query?: UseQueryOptions<
    Awaited<ReturnType<ReturnType<typeof useGetSharedCartsHook>>>,
    TError,
    TData
  >;
}): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const { query: queryOptions } = options ?? {};

  const queryKey = queryOptions?.queryKey ?? getGetSharedCartsQueryKey();

  const getSharedCarts = useGetSharedCartsHook();

  const queryFn: QueryFunction<
    Awaited<ReturnType<ReturnType<typeof useGetSharedCartsHook>>>
  > = ({ signal }) => getSharedCarts(signal);

  const query = useQuery<
    Awaited<ReturnType<ReturnType<typeof useGetSharedCartsHook>>>,
    TError,
    TData
  >(queryKey, queryFn, {
    refetchOnWindowFocus: false,
    ...queryOptions,
  }) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryKey;

  return query;
};

export const useJoinSharedCartHook = () => {
  const joinSharedCart = useClient<JoinSharedCartResponse>();

  return (joinSharedCartCommand: JoinSharedCartCommand) => {
    return joinSharedCart({
      url: `/api/SharedCarts/join`,
      method: "post",
      headers: { "Content-Type": "application/json" },
      data: joinSharedCartCommand,
    });
  };
};

export type JoinSharedCartMutationResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof useJoinSharedCartHook>>>
>;
export type JoinSharedCartMutationBody = JoinSharedCartCommand;
export type JoinSharedCartMutationError = ErrorType<unknown>;

export const useJoinSharedCart = <
  TError = ErrorType<unknown>,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<ReturnType<typeof useJoinSharedCartHook>>>,
    TError,
    { data: JoinSharedCartCommand },
    TContext
  >;
}) => {
  const { mutation: mutationOptions } = options ?? {};

  const joinSharedCart = useJoinSharedCartHook();

  const mutationFn: MutationFunction<
    Awaited<ReturnType<ReturnType<typeof useJoinSharedCartHook>>>,
    { data: JoinSharedCartCommand }
  > = (props) => {
    const { data } = props ?? {};

    return joinSharedCart(data);
  };

  return useMutation<
    Awaited<ReturnType<typeof joinSharedCart>>,
    TError,
    { data: JoinSharedCartCommand },
    TContext
  >(mutationFn, mutationOptions);
};
