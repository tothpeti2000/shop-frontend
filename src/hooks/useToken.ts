import { useState } from "react";

const useToken = () => {
  const [token, setToken] = useState(sessionStorage.getItem("token"));

  const saveToken = (token: string) => {
    sessionStorage.setItem("token", token);
    setToken(token);
  };

  const deleteToken = () => {
    sessionStorage.removeItem("token");
    setToken(null);
  };

  return {
    token,
    saveToken,
    deleteToken,
  };
};

export default useToken;
