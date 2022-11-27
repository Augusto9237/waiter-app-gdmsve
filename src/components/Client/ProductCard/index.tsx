import { formatCurrency } from "../../../utils/formatCurrency";
import {
  ButtonAddProduct,
  ProductCardContainer,
  ProductDetails,
  ProductImage,
} from "./styles";

interface ProductCardProps {
  product: {
    _id: string;
    name: string;
    imagePath: string;
    price: number;
    ingredients: {
      name: string;
      icon: string;
      _id: string;
    }[];
    description: string;
  };
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <ProductCardContainer>
      <ProductImage>
        <img src={product.imagePath} alt={product.name} />
      </ProductImage>

      <ProductDetails>
        <h4 className="Product-name">{product.name}</h4>
        <span className="Product-description">{product.description}</span>
        <strong className="Product-description">
          {formatCurrency(product.price)}
        </strong>
      </ProductDetails>

      <ButtonAddProduct>
        <span>+</span>
      </ButtonAddProduct>
    </ProductCardContainer>
  );
}
