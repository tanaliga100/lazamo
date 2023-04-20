import { useLocation } from "react-router-dom";
import styled from "styled-components";

const HeaderNav = () => {
  const nav = useLocation();

  return <HeadNav></HeadNav>;
};

export default HeaderNav;

const HeadNav = styled.div`
  display: flex;
  height: 100px;
  background-color: #d2b48c57;
  color: white;
`;
