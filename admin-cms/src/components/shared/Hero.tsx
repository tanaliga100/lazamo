import styled from "styled-components";
import { useAppSelector } from "../../features/hooks";

const Hero = () => {
  const user = useAppSelector((state) => state.auth.user);

  return (
    <Container>
      <p>
        <span>Welcome,</span>
        <small>
          {user &&
            user.name &&
            user.name.charAt(0).toUpperCase() + user.name.slice(1)}
        </small>
      </p>
    </Container>
  );
};
export default Hero;

const Container = styled.section`
  background-color: #d2b48c6f;
  height: 5vh;
  color: white;
  margin-bottom: 1rem;
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
  }

  small {
    color: #ff000091;
    background-color: transparent !important;
    letter-spacing: 0.1cap;
  }
`;
