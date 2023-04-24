import React from "react";
import styled from "styled-components";
import image from "/custom.jpeg";
const LoginPage = () => {
  const [title, setTitle] = React.useState("Register");
  const changeForm = () => {
    setTitle(title === "Register" ? "Login" : "Register");
  };

  return (
    <Container>
      <section className="content">
        <LeftSection>
          <img src={image} alt="" width={500} height={500} />
        </LeftSection>
        <RightSection>
          {title === "Register" ? (
            <form action="">
              <input type="text" placeholder="First Name" />
              <input type="text" placeholder="Last Name" />
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
            </form>
          ) : (
            <form action="">
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
            </form>
          )}
          {title === "Register" ? (
            <small>Already have an account ? </small>
          ) : (
            <small>Please Login</small>
          )}
          <button onClick={changeForm}>{title}</button>
        </RightSection>
      </section>
    </Container>
  );
};

export default LoginPage;
const Container = styled.main`
  width: 100vw;
  text-align: center;
  height: 100vh;

  .content {
    display: grid;
    grid-template-columns: 1fr 2fr;
    padding: 3rem;
  }
`;

const LeftSection = styled.section`
  display: grid;
  text-align: center;
  align-items: center;

  img {
    padding: 3rem;
    border-radius: 50%;
  }
`;

const RightSection = styled.section`
  display: grid;
  align-items: center;
  justify-content: center;
  background-color: #b4956d15;
  border-radius: 2rem;

  h3 {
    font-weight: 100;
    letter-spacing: 0.5cap;
    font-size: large;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    border: none;
    background-color: transparent;

    input {
      background-color: white;
    }
  }
  button {
    background-color: #b4956d;
    padding: 0.4rem;
    color: white;
    border: none;
    letter-spacing: 0.5ch;
    &:hover {
      cursor: pointer;
    }
  }
  input {
    border: none;
    padding: 0.5rem 1rem;
  }
`;
