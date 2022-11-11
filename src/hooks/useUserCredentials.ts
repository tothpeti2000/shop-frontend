import useSessionStorage from "./useSessionStorage";

const useUserCredentials = () => {
  const {
    storageItem: token,
    saveItem: saveToken,
    deleteItem: deleteToken,
  } = useSessionStorage("token");

  const {
    storageItem: name,
    saveItem: saveName,
    deleteItem: deleteName,
  } = useSessionStorage("name");

  return {
    token,
    saveToken,
    deleteToken,
    name,
    saveName,
    deleteName,
  };
};

export default useUserCredentials;
