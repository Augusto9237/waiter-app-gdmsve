import { useEffect } from "react";
import closeIcon from "../../../assets/images/close-icon.svg";
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

interface ProductModalProps {
  visible: boolean;
  onClose: () => void;
  product: null | ProductType;
  onAddToCart: (product: ProductType) => void;
}

export function CartModal({
  visible,
  onClose,
  product,
  onAddToCart,
}: ProductModalProps) {
  if (!visible || !product) {
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

  function handleAddToCart() {
    onAddToCart(product!);
    onClose();
  }

  return (
    <OverlayCartModal>
      <ModalBodyCart>
        <ModalContent></ModalContent>
        <FooterCart>
          <PriceContainer>
            <span>Total</span>
            <strong>{formatCurrency(product.price)}</strong>
          </PriceContainer>

          <button onClick={handleAddToCart}>Confirmar pedido</button>
        </FooterCart>
      </ModalBodyCart>
    </OverlayCartModal>
  );
}
