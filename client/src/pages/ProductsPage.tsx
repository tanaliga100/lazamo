import React from "react";
import styled from "styled-components";
import Filters from "../components/shared/Filters";
import HeaderNav from "../components/shared/HeaderNav";
import ProductList from "../components/shared/ProductList";
import Sort from "../components/shared/Sort";
import { useAppDispatch, useAppSelector } from "../features/hooks";
import { getAllProducts } from "../features/products/productSlice";

const ProductsPage = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.products.products);
  React.useEffect(() => {
    dispatch(getAllProducts());
  }, []);
  return (
    <>
      <HeaderNav title="Products" />
      <Sort />
      <Container>
        <section className="left-view">
          <Filters />
        </section>
        <section className="right-view">
          <ProductList prods={products} />
        </section>
      </Container>
    </>
  );
};

export default ProductsPage;

const Container = styled.div`
  padding: 0 10rem;
  display: grid;
  grid-template-columns: 25% 75%;
  width: 100%;
  /* justify-content: center; */
  /* align-items: center; */
  gap: 1rem;
  position: rlative;

  .left-view {
    background-color: teal;
  }
  .right-view {
    background: #9f692214;
  }
`;
