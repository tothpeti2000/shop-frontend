import { ChakraProvider, ColorModeScript, theme } from "@chakra-ui/react";
import * as React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { App } from "./App";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Products from "./pages/Products";
import Register from "./pages/Register";
import reportWebVitals from "./reportWebVitals";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <ColorModeScript />
    <ChakraProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="" element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="products" element={<Products />} />
            <Route path="products/:id" element={<ProductDetails />} />

            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Router>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorker.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
