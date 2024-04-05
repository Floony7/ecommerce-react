import { useContext } from "react";
import { Container, BagIcon, Counter } from "./cart-icon.styles";
import { CartContext } from "../../contexts/cart.context";

const CartIcon = () => {
  const { setIsCartOpen, totalQuantity } = useContext(CartContext);
  const toggleShow = () => setIsCartOpen((prev) => !prev);

  return (
    <Container onClick={toggleShow}>
      <BagIcon />
      <Counter>{totalQuantity}</Counter>
    </Container>
  );
};

export default CartIcon;
