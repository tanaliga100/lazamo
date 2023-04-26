import { GiWoodCabin } from "react-icons/gi";
import styled from "styled-components";
import { IServices, services } from "../../utils/constants";
const Services = () => {
  return (
    <Container>
      <header className="header">
        <h3>
          {" "}
          <span>
            <GiWoodCabin
              style={{
                width: 200,
                height: 100,
              }}
            />
          </span>{" "}
          custom furniture built only for you
        </h3>
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
            <h1>{each.title}</h1>
            <span>{each.icon}</span>
            <p>{each.text}</p>
          </div>
        ))}
      </section>
    </Container>
  );
};
export default Services;

const Container = styled.section`
  margin-top: 4rem;
  min-height: 80%;
  padding: 0 10rem;
  /* background-color: #d2b48c1a; */
  color: white;
  text-align: center;
  display: grid;
  /* background-image: url("../../../public/custom.jpeg");
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: cover; */

  header {
    display: flex;
    flex-direction: column;
    padding-left: 3rem;
    gap: 1rem;
    text-align: center;
    justify-content: center;
    align-items: center;

    p {
      padding: 1rem 3rem;
    }
    h3 {
      font-size: 3rem;
      display: flex;
      flex-direction: column;
      text-align: center;
      word-spacing: 1rem;
      color: #b4956d;
      font-weight: 900;

      span {
        margin: 5rem;
      }
    }
  }
  .content {
    padding: 3rem;
    display: grid;
    gap: 2rem;
    grid-template-columns: repeat(3, 1fr);
    justify-content: center;
    align-items: center;
    min-height: 40vh;
  }
  .indi {
    border-radius: 1rem;
    height: auto;

    title {
      margin: 3rem;
    }
    p {
      font-size: 1rem;
      font-weight: 200;
      background-color: #b4956d2e;
      padding: 1rem;
      border-radius: 0.3rem;
    }
    h1 {
      font-size: 2rem;
      font-weight: 800;
      color: #b4956d;
    }
  }
  span {
    height: 4rem;
  }
`;
