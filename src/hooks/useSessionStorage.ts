import { useState } from "react";

const useSessionStorage = (itemName: string) => {
  const [storageItem, setStorageItem] = useState(
    sessionStorage.getItem(itemName)
  );

  const saveItem = (itemValue: any) => {
    sessionStorage.setItem(itemName, itemValue);
    setStorageItem(itemValue);
  };

  const deleteItem = () => {
    sessionStorage.removeItem(itemName);
    setStorageItem(null);
  };

  return {
    storageItem,
    saveItem,
    deleteItem,
  };
};

export default useSessionStorage;
