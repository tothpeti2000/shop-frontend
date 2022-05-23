import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";
import { useMutation, UseMutationOptions, MutationFunction } from "react-query";
import type { ProblemDetails, User, LoginCredentials } from "./shop.schemas";

export const postApiAuthRegister = (
  user: User,
  options?: AxiosRequestConfig
): Promise<AxiosResponse<void>> => {
  return axios.post(`/api/Auth/register`, user, options);
};

export type PostApiAuthRegisterMutationResult = NonNullable<
  Awaited<ReturnType<typeof postApiAuthRegister>>
>;
export type PostApiAuthRegisterMutationBody = User;
export type PostApiAuthRegisterMutationError = AxiosError<ProblemDetails>;

export const usePostApiAuthRegister = <
  TError = AxiosError<ProblemDetails>,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof postApiAuthRegister>>,
    TError,
    { data: User },
    TContext
  >;
  axios?: AxiosRequestConfig;
}) => {
  const { mutation: mutationOptions, axios: axiosOptions } = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof postApiAuthRegister>>,
    { data: User }
  > = (props) => {
    const { data } = props ?? {};

    return postApiAuthRegister(data, axiosOptions);
  };

  return useMutation<
    Awaited<ReturnType<typeof postApiAuthRegister>>,
    TError,
    { data: User },
    TContext
  >(mutationFn, mutationOptions);
};

export const postApiAuthLogin = (
  loginCredentials: LoginCredentials,
  options?: AxiosRequestConfig
): Promise<AxiosResponse<void>> => {
  return axios.post(`/api/Auth/login`, loginCredentials, options);
};

export type PostApiAuthLoginMutationResult = NonNullable<
  Awaited<ReturnType<typeof postApiAuthLogin>>
>;
export type PostApiAuthLoginMutationBody = LoginCredentials;
export type PostApiAuthLoginMutationError = AxiosError<ProblemDetails>;

export const usePostApiAuthLogin = <
  TError = AxiosError<ProblemDetails>,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof postApiAuthLogin>>,
    TError,
    { data: LoginCredentials },
    TContext
  >;
  axios?: AxiosRequestConfig;
}) => {
  const { mutation: mutationOptions, axios: axiosOptions } = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof postApiAuthLogin>>,
    { data: LoginCredentials }
  > = (props) => {
    const { data } = props ?? {};

    return postApiAuthLogin(data, axiosOptions);
  };

  return useMutation<
    Awaited<ReturnType<typeof postApiAuthLogin>>,
    TError,
    { data: LoginCredentials },
    TContext
  >(mutationFn, mutationOptions);
};
