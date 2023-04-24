import styled from "styled-components";

const ProductList = (props: any) => {
  console.log(props.products);

  return (
    <Container>
      {props.products &&
        props.products.map((product: any) => (
          <Card key={product._id}>
            <div className="content">
              <img
                src={product.image}
                alt="prod-image"
                width={100}
                height={100}
              />
              <p>{product.name}</p>
              <p>{product.averageRating}</p>
              <p>{product.price}</p>
              {/* <p>{product.inventory}</p>
              <p>{product.description}</p>
              <p>{product.company}</p>
              <p>{product.category}</p> */}
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
`;

const Card = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: start;
`;
