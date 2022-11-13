import * as signalR from "@microsoft/signalr";
import { useEffect } from "react";
import useUserCredentials from "./useUserCredentials";

const sharedCartHubUrl = process.env.REACT_APP_SHARED_CART_HUB_URL ?? "";

const useSharedCart = () => {
  const { token } = useUserCredentials();

  const connection = new signalR.HubConnectionBuilder()
    .withUrl(sharedCartHubUrl, {
      accessTokenFactory: () => token ?? "",
    })
    .withAutomaticReconnect()
    .configureLogging(signalR.LogLevel.Debug)
    .build();

  useEffect(() => {
    connection.start();

    return () => {
      connection.stop();
    };
  }, [connection]);

  return { connection };
};

export default useSharedCart;
