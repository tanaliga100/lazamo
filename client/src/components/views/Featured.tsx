import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { useAppSelector } from "../../features/hooks";
import { getFeaturedProducts } from "../../features/products/productSlice";
import { AppDispatch } from "../../features/store";

const Featured = () => {
  const dispatch: AppDispatch = useDispatch();
  const { featured, isError, isLoading, message } = useAppSelector(
    (state) => state.products
  );

  console.log(featured);

  React.useEffect(() => {
    dispatch(getFeaturedProducts());
  }, []);

  if (isLoading) {
    <p>LOADING</p>;
  }

  return (
    <Container>
      <h1>Featured Products</h1>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <section className="content">
          {featured &&
            featured?.map((product: any) => (
              <div key={product._id}>
                <img src={product.image} alt="" width={200} height={200} />
                <h2>{product.name}</h2>
                <p>{product.description.slice(0, 100)}...</p>
                <h3>$ {product.price.toFixed(2)}</h3>
                <small>{product.averageRating}</small>
              </div>
            ))}
        </section>
      )}
    </Container>
  );
};

export default Featured;
const Container = styled.section`
  min-height: 100vh;
  background-color: #d2b48c29;
  width: 100%;

  h1 {
    padding-left: 3rem;
    font-size: 2rem;
    font-weight: 300;
  }

  .content {
    padding: 2rem 3rem;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    width: 100%;
    justify-content: center;
    align-items: center;

    h2 {
      padding: 1rem 0;
      color: #d89644cc;
      justify-content: center;
    }
  }
`;
