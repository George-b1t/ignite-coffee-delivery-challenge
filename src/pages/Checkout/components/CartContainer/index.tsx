import { useContext } from "react"
import { CartContext } from "../../../../context/CartContext"
import { formatValue } from "../../../../helpers/formatValue"
import { CartItem } from "./CartItem"
import {
  CartGeneralInformation,
  Container,
  TotalValueInformation,
  ValueInformation,
  ConfirmButton
} from "./styles"

function CartContainer() {
  const { coffees } = useContext(CartContext)

  const filteredCoffees = coffees.filter(i => i.count > 0);

  const total = filteredCoffees.reduce((a, b) => a + (b.amount * b.count) , 0);

  return (
    <Container>
      {
        filteredCoffees.map(coffee => (
          <CartItem coffee={coffee} />
        ))
      }

      <CartGeneralInformation>
        <ValueInformation>
          <p>Total de itens</p>
          <p>{formatValue(total)}</p>
        </ValueInformation>
        <ValueInformation>
          <p>Entrega</p>
          <p>R$ 3,50</p>
        </ValueInformation>
        <TotalValueInformation>
          <p>Total de itens</p>
          <p>{formatValue(total + 3.5)}</p>
        </TotalValueInformation>
      </CartGeneralInformation>

      <ConfirmButton type="submit">
        <p>CONFIRMAR PEDIDO</p>
      </ConfirmButton>
    </Container>
  )
}

export { CartContainer }
