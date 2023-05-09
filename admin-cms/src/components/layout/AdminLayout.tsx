import styled from "styled-components";
import { useAppSelector } from "../../features/hooks";
import { PrivateRoutePage } from "../../pages";
import { content, links } from "../../utils/constants";
import Hero from "../shared/Hero";
import Navbar from "../shared/Navbar";

const AdminLayout = () => {
  const authenticated = useAppSelector((state) => state.auth.isAuthenticated);

  const handleClick = () => {
    window.history.back();
  };
  return (
    <Container>
      <Navbar {...content} />
      <Hero />
      <PrivateRoutePage links={links} />

      {/* <Outlet /> */}
    </Container>
  );
};
export default AdminLayout;

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
