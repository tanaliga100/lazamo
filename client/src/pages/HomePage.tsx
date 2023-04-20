import styled from "styled-components";

const HomePage = () => {
  return (
    <MainContainer>
      <section className="left-view"></section>
      <section className="right-view"></section>
    </MainContainer>
  );
};
export default HomePage;

const MainContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: tan;

  .left-view {
    background-color: green;
  }
  .right-view {
    background-color: blue;
  }
`;
