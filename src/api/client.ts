import axios, { AxiosError, AxiosRequestConfig } from "axios";
import qs from "qs";
import { useNavigate } from "react-router-dom";
import useFeedback from "../hooks/useFeedback";
import useToken from "../hooks/useToken";

const AXIOS_INSTANCE = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

export const useClient = <T>(): ((
  config: AxiosRequestConfig
) => Promise<T>) => {
  const { token } = useToken();

  return (config: AxiosRequestConfig) => {
    const promise = AXIOS_INSTANCE({
      ...config,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      // Without this, the array items in a query string would be in an array[]=...&array[]=...&array[]=... format and the backend wouldn't parse the query string correctly
      paramsSerializer: (params) =>
        qs.stringify(params, { arrayFormat: "repeat" }),
    }).then(({ data }) => data);

    return promise;
  };
};

export const useErrorHandler = () => {
  const navigate = useNavigate();
  const { showError } = useFeedback();

  const handleError = (response?: any) => {
    if (!response) {
      showError(
        "Network error",
        "An unexpeted network error occurred. Please, try again later!"
      );
      return;
    }

    if (response.status >= 500) {
      showError(
        "Internal server error",
        "An unknown server error occurred. Please, try again later!"
      );
      return;
    }

    if (response.status === 401) {
      showError(
        "Operation not allowed",
        "You must log in before you try again"
      );

      navigate("/login");
      return;
    }

    if (response.status >= 400) {
      showError("Operation failed", response.data.detail);
      return;
    }
  };

  return { handleError };
};

export default useClient;

export type ErrorType<Error> = AxiosError<Error>;
