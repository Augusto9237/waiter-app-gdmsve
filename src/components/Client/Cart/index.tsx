import { useEffect, useState } from "react";
import { CartItem } from "../../../types/CartItem";
import { Order } from "../../../types/Order";
import { ProductType } from "../../../types/Products";
import { formatCurrency } from "../../../utils/formatCurrency";
import { CartContainer, CartContent } from "./styles";

interface CartProps {
  selectedTable: string;
  cartItems: CartItem[];
  onAdd: (product: ProductType) => void;
  onDecrement: (product: ProductType) => void;
  onConfirmOrder: () => void;
}
export function Cart({
  cartItems,
  onAdd,
  onDecrement,
  onConfirmOrder,
  selectedTable,
}: CartProps) {
  const total = cartItems.reduce((acc, cartItem) => {
    return acc + cartItem.quantity * cartItem.product.price;
  }, 0);

  return (
    <CartContainer>
      <CartContent>
        {!selectedTable && <button>Novo Pedido</button>}
        {selectedTable && (
          <>
            <div className="Cart-total">
              Total
              <h1>{formatCurrency(total)}</h1>
            </div>

            <button>Confirmar pedido</button>
          </>
        )}
      </CartContent>
    </CartContainer>
  );
}
