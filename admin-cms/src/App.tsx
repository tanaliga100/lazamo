import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminLayout from "./components/layout/AdminLayout";
import RootLayout from "./components/layout/RootLayout";
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
  return (
    <React.Fragment>
      {/* <Navbar {...content} /> */}
      <Routes>
        <Route path="/" element={<RootLayout />}>
          // FIRST DEGREE
          <Route index element={<HomePage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
          // SECOND DEGREE
          <Route path="dashboard" element={<AdminLayout />}>
            <Route index element={<DashboardView />} />
            <Route path="users" element={<UsersView />} />
            <Route path="products" element={<ProductsView />} />
            <Route path="orders" element={<OrdersView />} />
            <Route path="reviews" element={<ReviewsView />} />
            <Route path="profile" element={<ProfileView />} /> */
          </Route>
          <Route path="*" element={<ErrorPage />} />
        </Route>
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
