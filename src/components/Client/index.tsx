import { Cart } from "../Cart";
import { Categories } from "../Categories";
import { Products } from "../Products";

import { Container } from "./styles";

export function Client() {
  return (
    <Container>
      <Categories />
      <Products />
    </Container>
  );
}
