import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ConfirmRegistration from "../pages/ConfirmRegistration";
import Home from "../pages/Home";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import ProductDetails from "../pages/ProductDetails";
import Products from "../pages/Products";
import Register from "../pages/Register";

const Routing = () => {
  return (
    <Router>
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
    </Router>
  );
};

export default Routing;
