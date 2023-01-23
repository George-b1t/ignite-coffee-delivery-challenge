import {
  Container,
  Content,
  Count,
  CoffeeInfo,
  CoffeeInfoMenu,
  CoffeeValue,
  DeleteItem,
  Wrapper
} from "./styles";

import minusSvg from "/src/assets/coffees/card/minus.svg"
import plusSvg from "/src/assets/coffees/card/plus.svg"
import trashSvg from "/src/assets/coffees/card/trash.svg"

function CartItem() {
  return (
    <Container>
      <Content>
        <img src="/src/assets/coffees/expresso_tradicional.png" alt="expresso tradicional" />
        <CoffeeInfo>
          <CoffeeInfoMenu>
            <p>Expresso Tradicional</p>

            <div>
              <Count>
                <img src={minusSvg} alt="minus" />
                  <p>{1}</p>
                <img src={plusSvg} alt="plus" />
              </Count>
              <DeleteItem>
                <img src={trashSvg} alt="trash" />
                <p>REMOVER</p>
              </DeleteItem>
            </div>
          </CoffeeInfoMenu>

          <CoffeeValue>
            <p>R$ 9,90</p>
          </CoffeeValue>
        </CoffeeInfo>
      </Content>

      <Wrapper />
    </Container>
  )
}

export { CartItem }
