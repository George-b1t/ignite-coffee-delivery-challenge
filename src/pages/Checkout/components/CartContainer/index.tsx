import { CartItem } from "./CartItem"
import {
  CartGeneralInformation,
  Container,
  TotalValueInformation,
  ValueInformation,
  ConfirmButton
} from "./styles"

function CartContainer() {
  return (
    <Container>
      <CartItem />
      <CartItem />

      <CartGeneralInformation>
        <ValueInformation>
          <p>Total de itens</p>
          <p>R$ 29,70</p>
        </ValueInformation>
        <ValueInformation>
          <p>Entrega</p>
          <p>R$ 3,50</p>
        </ValueInformation>
        <TotalValueInformation>
          <p>Total de itens</p>
          <p>R$ 33,20</p>
        </TotalValueInformation>
      </CartGeneralInformation>

      <ConfirmButton type="submit">
        <p>CONFIRMAR PEDIDO</p>
      </ConfirmButton>
    </Container>
  )
}

export { CartContainer }
