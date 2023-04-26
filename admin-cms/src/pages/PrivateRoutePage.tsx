import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useAppSelector } from "../features/hooks";
interface IPrivate {
  children: React.ReactNode;
}

const PrivateRoutePage = (props: IPrivate) => {
  const user = useAppSelector((state) => state.auth.user);

  if (!user) {
    <Wrapper className="page-100">
      <section>
        <h1>Forbidden</h1>
        <h3>Sorry, the page you tried needs authentication</h3>
        <Link to="/" className="btn">
          back home
        </Link>
      </section>
    </Wrapper>;
  }
  return <div>{props.children}</div>;
};

export default PrivateRoutePage;

const Wrapper = styled.main`
  padding: 0 10rem;

  background: var(--clr-primary-10);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  h1 {
    font-size: 10rem;
  }
  h3 {
    text-transform: none;
    margin-bottom: 2rem;
  }
`;
