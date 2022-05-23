import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";
import {
  useQuery,
  useMutation,
  UseQueryOptions,
  UseMutationOptions,
  QueryFunction,
  MutationFunction,
  UseQueryResult,
  QueryKey,
} from "react-query";
import type {
  CartItemToAdd,
  GetApiCartsUpdateCartItemIDParams,
} from "./shop.schemas";

export const postApiCartsAdd = (
  cartItemToAdd: CartItemToAdd,
  options?: AxiosRequestConfig
): Promise<AxiosResponse<void>> => {
  return axios.post(`/api/Carts/add`, cartItemToAdd, options);
};

export type PostApiCartsAddMutationResult = NonNullable<
  Awaited<ReturnType<typeof postApiCartsAdd>>
>;
export type PostApiCartsAddMutationBody = CartItemToAdd;
export type PostApiCartsAddMutationError = AxiosError<unknown>;

export const usePostApiCartsAdd = <
  TError = AxiosError<unknown>,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof postApiCartsAdd>>,
    TError,
    { data: CartItemToAdd },
    TContext
  >;
  axios?: AxiosRequestConfig;
}) => {
  const { mutation: mutationOptions, axios: axiosOptions } = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof postApiCartsAdd>>,
    { data: CartItemToAdd }
  > = (props) => {
    const { data } = props ?? {};

    return postApiCartsAdd(data, axiosOptions);
  };

  return useMutation<
    Awaited<ReturnType<typeof postApiCartsAdd>>,
    TError,
    { data: CartItemToAdd },
    TContext
  >(mutationFn, mutationOptions);
};
export const getApiCartsList = (
  options?: AxiosRequestConfig
): Promise<AxiosResponse<void>> => {
  return axios.get(`/api/Carts/list`, options);
};

export const getGetApiCartsListQueryKey = () => [`/api/Carts/list`];

export type GetApiCartsListQueryResult = NonNullable<
  Awaited<ReturnType<typeof getApiCartsList>>
>;
export type GetApiCartsListQueryError = AxiosError<unknown>;

export const useGetApiCartsList = <
  TData = Awaited<ReturnType<typeof getApiCartsList>>,
  TError = AxiosError<unknown>
>(options?: {
  query?: UseQueryOptions<
    Awaited<ReturnType<typeof getApiCartsList>>,
    TError,
    TData
  >;
  axios?: AxiosRequestConfig;
}): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const { query: queryOptions, axios: axiosOptions } = options ?? {};

  const queryKey = queryOptions?.queryKey ?? getGetApiCartsListQueryKey();

  const queryFn: QueryFunction<Awaited<ReturnType<typeof getApiCartsList>>> = ({
    signal,
  }) => getApiCartsList({ signal, ...axiosOptions });

  const query = useQuery<
    Awaited<ReturnType<typeof getApiCartsList>>,
    TError,
    TData
  >(queryKey, queryFn, queryOptions);

  return {
    queryKey,
    ...query,
  };
};

export const getApiCartsUpdateCartItemID = (
  cartItemID: number,
  params?: GetApiCartsUpdateCartItemIDParams,
  options?: AxiosRequestConfig
): Promise<AxiosResponse<void>> => {
  return axios.get(`/api/Carts/update/${cartItemID}`, {
    params,
    ...options,
  });
};

export const getGetApiCartsUpdateCartItemIDQueryKey = (
  cartItemID: number,
  params?: GetApiCartsUpdateCartItemIDParams
) => [`/api/Carts/update/${cartItemID}`, ...(params ? [params] : [])];

export type GetApiCartsUpdateCartItemIDQueryResult = NonNullable<
  Awaited<ReturnType<typeof getApiCartsUpdateCartItemID>>
>;
export type GetApiCartsUpdateCartItemIDQueryError = AxiosError<unknown>;

export const useGetApiCartsUpdateCartItemID = <
  TData = Awaited<ReturnType<typeof getApiCartsUpdateCartItemID>>,
  TError = AxiosError<unknown>
>(
  cartItemID: number,
  params?: GetApiCartsUpdateCartItemIDParams,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<typeof getApiCartsUpdateCartItemID>>,
      TError,
      TData
    >;
    axios?: AxiosRequestConfig;
  }
): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const { query: queryOptions, axios: axiosOptions } = options ?? {};

  const queryKey =
    queryOptions?.queryKey ??
    getGetApiCartsUpdateCartItemIDQueryKey(cartItemID, params);

  const queryFn: QueryFunction<
    Awaited<ReturnType<typeof getApiCartsUpdateCartItemID>>
  > = ({ signal }) =>
    getApiCartsUpdateCartItemID(cartItemID, params, {
      signal,
      ...axiosOptions,
    });

  const query = useQuery<
    Awaited<ReturnType<typeof getApiCartsUpdateCartItemID>>,
    TError,
    TData
  >(queryKey, queryFn, { enabled: !!cartItemID, ...queryOptions });

  return {
    queryKey,
    ...query,
  };
};

export const getApiCartsDeleteCartItemID = (
  cartItemID: number,
  options?: AxiosRequestConfig
): Promise<AxiosResponse<void>> => {
  return axios.get(`/api/Carts/delete/${cartItemID}`, options);
};

export const getGetApiCartsDeleteCartItemIDQueryKey = (cartItemID: number) => [
  `/api/Carts/delete/${cartItemID}`,
];

export type GetApiCartsDeleteCartItemIDQueryResult = NonNullable<
  Awaited<ReturnType<typeof getApiCartsDeleteCartItemID>>
>;
export type GetApiCartsDeleteCartItemIDQueryError = AxiosError<unknown>;

export const useGetApiCartsDeleteCartItemID = <
  TData = Awaited<ReturnType<typeof getApiCartsDeleteCartItemID>>,
  TError = AxiosError<unknown>
>(
  cartItemID: number,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<typeof getApiCartsDeleteCartItemID>>,
      TError,
      TData
    >;
    axios?: AxiosRequestConfig;
  }
): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const { query: queryOptions, axios: axiosOptions } = options ?? {};

  const queryKey =
    queryOptions?.queryKey ??
    getGetApiCartsDeleteCartItemIDQueryKey(cartItemID);

  const queryFn: QueryFunction<
    Awaited<ReturnType<typeof getApiCartsDeleteCartItemID>>
  > = ({ signal }) =>
    getApiCartsDeleteCartItemID(cartItemID, { signal, ...axiosOptions });

  const query = useQuery<
    Awaited<ReturnType<typeof getApiCartsDeleteCartItemID>>,
    TError,
    TData
  >(queryKey, queryFn, { enabled: !!cartItemID, ...queryOptions });

  return {
    queryKey,
    ...query,
  };
};
