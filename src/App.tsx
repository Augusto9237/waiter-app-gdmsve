import { Cart } from "./components/Cart";
import { Client } from "./components/Client";
import { Header } from "./components/Header";
import { GlobalStyles } from "./styles/GlobalStyles";
export function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Client />
      <Cart />
    </>
  );
}
