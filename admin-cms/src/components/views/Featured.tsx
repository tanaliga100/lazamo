import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../../features/hooks";
import { getFeaturedProducts } from "../../features/products/productSlice";

const Featured = () => {
  const dispatch = useAppDispatch();
  const { featured, isError, isLoading, message } = useAppSelector(
    (state) => state.products
  );

  React.useEffect(() => {
    dispatch(getFeaturedProducts());
  }, []);

  return (
    <Container>
      <h1>
        <span>Featured</span> Products
      </h1>
      {isLoading ? (
        <div className="spinner">Loading...PLEASE WAIT</div>
      ) : (
        <section className="content">
          {/* {featured?.length === 0 && (
            <div className="prompt">No Featured Products </div>
          )} */}
          {featured &&
            featured?.map((product: any) => (
              <div key={product._id} className="each">
                <img src={product.image} alt="" width={200} height={150} />
                <h2>{product.name}</h2>
                <p>{product.description.slice(0, 100)}...</p>
                <h3>$ {product.price.toFixed(2)}</h3>
              </div>
            ))}
        </section>
      )}
      <Link to="/products">All Products</Link>
    </Container>
  );
};

export default Featured;
const Container = styled.section`
  min-height: 80%;
  /* background-color: #d2b48c29; */
  text-align: center;
  padding: 0 10rem;
  width: 100%;

  a {
    display: flex;
    color: white;
    padding: 1rem;
    border-radius: 0.3rem;
    text-decoration: none;
    font-size: 1rem;
    font-weight: 700;
    letter-spacing: 0.3cap;
    justify-content: center;
    align-items: center;
    background-color: #de9e49;
    width: fit-content;
    margin: 0 auto;

    &:hover {
      background-color: #b4956d;
      cursor: pointer;
    }
  }
  h1 {
    padding-left: 3rem;
    font-size: 2rem;
    font-weight: 300;
    text-align: left;
  }
  span {
    color: #b08a54;
  }

  .content {
    padding: 2rem 3rem;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    width: 100%;
    margin: 0 auto;
    gap: 2rem;
    justify-content: center;
    align-items: center;

    .prompt {
      text-align: justify;
      width: 100%;
      font-size: 3rem;
      font-weight: 100;
    }

    .each {
      margin: 0 auto;
      &:hover {
        cursor: pointer;
      }
      .company {
        display: block;
        text-align: center;
        background-color: #b08a54;
        color: white;
      }
    }

    img {
      border-radius: 3%;
      transition: all 0.3s ease-in-out;
      &:hover {
        transform: scale(1.1);
      }
    }
    h2 {
      padding: 1rem 0;
      color: #d89644cc;
      justify-content: center;
      font-size: 1.4rem;
      font-weight: 300;
    }
    h3 {
      padding-top: 1rem;
      color: #dc8914fa;
    }
  }
`;
