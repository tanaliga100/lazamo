import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Footer from "../shared/Footer";
import Navbar from "../shared/Navbar";

const RootLayout = (props: any) => {
  const location = useLocation();
  const content = {
    login: "Login",
    signUp: "Sign Up",
    logout: "Logout",
  };
  return (
    <Container>
      <Navbar {...content} />
      {props.children}
      {location.pathname === "/" && <Footer />}
    </Container>
  );
};
export default RootLayout;

const Container = styled.main`
  /* background-color: #d2b48c; */
`;
