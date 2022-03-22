import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { App } from "./App";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import ConfirmRegistration from "./pages/ConfirmRegistration";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Products from "./pages/Products";
import Register from "./pages/Register";

const Routing = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register">
            <Route path="" element={<Register />} />
            <Route path="confirm" element={<ConfirmRegistration />} />
          </Route>
          <Route path="products" element={<Products />} />
          <Route path="products/:id" element={<ProductDetails />} />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default Routing;
