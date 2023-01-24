import { useContext } from "react";
import { CartContext } from "../../../../../context/CartContext";
import { formatValue } from "../../../../../helpers/formatValue";
import { Coffee } from "../../../../../reducers/cart/reducer";
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

interface CartItemProps {
  coffee: Coffee;
}

function CartItem({ coffee }: CartItemProps) {
  const { addCoffee, decreaseCoffee } = useContext(CartContext);

  const { name, count, amount, image } = coffee;

  function handleAddCoffe() {
    addCoffee(name)
  }

  function handleDecreaseCoffee() {
    decreaseCoffee(name)
  }

  return (
    <Container>
      <Content>
        <img src={`/src/assets/coffees/${image}.png`} alt={name} />
        <CoffeeInfo>
          <CoffeeInfoMenu>
            <p>{name}</p>

            <div>
              <Count>
                <img src={minusSvg} alt="minus" onClick={handleDecreaseCoffee} />
                  <p>{count}</p>
                <img src={plusSvg} alt="plus" onClick={handleAddCoffe} />
              </Count>
              <DeleteItem>
                <img src={trashSvg} alt="trash" />
                <p>REMOVER</p>
              </DeleteItem>
            </div>
          </CoffeeInfoMenu>

          <CoffeeValue>
            <p>{formatValue(amount * count)}</p>
          </CoffeeValue>
        </CoffeeInfo>
      </Content>

      <Wrapper />
    </Container>
  )
}

export { CartItem }
