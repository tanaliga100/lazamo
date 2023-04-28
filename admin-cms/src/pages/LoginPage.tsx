import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import styled from "styled-components";
import { loginUser } from "../features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "../features/hooks";
// import image from "/custom.jpeg";
const LoginPage = () => {
  // HOOKS
  const dispatch = useAppDispatch();
  const authenticated = useAppSelector((state) => state.auth.isAuthenticated);
  const error = useAppSelector((state) => state.auth.error);
  if (error) {
    toast.error(error);
  }

  const navigate = useNavigate();
  // LOGIC
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  React.useEffect(() => {
    if (authenticated) navigate("/dashboard");
  }, [authenticated]);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error("All fields are required");
    } else {
      dispatch(loginUser({ email, password }));
      setEmail("");
      setPassword("");
    }
  };

  return (
    <Container>
      <section className="content">
        {/* <LeftSection>
          <img src={image} alt="" width={500} height={500} />
        </LeftSection> */}
        <RightSection>
          <form action="" onSubmit={handleSubmit}>
            <h1>Login</h1>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Login</button>
          </form>
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
    /* grid-template-columns: 1fr 2fr; */
    padding: 3rem;
  }
`;

// const LeftSection = styled.section`
//   display: grid;
//   text-align: center;
//   align-items: center;

//   img {
//     padding: 3rem;
//     border-radius: 50%;
//   }
// `;

const RightSection = styled.section`
  display: grid;
  align-items: center;
  justify-content: center;
  background-color: #b4956d15;
  border-radius: 2rem;
  width: fit-content;
  padding: 2rem;
  margin: 0 auto;

  h1 {
    font-weight: 800;
    text-align: center;
    font-size: 2rem;
    letter-spacing: 0.1cap;
    background-color: transparent !important;
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
      background-color: #d6ae79;
    }
  }
  input {
    border: none;
    padding: 0.5rem 1rem;
  }
`;
