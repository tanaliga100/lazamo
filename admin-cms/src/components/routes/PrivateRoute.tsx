import { Navigate } from "react-router-dom";
import styled from "styled-components";
import { useAppSelector } from "../../features/hooks";
import AdminPage from "../../pages/AdminPage";
import { content } from "../../utils/constants";
import Hero from "../shared/Hero";
import Navbar from "../shared/Navbar";

const PrivateRoute = () => {
  const authenticated = useAppSelector((state) => state.auth.isAuthenticated);

  return (
    <Container>
      <Navbar {...content} />
      <Hero />
      {authenticated ? <AdminPage /> : <Navigate to="/" />}
    </Container>
  );
};
export default PrivateRoute;

const Container = styled.main`
  /* background-color: #d2b48c; */
`;

const Wrapper = styled.main`
  padding: 5rem 10rem 0rem 10rem;

  background: var(--clr-primary-10);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  button {
    background: #7e7871;
    border: none;
    padding: 1rem;
    color: white;
    text-transform: capitalize;
    &:hover {
      cursor: pointer;
      font-weight: 500;
    }
  }
  h1 {
    font-size: 10rem;
  }
  h3 {
    text-transform: none;
    margin-bottom: 2rem;
  }
`;
