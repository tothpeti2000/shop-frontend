import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import * as React from "react";
import ReactDOM from "react-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { App } from "./App";
import { CartProvider } from "./context/CartContext";
import { SharedCartProvider } from "./context/SharedCartContext";
import { UserProvider } from "./context/UserContext";
import { theme } from "./styles/chakra-theme";

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <ColorModeScript />
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <UserProvider>
          <CartProvider>
            <SharedCartProvider>
              <App />
            </SharedCartProvider>
          </CartProvider>
        </UserProvider>
      </QueryClientProvider>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
