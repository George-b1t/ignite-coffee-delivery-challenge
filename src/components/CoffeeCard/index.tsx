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

interface Coffee {
  name: string;
  description: string;
  tags: string[];
  image: string;
  amount: number;
  count: number;
}

interface CoffeeCardProps {
  coffee: Coffee;
  index: number;
  changeCoffeeCount: (index: number, newCount: number) => void;
}

function CoffeeCard({ coffee, index, changeCoffeeCount }: CoffeeCardProps) {
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
            <img src={minusSvg} alt="minus" onClick={() => changeCoffeeCount(index, coffee.count - 1)} />
            <p>{coffee.count}</p>
            <img src={plusSvg} alt="plus" onClick={() => changeCoffeeCount(index, coffee.count + 1)} />
          </CoffeeCountContainer>

          <CoffeeCartButton to="/cart">
            <img src={cartSvg} alt="cart" />
          </CoffeeCartButton>
        </CoffeeCountCartContainer>
      </CoffeePurchaseContainer>
    </Container>
  )
}

export { CoffeeCard }
