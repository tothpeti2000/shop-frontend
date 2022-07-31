import axios from "axios";
import useToken from "../useToken";

const useAPI = () => {
  const { token } = useToken();

  axios.defaults.headers.common = {
    Authorization: `Bearer ${token}`,
  };

  const client = axios.create({
    baseURL: "https://localhost:7202/api",
  });

  return client;
};

export default useAPI;
