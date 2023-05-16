import { NavLink, Outlet } from "react-router-dom";
import styled from "styled-components";
import { links } from "../utils/constants";

const AdminPage = () => {
  const activeClass = {
    textDecoration: "underline",
    fontWeight: "bold",
    color: "tan",
  };
  return (
    <Container>
      <LeftSection>
        {links.map((link) => (
          <nav key={link.id}>
            <NavLink
              to={`${link.url}`}
              end
              style={({ isActive }) => (isActive ? activeClass : undefined)}
            >
              {link.icon}
              {link.text}
            </NavLink>
          </nav>
        ))}
      </LeftSection>
      <RightSection>
        <Outlet />
      </RightSection>
    </Container>
  );
};

export default AdminPage;

const Container = styled.main`
  /* display: flex; */
  display: grid;
  grid-template-columns: 15% 85%;
  width: 100%;
  height: 100%;
  padding-top: 1rem;
`;

const LeftSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  text-align: center;
  justify-content: start;
  padding-left: 1rem;

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: transparent !important;
  }
  a {
    display: flex;
    padding: 0.3rem;
    gap: 2rem;
    background-color: transparent !important;
    text-decoration: none;
  }
`;

const RightSection = styled.section`
  width: 100%;
`;
