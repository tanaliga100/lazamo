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
          reiciendis voluptatibus ex. Sint, libero. Commodi nobis et suscipit
          consectetur, fugit incidunt error consequuntur aperiam accusamus
          voluptatibus eveniet. Excepturi illum ipsum ullam ea suscipit.
          Suscipit modi dignissimos recusandae voluptatibus aperiam nostrum eum
          aspernatur est quasi ea debitis, nihil odio numquam atque quibusdam.
        </p>
      </section>
      <img src={image} alt="" width={500} height={500} />
    </Container>
  );
};

export default HomePage;

const Container = styled.main`
  display: grid;
  width: 100%;
  grid-template-columns: 2fr 2fr;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 1rem 3rem;

  section {
    text-align: center;
    padding: 1rem;

    h1 {
      padding: 2rem;
      font-size: 5rem;
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
    text-align: center;
    justify-content: center;
  }
`;
