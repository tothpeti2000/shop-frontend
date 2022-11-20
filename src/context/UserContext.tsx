import { createContext, FC, useContext } from "react";
import useUserCredentials from "../hooks/useUserCredentials";

const useUserContextValue = () => {
  const { token, saveToken, deleteToken } = useUserCredentials();
  const { name, saveName, deleteName } = useUserCredentials();

  const saveUserData = (token: string, name: string) => {
    saveToken(token);
    saveName(name);
  };

  const logout = () => {
    deleteToken();
    deleteName();
  };

  return {
    token,
    name,
    saveUserData,
    logout,
  };
};

const UserContext = createContext({} as ReturnType<typeof useUserContextValue>);

const UserProvider: FC = ({ children }) => {
  return (
    <UserContext.Provider value={useUserContextValue()}>
      {children}
    </UserContext.Provider>
  );
};

const useUserContext = () => useContext(UserContext);

export { UserProvider, useUserContext };
