import * as signalR from "@microsoft/signalr";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useUserCredentials from "./useUserCredentials";

const sharedCartHubUrl = process.env.REACT_APP_SHARED_CART_HUB_URL ?? "";

const useSharedCart = (sharedCartId?: string) => {
  const { token } = useUserCredentials();
  const navigate = useNavigate();

  const connection = new signalR.HubConnectionBuilder()
    .withUrl(`${sharedCartHubUrl}?shared_cart_id=${sharedCartId}`, {
      accessTokenFactory: () => token ?? "",
    })
    .withAutomaticReconnect()
    .configureLogging(signalR.LogLevel.Debug)
    .build();

  useEffect(() => {
    connection.start();

    connection.on("NotAllowed", () => navigate("/forbidden"));

    return () => {
      connection.stop();
    };
  }, [connection, navigate]);

  return { connection };
};

export default useSharedCart;
