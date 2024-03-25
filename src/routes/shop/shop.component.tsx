import { useContext } from "react";
import { ProductsContext } from "../../contexts/products.context.js";
import ProductCard from "../../components/product-card/product-card.js";

const Shop = () => {
  // const allItems = SHOP_DATA.flatMap(productType => productType.items);
  const products = useContext(ProductsContext);
  return (
    <div>
      {products != null &&
        products.map((productType) => (
          <section key={productType.title}>
            <h2>{productType.title}</h2>
            {productType.items.map((item) => (
              <ProductCard item={item} />
            ))}
            {/* {productType.items.map(({ id, name }) => (
              <div key={id}>
                <h3>{name}</h3>
              </div>
            ))} */}
          </section>
        ))}
    </div>
  );
};

export default Shop;
