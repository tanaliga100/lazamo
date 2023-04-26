import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Navbar from "./components/shared/Navbar";
import { ErrorPage, PrivateRoutePage } from "./pages";
import DashboardPage from "./pages/DashboardPage";
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
    <Router>
      <ToastContainer />
      <Navbar />
      <Routes>
        {/* <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:id" element={<SingleProductPage />} /> */}
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        <Route
          path="/dashboard"
          element={
            <PrivateRoutePage>
              <DashboardPage />
            </PrivateRoutePage>
          }
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}
export default App;
