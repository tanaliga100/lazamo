import styled from "styled-components";
import { IServices, services } from "../../utils/constants";

const Services = () => {
  return (
    <Container>
      <h1>Services</h1>
      <header className="header">
        <h3>custom furniture built only for you</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
          pariatur? Amet, minima dolorum quibusdam voluptatibus fugit, eos quae
          tempora temporibus, sed sequi officia esse praesentium nostrum omnis
          atque porro incidunt aspernatur excepturi! Veniam, ad? Quibusdam
        </p>
      </header>
      <section className="content">
        {services.map((each: IServices) => (
          <div className="indi" key={each.id}>
            <span>{each.icon}</span>
            <p>{each.title}</p>
            <p>{each.text}</p>
          </div>
        ))}
      </section>
    </Container>
  );
};

export default Services;

const Container = styled.section`
  height: 80vh;
  background-color: #d2b48c1a;
  color: white;
  text-align: center;

  h1 {
    padding: 1rem 0;
  }
  h3 {
    font-size: 3rem;
    line-height: 4rem;
    font-weight: 100;
  }
  .header {
    display: grid;
    padding-top: 1rem;
    gap: 1rem;
    grid-template-rows: (2fr, 1fr);
    justify-content: center;
    align-items: center;

    & p {
      padding: 0 3rem;
    }
  }
  .content {
    padding-top: 5rem;
    padding: 3rem;
    display: grid;

    gap: 2rem;
    grid-template-columns: repeat(3, 1fr);
    justify-content: center;
    align-items: center;
    height: auto;
  }
  .indi {
    border-radius: 1rem;
    height: auto;

    & title {
      margin: 3rem;
    }
  }
  span {
    height: 4rem;
  }
`;
