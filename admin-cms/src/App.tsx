import { Route, Routes } from "react-router-dom";
import AdminLayout from "./components/layout/AdminLayout";
import RootLayout from "./components/layout/RootLayout";
import { ErrorPage, PrivateRoutePage } from "./pages";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

function App() {
  // const url = process.env.SERVER_URL;
  // console.log({ url });

  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/dashboard" element={<AdminLayout />}>
          <Route index element={<PrivateRoutePage />} />
        </Route>
      </Route>
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}
export default App;
