import styled from "styled-components";

const Sort = () => {
  return (
    <Container>
      <h6>Looking For :</h6>
      <input type="text" placeholder="search..." />
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
  /* background-color: #9c8c8c11; */
  h6 {
    background: transparent;
    font-size: 1.1rem;
    font-weight: 300;
  }
  input {
    border: none;
    margin: 1rem;
    background-color: #9c8c8c25;
    padding: 0.5rem;
  }
`;
