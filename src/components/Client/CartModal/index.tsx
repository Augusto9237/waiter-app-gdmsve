import { useEffect } from "react";
import closeIcon from "../../../assets/images/close-icon.svg";
import { CartItem } from "../../../types/CartItem";
import { ProductType } from "../../../types/Products";
import { formatCurrency } from "../../../utils/formatCurrency";

import {
  ButtonCloseModal,
  ModalBodyCart,
  ModalContent,
  OverlayCartModal,
  FooterCart,
  PriceContainer,
} from "./styles";

interface CartModalProps {
  visible: boolean;
  cartItems: CartItem[];
  onClose: () => void;
  product: null | ProductType;
  onAddToCart: (product: ProductType) => void;
}

export function CartModal({ visible, onClose, cartItems }: CartModalProps) {
  if (!visible) {
    return null;
  }

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  const total = cartItems.reduce((acc, cartItem) => {
    return acc + cartItem.quantity * cartItem.product.price;
  }, 0);

  return (
    <OverlayCartModal>
      <ModalBodyCart>
        <ModalContent></ModalContent>
        <FooterCart>
          <PriceContainer>
            <span>Total</span>
            <strong>{formatCurrency(total)}</strong>
          </PriceContainer>

          <button onClick={onClose}>Confirmar pedido</button>
        </FooterCart>
      </ModalBodyCart>
    </OverlayCartModal>
  );
}
