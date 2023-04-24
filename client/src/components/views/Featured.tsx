import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { GET_FEATURED_PRODUCTS } from "../../features/products/productSlice";
import { AppDispatch } from "../../features/store";

const Featured = () => {
  const dispatch: AppDispatch = useDispatch();
  // const products = useAppSelector((state) => state.products.products);

  React.useEffect(() => {
    dispatch(GET_FEATURED_PRODUCTS());
  }, []);

  return (
    <Container>
      <h1>Featured Products</h1>
      <section className="content">
        {/* {products.map((product: any) => (
          <div key={product.id}>{product.name}</div>
        ))} */}
      </section>
    </Container>
  );
};
export default Featured;

const Container = styled.section`
  height: 80vh;
  text-align: left;
  background-color: #d2b48c29;

  h1 {
    padding-left: 3rem;
    font-size: 2rem;
    font-weight: 700;
  }
  .content {
    padding: 0 3rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-content: center;
    align-items: center;
  }
`;
