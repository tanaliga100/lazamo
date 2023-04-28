import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { useAppSelector } from "../features/hooks";
import { links } from "../utils/constants";
import ErrorPage from "./ErrorPage";

const AdminPage = (props: any) => {
  const [activeLink, setActiveLink] = useState(links[0]);

  const allowedUrls = [
    "/dashboard",
    "/dashboard/users",
    "/dashboard/products",
    "/dashboard/orders",
    "/dashboard/reviews",
    "/dashboard/profile",
  ];

  React.useEffect(() => {
    // console.log("ACTIVE LINK", activeLink);
  }, [activeLink]);
  const handleLinkClick = (selectedLink: any) => {
    setActiveLink(selectedLink);
  };
  const user = useAppSelector((state) => state?.auth?.user);
  console.log("CURRENT_USER", user);

  return (
    <>
      <Header>
        <h6>{activeLink.text.toUpperCase()}</h6>
        <p>
          <span> Welcome, </span> {user && user.name} ||{" "}
          {user && user.role?.toUpperCase()}
        </p>
      </Header>
      <Container>
        <LeftSection>
          {links.map((link: any) => (
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
          {!allowedUrls.includes(activeLink.url) ? (
            <section>
              <ErrorPage />
            </section>
          ) : (
            <section>{activeLink.component}</section>
          )}
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
  gap: 2rem;
  justify-content: space-between;
  text-align: center;
  width: auto;
  background-color: #d2b48c89;
  padding-bottom: 1rem;

  h6 {
    background: transparent !important;
    font-weight: 500;
  }

  p {
    background-color: transparent;
    font-size: 1rem;
    padding-right: 4rem;
    font-weight: 300;
    span {
      color: crimson;
      background-color: transparent;
      font-weight: 400;
      font-size: 1rem;
      padding-right: 1rem;
    }
  }
`;

const Container = styled.main`
  /* display: flex; */
  display: grid;
  grid-template-columns: 1fr 5fr;
  width: 100%;
  height: 100%;
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
