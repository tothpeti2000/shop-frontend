const useToken = () => {
  const token = sessionStorage.getItem("token") ?? "";

  const saveToken = (token: string) => {
    sessionStorage.setItem("token", token);
  };

  const deleteToken = () => {
    sessionStorage.removeItem("token");
  };

  return {
    token,
    saveToken,
    deleteToken,
  };
};

export default useToken;
