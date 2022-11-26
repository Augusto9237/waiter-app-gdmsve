import { products } from "../../mocks/products";
import { ProductCard } from "../ProductCard";
import { ProductsContainer } from "./styles";

export function Products() {
  return (
    <ProductsContainer>
      {products.map((product) => {
        return <ProductCard key={product._id} product={product} />;
      })}
    </ProductsContainer>
  );
}
