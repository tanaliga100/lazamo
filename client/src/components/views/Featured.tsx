import styled from "styled-components";

const Featured = () => {
  return (
    <Container>
      <h1>Featured Products</h1>
      <section className="content">Ongoing.....</section>
    </Container>
  );
};
export default Featured;

const Container = styled.section`
  height: 80vh;
  text-align: left;
  background-color: #d2b48c29;

  h1 {
    padding-left: 3rem;
    font-size: 2rem;
    font-weight: 700;
  }
  .content {
    padding: 0 3rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-content: center;
    align-items: center;
  }
`;
