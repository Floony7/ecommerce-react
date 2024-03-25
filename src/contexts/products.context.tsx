import { ReactNode, createContext, useState } from "react";
import PRODUCTS, { ShopData } from "../../src/shop-data";

export const ProductsContext = createContext<ShopData[] | null>(null);

export const ProductsProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<ShopData[]>(PRODUCTS);

  return (
    <ProductsContext.Provider value={products}>
      {children}
    </ProductsContext.Provider>
  );
};
