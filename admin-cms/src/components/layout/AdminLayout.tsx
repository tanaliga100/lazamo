import { Navigate } from "react-router-dom";
import { useAppSelector } from "../../features/hooks";
import AdminPage from "../../pages/AdminPage";
import Hero from "../shared/Hero";

const AdminLayout = () => {
  const authenticated = useAppSelector((state) => state.auth.isAuthenticated);

  return (
    <main>
      <Hero />
      {authenticated ? <AdminPage /> : <Navigate to="/" />}
    </main>
  );
};
export default AdminLayout;
