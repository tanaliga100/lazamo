import styled from "styled-components";

const ProductList = (props: any) => {
  console.log("PROD", props);

  return (
    <Container>
      {props.prods &&
        props.prods.map((product: any) => (
          <Card key={product._id}>
            <div className="content">
              <img
                src={product.image}
                alt="prod-image"
                width={160}
                height={100}
              />
              <p className="name">{product.name.toUpperCase()}</p>
              {/* <p>{product.inventory}</p> */}
              {/* <p>{product.description.slice(0, 50)}</p> */}
              <p>{product.category}</p>
              <p className="price">$ {product.price.toFixed(2)}</p>
            </div>
          </Card>
        ))}
    </Container>
  );
};

export default ProductList;
const Container = styled.div`
  display: grid;
  text-align: center;
  grid-template-columns: repeat(5, 1fr);
  background-color: transparent !important;
`;

const Card = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: start;
  background-color: transparent !important;
  padding: 1rem;

  .content {
    padding-bottom: 1rem;
  }

  img {
    padding: 0.5rem;
    border-radius: 10px;
    transition: all 0.7s ease-in-out;
    &:hover {
      transform: scale(0.9);
    }
  }
  .name {
    color: #dca314;
    font-size: 1rem;
    font-weight: 500;
  }
  .price {
    color: #e6a551;
  }
`;
