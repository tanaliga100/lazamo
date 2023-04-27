import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { useAppSelector } from "../features/hooks";
import AdminPage from "./AdminPage";
interface IPrivate {
  children?: React.ReactNode;
}
const PrivateRoutePage = (props: IPrivate) => {
  const authenticated = useAppSelector((state) => state.auth.auth);
  console.log("PRIVATE ROUTE", authenticated);

  // if (!authenticated) {
  //   <Wrapper className="page-100">
  //     <section>
  //       <h1>Forbidden</h1>
  //       <h3>Sorry, the page you tried needs authentication</h3>
  //       <Link to="/" className="btn">
  //         back home
  //       </Link>
  //     </section>
  //   </Wrapper>;
  // }

  const location = useLocation();
  console.log({ location });

  return (
    <div>
      {/* {props.children} */}
      {!authenticated && (
        <Wrapper className="page-100">
          <section>
            <h1>Forbidden</h1>
            <h3>Sorry, the page you tried needs authentication</h3>
            <Link to="/" className="btn">
              back home
            </Link>
          </section>
        </Wrapper>
      )}
      {authenticated && <AdminPage />}
    </div>
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
