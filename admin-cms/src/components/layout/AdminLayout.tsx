import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Navbar from "../shared/Navbar";

const AdminLayout = () => {
  const content = {
    login: "Login",
    signUp: "Sign Up",
    logout: "Logout",
  };

  return (
    <Container>
      <Navbar {...content} />
      <Outlet />
    </Container>
  );
};
export default AdminLayout;

const Container = styled.main`
  /* background-color: #d2b48c; */
`;
