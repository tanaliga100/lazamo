import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminLayout from "./components/layout/AdminLayout";
import AuthLayout from "./components/layout/AuthLayout";
import DashboardView from "./components/views/DashboardView";
import OrdersView from "./components/views/OrdersView";
import ProductsView from "./components/views/ProductsView";
import ProfileView from "./components/views/ProfileView";
import ReviewsView from "./components/views/ReviewsView";
import UsersView from "./components/views/UsersView";
import { ErrorPage } from "./pages";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

function App() {
  // const url = process.env.SERVER_URL;
  // console.log({ url });

  return (
    <React.Fragment>
      {/* <Navbar {...content} /> */}
      <Routes>
        <Route path="/" element={<AuthLayout />}>
          <Route index element={<HomePage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
        </Route>
        <Route path="/dashboard" element={<AdminLayout />}>
          <Route index element={<DashboardView />} />
          <Route path="users" element={<UsersView />} />
          <Route path="products" element={<ProductsView />} />
          <Route path="orders" element={<OrdersView />} />
          <Route path="reviews" element={<ReviewsView />} />
          <Route path="profile" element={<ProfileView />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </React.Fragment>
  );
}
export default App;
{
  /* <Route index element={<DashboardView />} />
        <Route path="users" element={<UsersView />} />
        <Route path="products" element={<ProductsView />} />
        <Route path="orders" element={<OrdersView />} />
        <Route path="reviews" element={<ReviewsView />} />
        <Route path="profile" element={<ProfileView />} /> */
}
