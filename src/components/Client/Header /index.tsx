import logo from "../../../assets/images/logo.svg";
import { Container, Content } from "./styles";

interface HeaderProps {
  selectedTable: string;
  onCancelOrder: () => void;
}

export function HeaderClient({ selectedTable, onCancelOrder }: HeaderProps) {
  return (
    <Container>
      <Content>
        <div className="page-details">
          {!selectedTable && (
            <>
              <span>Bem-vindo(a) ao</span>
              <h1>REST</h1>
            </>
          )}
          {selectedTable && <h1>Pedido</h1>}
        </div>
        {!selectedTable && <img src={logo} alt="waiterapp" />}
        {selectedTable && (
          <button onClick={onCancelOrder}>Cancelar Pedido</button>
        )}
      </Content>
    </Container>
  );
}
