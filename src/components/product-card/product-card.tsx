import { useContext } from "react";
import { CartContext, IItem } from "../../contexts/cart.context";
import { Container, Footer, Name, Price, Button } from "./product-card.styles";

const ProductCard = (props: { item: IItem }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { name, price, imageUrl } = props.item;
  const { addItemToCart } = useContext(CartContext);

  return (
    <Container>
      <img src={imageUrl} alt={`${name}`} />
      <Footer>
        <Name>{name}</Name>
        <Price>&#163;{price}</Price>
        <Button onClick={() => addItemToCart(props.item)}>Add To Cart</Button>
      </Footer>
    </Container>
  );
};

export default ProductCard;
