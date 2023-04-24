import styled from "styled-components";

const Sort = () => {
  return (
    <Container>
      <h6>Sort By :</h6>
      <input type="text" />
    </Container>
  );
};

export default Sort;

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0rem 8rem 0rem 0rem;
  gap: 0.3rem;
  background-color: #9c8c8c23;
  h6 {
    background: transparent;
  }
  input {
    border: none;
    margin: 1rem;
  }
`;
