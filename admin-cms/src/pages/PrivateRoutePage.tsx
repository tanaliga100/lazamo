import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import styled from "styled-components";
import { ILinks } from "../utils/constants";

const PrivateRoutePage = (props: any) => {
  const [activeLink, setActiveLink] = useState(props.links[0]);
  const handleLinkClick = (selectedLink: ILinks) => {
    setActiveLink(selectedLink);
  };
  return (
    <Container>
      <LeftSection>
        {props.links.map((link: any) => (
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
        {/* <section>{activeLink.component}</section> */}
        <section>
          <Outlet />
        </section>
      </RightSection>
    </Container>
  );
};

export default PrivateRoutePage;

const Wrapper = styled.main`
  padding: 5rem 10rem 0rem 10rem;
  background: var(--clr-primary-10);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  h1 {
    font-size: 6rem;
  }
  h3 {
    text-transform: none;
    margin-bottom: 2rem;
  }
`;

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
    font-weight: 300;
    padding-right: 3rem;

    span {
      color: crimson;
      background-color: transparent;
      font-weight: 400;
      font-size: 1rem;
      padding-right: 1rem;
    }
    .role {
      color: white;
      font-size: 0.3rem;
      width: fit-content;
      text-align: center;
      background-color: #a24734da;
      padding: 0 1rem 0.1rem 1rem;
      border-radius: 5%;
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
  padding-left: 1rem;

  a {
    text-decoration: none;
    list-style: none;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    font-weight: 300;

    .active {
      /* border-left: #ccb46a3a; */
      /* border-left: 1rem solid #ccb46a3a; */
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
  section {
    padding: 0 2rem;
    min-height: 100%;
  }
`;

{
  /* {!hasToken && !authenticated && currentUser ? (
        <Wrapper className="page-100">
          <section>
            <h1>Forbidden</h1>
            <h3>Sorry, the page you tried needs authentication</h3>
            <Link to="/" className="btn">
              back home
            </Link>
          </section>
        </Wrapper>
      ) : (
        <>
          <Header>
            <h6>{activeLink.text.toUpperCase()}</h6>
            <p>
              {currentUser?.name && `Welcome, ${currentUser.name}`}
              <span className="role">
                {currentUser && currentUser?.role?.toUpperCase()}
              </span>
            </p>
          </Header> */
}
