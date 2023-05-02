import styled from "styled-components";
import { PrivateRoutePage } from "../../pages";
import { content, links } from "../../utils/constants";
import Hero from "../shared/Hero";
import Navbar from "../shared/Navbar";

const AdminLayout = () => {
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
