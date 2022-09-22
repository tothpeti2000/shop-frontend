import axios, { AxiosError, AxiosRequestConfig } from "axios";
import useToken from "../hooks/useToken";

export const AXIOS_INSTANCE = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

export const useClient = <T>(): ((
  config: AxiosRequestConfig
) => Promise<T>) => {
  const token = useToken();

  return (config: AxiosRequestConfig) => {
    const promise = AXIOS_INSTANCE({
      ...config,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then(({ data }) => data);

    return promise;
  };
};

export default useClient;

export type ErrorType<Error> = AxiosError<Error>;
