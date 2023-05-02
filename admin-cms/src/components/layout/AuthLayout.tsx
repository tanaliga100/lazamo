import { Outlet, useLocation } from "react-router-dom";
import styled from "styled-components";
import { content } from "../../utils/constants";
import Footer from "../shared/Footer";
import Navbar from "../shared/Navbar";

const AuthLayout = () => {
  const location = useLocation();

  return (
    <Container>
      <Navbar {...content} />
      <Outlet />
      {location.pathname === "/" && <Footer />}
    </Container>
  );
};
export default AuthLayout;

const Container = styled.main`
  /* background-color: #d2b48c; */
`;
