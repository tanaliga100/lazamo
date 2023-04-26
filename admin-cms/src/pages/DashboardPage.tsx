import { Link } from "react-router-dom";
import styled from "styled-components";
import { links } from "../utils/constants";

const DashboardPage = () => {
  return (
    <Container>
      <LeftSection>
        {links.map((link) => (
          <Link to={`${link.url}`} key={link.id}>
            <span className="content">
              {link.icon}
              {link.text}
            </span>
          </Link>
        ))}
      </LeftSection>
      <RightSection>
        <p></p>
      </RightSection>
    </Container>
  );
};

export default DashboardPage;

const Container = styled.main`
  /* display: flex; */
  display: grid;
  grid-template-columns: 1fr 5fr;
  width: 100%;
`;

const LeftSection = styled.section`
  display: flex;
  flex-direction: column;
  text-align: center;

  a {
    text-decoration: none;
    list-style: none;
    align-items: center;
    justify-content: center;

    .content {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      align-items: center;
      padding: 1rem;
      margin-left: 3rem;

      &:hover {
        background-color: #e1c4454b;
        cursor: pointer;
      }
    }
  }
`;
const RightSection = styled.section`
  width: 100%;
  background-color: #ccb46a3a;

  p {
    background: transparent !important;
  }
`;
