import { products } from "../../mocks/products";
import { ProductType } from "../../types/Products";
import { Categories } from "./Categories";
import { ProductCard } from "./ProductCard";
import { Products } from "./Products";

import { Container, ProductsContainer } from "./styles";

interface ClientProps {
  onAddToCart: (product: ProductType) => void;
}

export function Client({ onAddToCart }: ClientProps) {
  return (
    <Container>
      <Categories />
      <ProductsContainer>
        {products.map((product) => {
          return (
            <ProductCard
              product={product}
              key={product._id}
              onAddToCart={onAddToCart}
            />
          );
        })}
      </ProductsContainer>
    </Container>
  );
}
