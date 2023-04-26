import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { links } from "../utils/constants";

const AdminPage = () => {
  const [activeLink, setActiveLink] = useState(links[0]);

  const handleLinkClick = (link: any) => {
    setActiveLink(link);
  };
  React.useEffect(() => {
    console.log({ activeLink });
  }, [activeLink]);

  return (
    <Container>
      <LeftSection>
        {links.map((link) => (
          <NavLink
            to={`${link.url}`}
            key={link.id}
            onClick={() => handleLinkClick(link)}
          >
            <span className={`content ${activeLink === link ? "active" : ""}`}>
              {link.icon}
              {link.text}
            </span>
          </NavLink>
        ))}
      </LeftSection>
      <RightSection>
        <section>{activeLink.component}</section>
      </RightSection>
    </Container>
  );
};

export default AdminPage;

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

    .active {
      background-color: #ccb46a3a;
    }

    .content {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      align-items: center;
      padding: 1rem;
      margin-left: 3rem;

      &:hover {
        background-color: #e1c4454b;
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
  }
`;
