import React from "react";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../../features/hooks";
import { currentUser } from "../../features/users/userSlice";

const Hero = () => {
  // const user = useAppSelector((state) => state.auth.user);
  const dispatch = useAppDispatch();
  const name = useAppSelector((state) => state?.users.name);
  const role = useAppSelector((state) => state?.users.role);
  const msg = useAppSelector((state) => state.users.msg);

  React.useEffect(() => {
    dispatch(currentUser());
  }, []);
  const formatName = (name: string) => {
    return name.charAt(0).toUpperCase() + name.slice(1);
  };
  const formatRole = (role: string) => {
    return role.charAt(0).toUpperCase() + role.slice(1);
  };

  return (
    <Container>
      <p>
        <span>Welcome,</span>
        <small className="name">| {name && formatName(name)}</small>
        <small className="role">| {role && formatRole(role)}</small>
      </p>
    </Container>
  );
};
export default Hero;

const Container = styled.section`
  background-color: #d2b48c56;
  height: 10vh;
  color: white;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  span {
    font-size: small;
    font-weight: 200;
    background-color: transparent !important;
    margin-right: 1rem;
  }

  p {
    padding-right: 1rem;
    background-color: transparent !important;

    .name {
      margin-right: 1rem;
      color: #dc143cb8;
      background-color: transparent !important;
    }
    .role {
      color: #da8619;
      background-color: transparent !important;
    }
  }
`;
