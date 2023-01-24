import {
  CoffeeCartButton,
  CoffeeCountCartContainer,
  CoffeeCountContainer,
  CoffeeDescription,
  CoffeeName,
  CoffeePurchaseContainer,
  CoffeeValue,
  Container,
  TagsContainer
} from "./styles";

import plusSvg from "../../assets/coffees/card/plus.svg"
import minusSvg from "../../assets/coffees/card/minus.svg"
import cartSvg from "../../assets/coffees/card/cart.svg"
import { Coffee } from "../../reducers/cart/reducer";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

interface CoffeeCardProps {
  coffee: Coffee;
}

function CoffeeCard({ coffee }: CoffeeCardProps) {
  const { addCoffee, decreaseCoffee } = useContext(CartContext);

  function handleAddCoffe() {
    addCoffee(coffee.name)
  }

  function handleDecreaseCoffee() {
    decreaseCoffee(coffee.name)
  }

  return (
    <Container>
      <img src={`/src/assets/coffees/${coffee.image}.png`} alt={coffee.image} />

      <TagsContainer>
        {
          coffee.tags.map(tag => (
            <p>{tag}</p>
          ))
        }
      </TagsContainer>

      <CoffeeName>{coffee.name}</CoffeeName>

      <CoffeeDescription>{coffee.description}</CoffeeDescription>

      <CoffeePurchaseContainer>
        <CoffeeValue>
          <span>R$</span>
          <p>
            {
              Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              })
              .format(coffee.amount)
              .replace("R$", "")
              .trim()
            }
          </p>
        </CoffeeValue>

        <CoffeeCountCartContainer>
          <CoffeeCountContainer>
            <img src={minusSvg} alt="minus" onClick={handleDecreaseCoffee} />
            <p>{coffee.count}</p>
            <img src={plusSvg} alt="plus" onClick={handleAddCoffe} />
          </CoffeeCountContainer>

          <CoffeeCartButton to="/checkout">
            <img src={cartSvg} alt="cart" />
          </CoffeeCartButton>
        </CoffeeCountCartContainer>
      </CoffeePurchaseContainer>
    </Container>
  )
}

export { CoffeeCard }
