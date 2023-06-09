import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { registerUser } from "../features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "../features/hooks";
// import image from "/custom.jpeg";
const RegisterPage = () => {
  // HOOKS
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const authenticated = useAppSelector((state) => state.auth.isAuthenticated);
  const hasUser = useAppSelector((state) => state.auth.user);

  // LOGIC
  const initialState = {
    name: "",
    email: "",
    password: "",
  };

  // CHANGE EVENT
  const [formData, setFormData] = useState(initialState);
  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // FORM SUBMIT
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // const { name, email, password } = formData;
    dispatch(registerUser(formData));
    setFormData(initialState);
  };

  if (hasUser && authenticated) {
    navigate("/dashboard");
  }

  return (
    <Container>
      <section className="content">
        {/* <LeftSection>
          <img src={image} alt="" width={500} height={500} />
        </LeftSection> */}
        <RightSection>
          <form action="" onSubmit={handleSubmit}>
            <h1>Sign Up</h1>
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />
            <button type="submit">Sign Up</button>
          </form>
        </RightSection>
      </section>
    </Container>
  );
};

export default RegisterPage;
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
  background-color: #b4956d23;
  width: fit-content;
  padding: 2rem;
  margin: 0 auto;
  border-radius: 2rem;

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
