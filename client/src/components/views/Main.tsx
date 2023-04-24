import { Link } from "react-router-dom";
import styled from "styled-components";
import imageRight from "../../../public/hero.jpeg";

const MainView = () => {
  return (
    <MainContainer>
      <section className="left-view">
        <h1>
          <span>Design</span> your comfort zone
        </h1>
        <small>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
          veniam ratione inventore magni quam molestiae cum! Cum, veniam libero
          porro ratione rerum tempore dolorem soluta aut. Consequatur minus illo
          officiis nulla dignissimos incidunt distinctio porro, magni quam ullam
          odio iusto explicabo, sit ipsam? Non, earum porro saepe maxime unde
          nobis omnis illum! Id, autem possimus. Error sint eos ullam dolorem .
        </small>
        <section>
          <Link to="/products" style={{ textDecoration: "none" }}>
            <button>Shop Now</button>
          </Link>
        </section>
      </section>
      <section className="right-view">
        <img
          src={imageRight}
          alt="right-image"
          style={{ maxWidth: "100%" }}
          height={400}
          width={900}
        />
      </section>
    </MainContainer>
  );
};
export default MainView;

const MainContainer = styled.div`
  display: grid;
  max-height: 100vh;
  grid-template-columns: repeat(2, 1fr);
  justify-content: center;
  align-items: center;

  span {
    color: #b4956d;
  }

  h1 {
    margin: 0.3rem 0;
    line-height: 1.2em;
    font-size: 4rem;
    font-weight: 800;
  }

  button {
    margin: 2rem 0;
    background-color: #b4956d;
    border: none;
    padding: 0.8rem 1rem;
    border-radius: 0.5rem;
    letter-spacing: 5px;
    color: white;

    &:hover {
      background-color: #de9e49;

      cursor: pointer;
    }
  }

  .left-view {
    padding: 3rem;
    height: auto;
  }
  .right-view {
    padding-top: 3rem;
    padding-right: 3rem;
  }
  img {
    border-radius: 3rem;
  }
`;
