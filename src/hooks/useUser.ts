import useToken from "./useToken";

const useUser = () => {
  const { token, deleteToken } = useToken();

  const isLoggedIn = () => {
    return token !== null;
  };

  const logout = () => {
    deleteToken();
  };

  return {
    isLoggedIn,
    logout,
  };
};

export default useUser;
