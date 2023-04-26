import styled from "styled-components";
import image from "../../public/hero.jpeg";
const HomePage = () => {
  return (
    <Container>
      <section>
        <h1>
          Laza <span>mo</span>
        </h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque,
          commodi? Consectetur, quia laborum vero est explicabo iusto optio
          nihil dicta aliquid perferendis vel aliquam incidunt, neque fugiat
          reiciendis voluptatibus ex. Sint, libero. Commodi nobis
        </p>
      </section>
      <img src={image} alt="" width={400} height={400} />
    </Container>
  );
};

export default HomePage;

const Container = styled.main`
  max-width: 80%;
  display: grid;
  grid-template-columns: 1fr 2fr;
  justify-content: center;
  margin: 0 auto;
  align-items: center;

  /* a {
    padding: 0.8rem;
    text-decoration: none;est explicabo iusto optio nihil dicta aliquid perferendis vel aliq
    font-size: 1rem;
    border: none;
    border-radius: 0.3rem solid transparent;
    font-weight: 300;
    color: #d5bb8f;
    background-color: #555555;
    width: fit-content;
    text-align: center;
    margin: 0 auto;
  } */

  section {
    text-align: center;
    padding: 0 1rem;

    h1 {
      padding: 0 1rem;
      font-size: 4rem;
      font-weight: 900;

      span {
        color: #d5bb8f;
      }
    }
    p {
      font-size: 1.3rem;
      line-height: 3ch;
    }
  }

  img {
    border-radius: 50%;
    padding: 2rem;
    margin: 0 auto;
  }
`;
