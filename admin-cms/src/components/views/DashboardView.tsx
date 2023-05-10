import styled from "styled-components";
import BarChartComponent from "../charts/BarChart";
import PieChartComponent from "../charts/PieChart";

const DashboardView = () => {
  return (
    <Container>
      <DashboardWrapper>
        <SalesCard>
          <h3>Sales</h3>
          <p>Total sales: 1000</p>
        </SalesCard>
        <ProductsCard>
          <h3>Products</h3>
          <p>Total products: 50</p>
        </ProductsCard>
        <UsersCard>
          <h3>Users</h3>
          <p>Total users: 200</p>
        </UsersCard>
        <InventoryCard>
          <h3>Inventory</h3>
          <p>Total inventory: 5000</p>
        </InventoryCard>
        <StatisticsCard>
          <h3>Statistics</h3>
          <p>Some statistics here</p>
        </StatisticsCard>
      </DashboardWrapper>
      <DashboardLower>
        <BarChartComponent />
        <PieChartComponent />
      </DashboardLower>
    </Container>
  );
};

export default DashboardView;

const Container = styled.main`
  display: grid;
  grid-auto-rows: auto;
  max-width: 100%;
  gap: 1rem;
  margin: 0 auto;
`;

const DashboardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 1rem;
  gap: 1rem;
  justify-content: space-between;
`;

const DashboardLower = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2px;
  justify-content: space-between;
`;

const Card = styled.div`
  width: 160px;
  background-color: transparent !important;
  min-height: 40%;
  border-radius: 10px;
  box-shadow: 1px 1px 10px 1px rgba(0, 0, 0, 0.25);
  padding: 1rem;
  text-align: center;
`;

const SalesCard = styled(Card)`
  background-color: #f4433623;
`;

const ProductsCard = styled(Card)`
  background-color: #683ab733;
`;

const UsersCard = styled(Card)`
  background-color: #2195f33c;
`;

const InventoryCard = styled(Card)`
  background-color: #4caf4f4d;
`;

const StatisticsCard = styled(Card)`
  background-color: #ffc1074d;
`;
