import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutPage from "../pages/AboutPage";
import ForgotPasswordPage from "../pages/auth/ForgotPasswordPage";
import LoginPage from "../pages/auth/LoginPage";
import RegistrationPage from "../pages/auth/RegistrationPage";
import ResetPasswordPage from "../pages/auth/ResetPasswordPage";
import CheckoutPage from "../pages/checkout/CheckoutPage";
import ForbiddenPage from "../pages/ForbiddenPage";
import HomePage from "../pages/HomePage";
import NotFound from "../pages/NotFound";
import ProductDetailsPage from "../pages/product/ProductDetailsPage";
import ProductListPage from "../pages/product/ProductListPage";
import ProfilePage from "../pages/profile/ProfilePage";
import SharedCartListPage from "../pages/shared-cart/SharedCartListPage";
import SharedCartPage from "../pages/shared-cart/SharedCartPage";
import ProtectedRoute from "./ProtectedRoute";

const Routing = () => {
  return (
    <Router>
      <Routes>
        <Route path="/">
          <Route index element={<HomePage />} />

          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegistrationPage />} />
          <Route path="forgot-password" element={<ForgotPasswordPage />} />
          <Route path="reset-password" element={<ResetPasswordPage />} />

          <Route path="products">
            <Route index element={<ProductListPage />} />
            <Route path=":id" element={<ProductDetailsPage />} />
          </Route>

          <Route path="shared-carts" element={<ProtectedRoute />}>
            <Route index element={<SharedCartListPage />} />
            <Route path=":id" element={<SharedCartPage />} />
          </Route>

          <Route
            path="profile"
            element={
              <ProtectedRoute>
                <ProfilePage />
              </ProtectedRoute>
            }
          />

          <Route path="checkout" element={<ProtectedRoute />}>
            <Route index element={<CheckoutPage />} />
            <Route path=":id" element={<CheckoutPage />} />
          </Route>

          <Route path="about" element={<AboutPage />} />

          <Route path="forbidden" element={<ForbiddenPage />} />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default Routing;
