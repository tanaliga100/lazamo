import styled from "styled-components";

const Featured = () => {
  return (
    <Container>
      <h1>Featured Products</h1>
      <section className="content"></section>
    </Container>
  );
};

export default Featured;

const Container = styled.section`
  height: 80vh;
  background-color: #d2b48c34;
  color: white;
  text-align: center;

  h1 {
    padding: 1rem 0;
  }

  .content {
    padding: 3rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-content: center;
    align-items: center;
  }
`;
