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
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/dashboard" element={<AdminLayout />}>
          <Route index path="*" element={<PrivateRoutePage />} />
        </Route>
      </Route>
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}
export default App;
