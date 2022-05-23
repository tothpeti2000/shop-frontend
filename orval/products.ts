import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";
import {
  useQuery,
  UseQueryOptions,
  QueryFunction,
  UseQueryResult,
  QueryKey,
} from "react-query";
import type {
  GetApiProductsParams,
  GetApiProductsSearchParams,
  ProblemDetails,
} from "./shop.schemas";

export const getApiProducts = (
  params?: GetApiProductsParams,
  options?: AxiosRequestConfig
): Promise<AxiosResponse<void>> => {
  return axios.get(`/api/Products`, {
    params,
    ...options,
  });
};

export const getGetApiProductsQueryKey = (params?: GetApiProductsParams) => [
  `/api/Products`,
  ...(params ? [params] : []),
];

export type GetApiProductsQueryResult = NonNullable<
  Awaited<ReturnType<typeof getApiProducts>>
>;
export type GetApiProductsQueryError = AxiosError<unknown>;

export const useGetApiProducts = <
  TData = Awaited<ReturnType<typeof getApiProducts>>,
  TError = AxiosError<unknown>
>(
  params?: GetApiProductsParams,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<typeof getApiProducts>>,
      TError,
      TData
    >;
    axios?: AxiosRequestConfig;
  }
): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const { query: queryOptions, axios: axiosOptions } = options ?? {};

  const queryKey = queryOptions?.queryKey ?? getGetApiProductsQueryKey(params);

  const queryFn: QueryFunction<Awaited<ReturnType<typeof getApiProducts>>> = ({
    signal,
  }) => getApiProducts(params, { signal, ...axiosOptions });

  const query = useQuery<
    Awaited<ReturnType<typeof getApiProducts>>,
    TError,
    TData
  >(queryKey, queryFn, queryOptions);

  return {
    queryKey,
    ...query,
  };
};

export const getApiProductsSearch = (
  params?: GetApiProductsSearchParams,
  options?: AxiosRequestConfig
): Promise<AxiosResponse<void>> => {
  return axios.get(`/api/Products/search`, {
    params,
    ...options,
  });
};

export const getGetApiProductsSearchQueryKey = (
  params?: GetApiProductsSearchParams
) => [`/api/Products/search`, ...(params ? [params] : [])];

export type GetApiProductsSearchQueryResult = NonNullable<
  Awaited<ReturnType<typeof getApiProductsSearch>>
>;
export type GetApiProductsSearchQueryError = AxiosError<unknown>;

export const useGetApiProductsSearch = <
  TData = Awaited<ReturnType<typeof getApiProductsSearch>>,
  TError = AxiosError<unknown>
>(
  params?: GetApiProductsSearchParams,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<typeof getApiProductsSearch>>,
      TError,
      TData
    >;
    axios?: AxiosRequestConfig;
  }
): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const { query: queryOptions, axios: axiosOptions } = options ?? {};

  const queryKey =
    queryOptions?.queryKey ?? getGetApiProductsSearchQueryKey(params);

  const queryFn: QueryFunction<
    Awaited<ReturnType<typeof getApiProductsSearch>>
  > = ({ signal }) => getApiProductsSearch(params, { signal, ...axiosOptions });

  const query = useQuery<
    Awaited<ReturnType<typeof getApiProductsSearch>>,
    TError,
    TData
  >(queryKey, queryFn, queryOptions);

  return {
    queryKey,
    ...query,
  };
};

export const getApiProductsId = (
  id: number,
  options?: AxiosRequestConfig
): Promise<AxiosResponse<void>> => {
  return axios.get(`/api/Products/${id}`, options);
};

export const getGetApiProductsIdQueryKey = (id: number) => [
  `/api/Products/${id}`,
];

export type GetApiProductsIdQueryResult = NonNullable<
  Awaited<ReturnType<typeof getApiProductsId>>
>;
export type GetApiProductsIdQueryError = AxiosError<ProblemDetails>;

export const useGetApiProductsId = <
  TData = Awaited<ReturnType<typeof getApiProductsId>>,
  TError = AxiosError<ProblemDetails>
>(
  id: number,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<typeof getApiProductsId>>,
      TError,
      TData
    >;
    axios?: AxiosRequestConfig;
  }
): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const { query: queryOptions, axios: axiosOptions } = options ?? {};

  const queryKey = queryOptions?.queryKey ?? getGetApiProductsIdQueryKey(id);

  const queryFn: QueryFunction<
    Awaited<ReturnType<typeof getApiProductsId>>
  > = ({ signal }) => getApiProductsId(id, { signal, ...axiosOptions });

  const query = useQuery<
    Awaited<ReturnType<typeof getApiProductsId>>,
    TError,
    TData
  >(queryKey, queryFn, { enabled: !!id, ...queryOptions });

  return {
    queryKey,
    ...query,
  };
};

export const getApiProductsMaxprice = (
  options?: AxiosRequestConfig
): Promise<AxiosResponse<void>> => {
  return axios.get(`/api/Products/maxprice`, options);
};

export const getGetApiProductsMaxpriceQueryKey = () => [
  `/api/Products/maxprice`,
];

export type GetApiProductsMaxpriceQueryResult = NonNullable<
  Awaited<ReturnType<typeof getApiProductsMaxprice>>
>;
export type GetApiProductsMaxpriceQueryError = AxiosError<unknown>;

export const useGetApiProductsMaxprice = <
  TData = Awaited<ReturnType<typeof getApiProductsMaxprice>>,
  TError = AxiosError<unknown>
>(options?: {
  query?: UseQueryOptions<
    Awaited<ReturnType<typeof getApiProductsMaxprice>>,
    TError,
    TData
  >;
  axios?: AxiosRequestConfig;
}): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const { query: queryOptions, axios: axiosOptions } = options ?? {};

  const queryKey =
    queryOptions?.queryKey ?? getGetApiProductsMaxpriceQueryKey();

  const queryFn: QueryFunction<
    Awaited<ReturnType<typeof getApiProductsMaxprice>>
  > = ({ signal }) => getApiProductsMaxprice({ signal, ...axiosOptions });

  const query = useQuery<
    Awaited<ReturnType<typeof getApiProductsMaxprice>>,
    TError,
    TData
  >(queryKey, queryFn, queryOptions);

  return {
    queryKey,
    ...query,
  };
};
