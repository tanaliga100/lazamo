import { Outlet, useLocation } from "react-router-dom";
import styled from "styled-components";
import Navbar from "../shared/Navbar";

const AdminLayout = (props: any) => {
  const location = useLocation();
  const content = {
    login: "Login",
    signUp: "Sign Up",
    logout: "Logout",
  };
  return (
    <Container>
      <Navbar {...content} />
      {/* {props.children} */}
      <Outlet />
    </Container>
  );
};
export default AdminLayout;

const Container = styled.main`
  /* background-color: #d2b48c; */
`;
