import { IItem } from "../../shop-data";
import { Container, Footer, Name, Price, Button } from "./product-card.styles";

const ProductCard = (props: { item: IItem }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { name, price, imageUrl } = props.item;
  return (
    <Container>
      <img src={imageUrl} alt={`${name}`} />
      <Footer>
        <Name>{name}</Name>
        <Price>&#163;{price}</Price>
        <Button>Add To Cart</Button>
      </Footer>
    </Container>
  );
};

export default ProductCard;
