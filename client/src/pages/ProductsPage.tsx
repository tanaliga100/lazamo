import styled from "styled-components";
import Filters from "../components/shared/Filters";
import HeaderNav from "../components/shared/HeaderNav";
import ProductList from "../components/shared/ProductList";
import Sort from "../components/shared/Sort";

const ProductsPage = () => {
  // const dispatch: AppDispatch = useDispatch();
  // const products = useAppSelector((state) => state.products.products);

  // React.useEffect(() => {
  //   dispatch(GET_ALL_PRODUCTS());
  // }, []);
  return (
    <>
      <HeaderNav title="Products" />
      <Sort />
      <Container>
        <section className="left-view">
          <Filters />
        </section>
        <section className="right-view">
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
  /* justify-content: center; */
  /* align-items: center; */
  gap: 1rem;
  position: rlative;

  .left-view {
    background-color: teal;
  }
  .right-view {
    background: #9f692223;
  }
`;
