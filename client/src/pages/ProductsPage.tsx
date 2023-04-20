import styled from "styled-components";
import Filters from "../components/shared/Filters";
import HeaderNav from "../components/shared/HeaderNav";
import ProductList from "../components/shared/ProductList";
import Sort from "../components/shared/Sort";

const ProductsPage = () => {
  return (
    <>
      <HeaderNav title="Products" />
      <Container>
        <section className="left-view">
          <Filters />
        </section>
        <section className="right-view">
          <Sort />
          <ProductList />
        </section>
      </Container>
    </>
  );
};

export default ProductsPage;

const Container = styled.div`
  padding: 3rem;
  display: grid;
  grid-template-columns: 25% 75%;
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  position: rlative;

  .left-view {
    background-color: teal;
  }
  .right-view {
    background: #9f6922;
  }
`;
