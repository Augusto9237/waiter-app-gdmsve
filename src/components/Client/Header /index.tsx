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
          {selectedTable && (
            <div>
              <h1>Pedido</h1>
              <span>Mesa:{' '}{selectedTable}</span>
              <span>Atendente:</span>
            </div>
          )}
        </div>
        {!selectedTable && <img src={logo} alt="waiterapp" />}
        {selectedTable && (
          <button onClick={onCancelOrder}>
            <span>cancelar pedido</span>
          </button>
        )}
      </Content>
    </Container>
  );
}
