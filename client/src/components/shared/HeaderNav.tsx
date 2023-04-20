import { Link } from "react-router-dom";
import styled from "styled-components";

interface IHeaderNav {
  title: string;
  product?: string;
}

const HeaderNav = (props: IHeaderNav) => {
  return (
    <HeadNav>
      <Link to="/">Home</Link>
      {props.product && <Link to="/products">/ Products</Link>} / {props.title}
    </HeadNav>
  );
};

export default HeaderNav;

const HeadNav = styled.section`
  padding-left: 9rem;
  max-height: 10rem;
  background-color: #d2b48c3c;
  width: 100%;
  min-height: 15vh;
  display: flex;
  align-items: center;
  font-size: 1.3rem;
  font-weight: 500;
  color: #c4a47b;

  & section {
    background-color: black;
  }
  & a {
    background-color: none !important;
    background-color: transparent;
    color: inherit;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;
