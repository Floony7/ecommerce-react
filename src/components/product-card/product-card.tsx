import { IItem } from "../../shop-data";
import "./product-card.styles";

const ProductCard = (props: { item: IItem }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { name, price, imgURL } = props.item;
  return (
    <section>
      {name} costs {price}
    </section>
  );
};

export default ProductCard;
