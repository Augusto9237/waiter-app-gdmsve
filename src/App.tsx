import { Client } from "./components/Client";
import { Header } from "./components/Orders/Header";
import { HeaderClient } from "./components/Client/Header ";
import { Orders } from "./components/Orders";
import { GlobalStyles } from "./styles/GlobalStyles";
import { Cart } from "./components/Client/Cart";
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
