import { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useFeedback from "../hooks/useFeedback";
import useToken from "../hooks/useToken";
import { client } from "./client";

const AxiosInterceptor: FC<any> = ({ children }) => {
  const { token } = useToken();
  const { showError } = useFeedback();
  const navigate = useNavigate();

  useEffect(() => {
    const authInterceptor = (req: any) => {
      req.headers.Authorization = `Bearer ${token}`;

      return req;
    };

    const errInterceptor = (res: any) => {
      console.log(res.response);

      if (!res.response) {
        showError("Internal server error", "Please, try again later!");
      }

      return Promise.reject(res);
    };

    const reqInterceptor = client.interceptors.request.use(authInterceptor);
    const resInterceptor = client.interceptors.response.use(
      (res) => res,
      errInterceptor
    );

    return () => {
      client.interceptors.request.eject(reqInterceptor);
      client.interceptors.response.eject(resInterceptor);
    };
  }, [navigate, showError, token]);

  return children;
};

export default AxiosInterceptor;
