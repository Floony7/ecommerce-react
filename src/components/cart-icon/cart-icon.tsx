import { Container, BagIcon, Counter } from "./cart-icon.styles";

const CartIcon = () => {
  return (
    <Container>
      <BagIcon />
      <Counter>0</Counter>
    </Container>
  );
};

export default CartIcon;
