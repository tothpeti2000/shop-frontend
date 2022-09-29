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
  GetProductsResponse,
  GetProductsParams,
  GetProductByIdResponse,
  GetPriceRangeResponse,
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
  >(queryKey, queryFn, queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
  };

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
  >(queryKey, queryFn, { enabled: !!id, ...queryOptions }) as UseQueryResult<
    TData,
    TError
  > & { queryKey: QueryKey };

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
  >(queryKey, queryFn, queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
  };

  query.queryKey = queryKey;

  return query;
};
