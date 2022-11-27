import logo from "../../assets/images/logo.svg";
import { Container, Content } from "./styles";

export function HeaderClient() {
  return (
    <Container>
      <Content>
        <div className="page-details">
          <span>Bem-vindo(a) ao</span>
          <h1>REST</h1>
        </div>

        <img src={logo} alt="waiterapp" />
      </Content>
    </Container>
  );
}
