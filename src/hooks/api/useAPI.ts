import axios from "axios";
import useToken from "../useToken";

const useAPI = () => {
  const { token } = useToken();

  axios.defaults.headers.common = {
    Authorization: `Bearer ${token}`,
  };

  const client = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL,
  });

  return client;
};

export default useAPI;
