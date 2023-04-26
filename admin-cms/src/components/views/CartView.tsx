import { Link } from "react-router-dom";
import styled from "styled-components";
import { IListener } from "../../../../server/src/interfaces/product.interfaces";

const CartView = (props: IListener) => {
  return (
    <Container>
      {/* <Link
        to="/products"
        style={{
          listStyle: "none",
          textDecoration: "none",
          backgroundColor: "#b4956d",
          color: "white",
          display: "inline-block",
          padding: ".5rem",
          width: "fit-content",
        }}
      >
        {props.listener}
      </Link> */}
      <LinkContainer>
        <Link
          to="/products"
          style={{
            listStyle: "none",
            textDecoration: "none",
            letterSpacing: "2px",
            backgroundColor: "#b4956dd7",
            color: "white",
            display: "inline-block",
            padding: ".5rem",
            width: "fit-content",
          }}
        >
          {props.listener}
        </Link>
      </LinkContainer>
      <Table>
        <thead>
          <Tr>
            <Th>Item</Th>
            <Th>Price</Th>
            <Th>Quantity</Th>
            <Th>Subtotal</Th>
          </Tr>
        </thead>
        <tbody>
          <Tr>
            <Td>Item 1</Td>
            <Td>$10.00</Td>
            <Td>2</Td>
            <Td>$20.00</Td>
          </Tr>
          <Tr>
            <Td>Item 2</Td>
            <Td>$15.00</Td>
            <Td>1</Td>
            <Td>$15.00</Td>
          </Tr>
          <Tr>
            <Td>Item 3</Td>
            <Td>$5.00</Td>
            <Td>3</Td>
            <Td>$15.00</Td>
          </Tr>
        </tbody>
      </Table>
    </Container>
  );
};

export default CartView;

const Container = styled.main`
  width: 100%;
  /* background-color: #d2b48c1f; */
  max-height: 80vh;
  padding: 3rem;
`;

const LinkContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 1rem;
`;
const Table = styled.table`
  width: 100%;
  padding-top: 0.5rem;
  table-layout: fixed;
`;

const Th = styled.th`
  font-weight: 300;
  font-size: 1.3rem;
  text-align: center;
  letter-spacing: 0.1cap;
  border-bottom: 2px solid #b4956d99;
  padding: 1rem 0.5rem;
`;

const Td = styled.td`
  text-align: center;

  padding: 12px 15px;
`;

const Tr = styled.tr`
  justify-content: center;

  &:hover {
    background-color: #f5f5f5;
  }
`;
