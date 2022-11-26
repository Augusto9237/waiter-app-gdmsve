import { useEffect, useState } from "react";
import { Order } from "../../types/Order";
import { CartContainer, CartContent } from "./styles";

interface CartProps {
  orders: Order | null;
}

export function Cart() {
  return (
    <CartContainer>
      <CartContent>
        <span className="Cart-total">
          Total
          <h1>R$ 00</h1>
        </span>

        <button>Carrinho</button>
      </CartContent>
    </CartContainer>
  );
}
