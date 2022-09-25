import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "../pages/auth/LoginPage";
import RegistrationPage from "../pages/auth/RegistrationPage";
import HomePage from "../pages/HomePage";
import NotFound from "../pages/NotFound";
import ProductDetailsPage from "../pages/product/ProductDetailsPage";
import ProductListPage from "../pages/product/ProductListPage";

const Routing = () => {
  return (
    <Router>
      <Routes>
        <Route path="/">
          <Route index element={<HomePage />} />

          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegistrationPage />} />

          <Route path="products">
            <Route index element={<ProductListPage />} />
            <Route path=":id" element={<ProductDetailsPage />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default Routing;
