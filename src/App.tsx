import { Cart } from "./components/Cart";
import { Client } from "./components/Client";
import { Header } from "./components/Header";
import { HeaderClient } from "./components/HeaderClient";
import { Orders } from "./components/Orders";
import { GlobalStyles } from "./styles/GlobalStyles";
export function App() {
  return (
    <>
      <GlobalStyles />
      <HeaderClient />
      <Client />
      <Cart />
    </>
  );
}
