import { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { links } from "../utils/constants";

const AdminPage = () => {
  const [activeLink, setActiveLink] = useState(links[0]);

  // React.useEffect(() => {
  // }, []);
  const handleLinkClick = (selectedLink: any) => {
    setActiveLink(selectedLink);
    console.log("fired", selectedLink);
  };
  return (
    <>
      <Header>{activeLink.text.toUpperCase()}</Header>
      <Container>
        <LeftSection>
          {links.map((link) => (
            <NavLink
              to={`${link.url}`}
              key={link.id}
              onClick={() => handleLinkClick(link)}
            >
              <span
                className={`content ${activeLink === link ? "active" : ""}`}
              >
                {link.icon}
                {link.text}
              </span>
            </NavLink>
          ))}
        </LeftSection>
        <RightSection>
          {/* <Routes>
          {links.map(
            (link) =>
              link.url ===
              (
                <Route
                  path={`${activeLink.url}`}
                  element={activeLink.component}
                />
              )
          )}
        </Routes> */}

          <section>{activeLink.component}</section>
        </RightSection>
      </Container>
    </>
  );
};

export default AdminPage;

const Header = styled.header`
  padding: 1rem 0rem 1rem 17rem;
  text-align: center;
  font-size: 1.5rem;
  font-weight: 500;
  display: flex;
  text-align: center;
  width: 100%;
  background-color: #d2b48c89;
  padding-bottom: 1rem;
`;

const Container = styled.main`
  /* display: flex; */
  display: grid;
  grid-template-columns: 1fr 5fr;
  width: 100%;
`;

const LeftSection = styled.section`
  display: flex;
  flex-direction: column;
  text-align: center;

  a {
    text-decoration: none;
    list-style: none;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    font-weight: 300;

    .active {
      background-color: #ccb46a3a;
    }

    .content {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      padding: 1rem;
      gap: 2rem;

      &:hover {
        background-color: #ccb46a3a;
        cursor: pointer;
      }
    }
  }
`;

const RightSection = styled.section`
  width: 100%;
  background-color: #ccb46a3a;

  section {
    padding: 0 3rem;

    text-align: left;
    background-color: transparent;
  }
`;
