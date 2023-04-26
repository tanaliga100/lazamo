import HeaderNav from "../components/shared/HeaderNav";
import CartView from "../components/views/CartView";

const CartPage = () => {
  return (
    <div>
      <HeaderNav title="Cart" />
      <CartView listener="Continue Shopping" />
    </div>
  );
};

export default CartPage;
