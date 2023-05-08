import styled from "styled-components";
const ErrorPage = () => {
  const handleClick = () => {
    window.history.back();
  };
  return (
    <Wrapper className="page-100">
      <section>
        <h1>404</h1>
        <h3>Sorry, the page you tried cannot be found</h3>
        {/* <Link to="/" className="btn">
          back home
        </Link> */}
        <button onClick={handleClick}>back home</button>
      </section>
    </Wrapper>
  );
};
const Wrapper = styled.main`
  padding: 5rem 10rem 0rem 10rem;

  background: var(--clr-primary-10);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  button {
    background: #7e7871;
    border: none;
    padding: 1rem;
    color: white;
    text-transform: capitalize;
    &:hover {
      cursor: pointer;
      font-weight: 500;
    }
  }
  h1 {
    font-size: 10rem;
  }
  h3 {
    text-transform: none;
    margin-bottom: 2rem;
  }
`;

export default ErrorPage;
