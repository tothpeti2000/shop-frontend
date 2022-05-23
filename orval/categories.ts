import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";
import {
  useQuery,
  UseQueryOptions,
  QueryFunction,
  UseQueryResult,
  QueryKey,
} from "react-query";

export const getApiCategoriesTop = (
  options?: AxiosRequestConfig
): Promise<AxiosResponse<void>> => {
  return axios.get(`/api/Categories/top`, options);
};

export const getGetApiCategoriesTopQueryKey = () => [`/api/Categories/top`];

export type GetApiCategoriesTopQueryResult = NonNullable<
  Awaited<ReturnType<typeof getApiCategoriesTop>>
>;
export type GetApiCategoriesTopQueryError = AxiosError<unknown>;

export const useGetApiCategoriesTop = <
  TData = Awaited<ReturnType<typeof getApiCategoriesTop>>,
  TError = AxiosError<unknown>
>(options?: {
  query?: UseQueryOptions<
    Awaited<ReturnType<typeof getApiCategoriesTop>>,
    TError,
    TData
  >;
  axios?: AxiosRequestConfig;
}): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const { query: queryOptions, axios: axiosOptions } = options ?? {};

  const queryKey = queryOptions?.queryKey ?? getGetApiCategoriesTopQueryKey();

  const queryFn: QueryFunction<
    Awaited<ReturnType<typeof getApiCategoriesTop>>
  > = ({ signal }) => getApiCategoriesTop({ signal, ...axiosOptions });

  const query = useQuery<
    Awaited<ReturnType<typeof getApiCategoriesTop>>,
    TError,
    TData
  >(queryKey, queryFn, queryOptions);

  return {
    queryKey,
    ...query,
  };
};

export const getApiCategories = (
  options?: AxiosRequestConfig
): Promise<AxiosResponse<void>> => {
  return axios.get(`/api/Categories`, options);
};

export const getGetApiCategoriesQueryKey = () => [`/api/Categories`];

export type GetApiCategoriesQueryResult = NonNullable<
  Awaited<ReturnType<typeof getApiCategories>>
>;
export type GetApiCategoriesQueryError = AxiosError<unknown>;

export const useGetApiCategories = <
  TData = Awaited<ReturnType<typeof getApiCategories>>,
  TError = AxiosError<unknown>
>(options?: {
  query?: UseQueryOptions<
    Awaited<ReturnType<typeof getApiCategories>>,
    TError,
    TData
  >;
  axios?: AxiosRequestConfig;
}): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const { query: queryOptions, axios: axiosOptions } = options ?? {};

  const queryKey = queryOptions?.queryKey ?? getGetApiCategoriesQueryKey();

  const queryFn: QueryFunction<
    Awaited<ReturnType<typeof getApiCategories>>
  > = ({ signal }) => getApiCategories({ signal, ...axiosOptions });

  const query = useQuery<
    Awaited<ReturnType<typeof getApiCategories>>,
    TError,
    TData
  >(queryKey, queryFn, queryOptions);

  return {
    queryKey,
    ...query,
  };
};
