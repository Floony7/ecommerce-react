import { CartItemType } from "../../contexts/cart.context";
import { CartItemContainer, ItemDetails } from "./cart-item.styles";

interface Props {
  cartItem: CartItemType;
}

export default function CartItem({ cartItem }: Props) {
  const { name, imageUrl, price, quantity } = cartItem;

  return (
    <CartItemContainer>
      <img src={imageUrl} alt={`${name}`} />
      <ItemDetails>
        <span>{name}</span>
        <span>
          {quantity} x {price}
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
}
