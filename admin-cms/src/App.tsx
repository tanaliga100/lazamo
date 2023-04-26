import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import RootLayout from "./components/layout/RootLayout";
import { ErrorPage, PrivateRoutePage } from "./pages";
import AdminPage from "./pages/DashboardPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

function App() {
  const url = process.env.SERVER_URL;
  console.log({ url });

  // const testFetch = async () => {
  //   try {
  //     const response = await fetch(`${String(url)}/products`);
  //     const data = response.json();
  //     console.log({ data });
  //   } catch (error) {
  //     console.log({ error });
  //   }
  // };
  // React.useEffect(() => {
  //   testFetch();
  //   return () => {
  //     testFetch();
  //   };
  // }, []);

  return (
    <RootLayout>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoutePage>
              <AdminPage />
            </PrivateRoutePage>
          }
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </RootLayout>
  );
}
export default App;
