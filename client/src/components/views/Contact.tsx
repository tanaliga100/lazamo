import styled from "styled-components";

const Contact = () => {
  return (
    <Container>
      <header className="header">
        <h3>Join our newsletter and get 20% off</h3>
      </header>
      <section className="content">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati
          iste placeat ipsum consequatur earum. Nemo eveniet dolor voluptate
          excepturi expedita saepe placeat, sed maxime consectetur quae quo
          atque. Tenetur, necessitatibus!
        </p>
        <div>
          <input type="text" placeholder="Enter Email" />
          <button>Subscribe</button>
        </div>
      </section>
    </Container>
  );
};

export default Contact;
const Container = styled.section`
  height: 80vh;
  background-color: #d2b48c1f;
  color: white;
  text-align: center;

  h3 {
    font-size: 3rem;
    letter-spacing: 1px;
    font-weight: 700;
    line-height: 3rem;
    text-align: left;
    padding-left: 3rem;
    color: #de9e49;
  }
  .header {
    display: grid;
    padding-top: 3rem;
    gap: 1rem;
  }
  .content {
    padding-top: 5rem;
    padding: 3rem;
    display: grid;
    font-size: 1.6rem;
    font-weight: 200;
    line-break: loose;
    gap: 2rem;
    grid-template-columns: (1fr, 1fr);
    justify-content: center;
    align-items: center;
    height: auto;

    & p {
    }

    & input {
      padding: 1rem;
      border: none;
      border-left: 10px solid #de9e49;
    }

    & button {
      background-color: #de9e49;
      padding: 1rem;
      color: white;
      border: none;
      letter-spacing: 5px;
      &:hover {
        color: #ffffffa1;
        cursor: pointer;
      }
    }
  }
`;
