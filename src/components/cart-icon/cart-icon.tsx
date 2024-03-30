import { useContext } from "react";
import { Container, BagIcon, Counter } from "./cart-icon.styles";
import { CartContext, SHOW_CART } from "../../contexts/cart.context";

const CartIcon = () => {
  const { isCartOpen, dispatch } = useContext(CartContext);

  const toggleShow = () => dispatch({ type: SHOW_CART, payload: !isCartOpen });

  return (
    <Container onClick={toggleShow}>
      <BagIcon />
      <Counter>0</Counter>
    </Container>
  );
};

export default CartIcon;
