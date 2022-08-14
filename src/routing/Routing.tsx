import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ConfirmRegistration from "../pages/auth/ConfirmRegistration";
import Home from "../pages/Home";
import Login from "../pages/auth/Login";
import NotFound from "../pages/NotFound";
import ProductDetails from "../pages/products/ProductDetails";
import Products from "../pages/products/Products";
import Register from "../pages/auth/Register";
import AxiosInterceptor from "../api/AxiosInterceptor";

const Routing = () => {
  return (
    <Router>
      <AxiosInterceptor>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />

            <Route path="login" element={<Login />} />

            <Route path="register">
              <Route index element={<Register />} />
              <Route path="confirm" element={<ConfirmRegistration />} />
            </Route>

            <Route path="products">
              <Route index element={<Products />} />
              <Route path=":id" element={<ProductDetails />} />
            </Route>

            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </AxiosInterceptor>
    </Router>
  );
};

export default Routing;
