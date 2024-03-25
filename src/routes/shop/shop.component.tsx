import { useContext } from "react";
import { ProductsContext } from "../../contexts/products.context.js";
import ProductCard from "../../components/product-card/product-card.js";
import { ProductContainer } from "../../components/product-card/product-card.styles.js";

const Shop = () => {
  // const allItems = SHOP_DATA.flatMap(productType => productType.items);
  const products = useContext(ProductsContext);
  return (
    <ProductContainer>
      {products != null &&
        products.map((productType) => (
          <section key={productType.title}>
            <h2>{productType.title}</h2>
            {productType.items.map((item) => (
              <ProductCard key={item.id} item={item} />
            ))}
          </section>
        ))}
    </ProductContainer>
  );
};

export default Shop;
