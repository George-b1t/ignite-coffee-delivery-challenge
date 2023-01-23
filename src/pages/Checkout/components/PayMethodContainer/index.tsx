import { PayMethodButton } from "./PayMethodButton"
import { Container, Content, Header } from "./styles"

import moneySvg from "/src/assets/checkout/Money.svg"

function PayMethodContainer() {
  return (
    <Container>
      <Header>
        <div>
          <img src={moneySvg} alt="money" />
        </div>

        <div>
          <p>Pagamento</p>
          <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
        </div>
      </Header>

      <Content>
        <PayMethodButton active={true} icon="/src/assets/checkout/Credit.svg" title="CARTÃO DE CRÉDITO" />
        <PayMethodButton active={false} icon="/src/assets/checkout/Ballot.svg" title="CARTÃO DE DÉBITO" />
        <PayMethodButton active={false} icon="/src/assets/checkout/Ballot.svg" title="DINHEIRO" />
      </Content>
    </Container>
  )
}

export { PayMethodContainer }
